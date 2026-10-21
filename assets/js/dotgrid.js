/*
 * Dot Matrix (HomeFX "dotgrid")
 *
 * An evenly spaced field of tiny dots (1px radius) in the ink color at very low alpha.
 * A slow luminance drift (three long, slow plane waves) moves across the
 * field; near the pointer the dots ease toward the accent color and grow a
 * little, with smoothed follow and per-dot easing. The field dims under the
 * reading column so body text keeps its contrast.
 *
 * Canvas 2D, no dependencies. Cost control:
 *  - one pre-rendered sprite sheet (color/size steps), one drawImage per dot;
 *  - the slow ambient field is refreshed a few rows per frame (whole grid
 *    about every 0.1 s), and only the cells around the pointer are redrawn
 *    every frame; with no pointer activity the loop drops to ~20 Hz;
 *  - wave terms are separable, so a frame needs a few hundred Math.sin calls.
 *
 * window.HomeFX.dotgrid.start(canvas, opts) -> { stop(), update(opts) }
 * opts: { dark, ink, accent, bg, intensity (0..1) }
 *       optional: content (Element or selector of the reading column)
 */
(function () {
  "use strict";

  var FX = (window.HomeFX = window.HomeFX || {});

  /* ---- tuning (CSS px, seconds) ---- */
  var PITCH = 24;            /* grid spacing */
  var PITCH_PHONE = 22;      /* spacing below 640px wide */
  var R_REST = 1.0;          /* resting dot radius */
  var R_HOT = 1.45;          /* radius at full pointer activation */
  var LENS_R = 130;          /* pointer influence radius */
  var STEPS = 16;            /* color/size steps in the sprite sheet */
  var REFRESH = 0.1;         /* ambient field: whole grid redrawn every REFRESH s */
  var IDLE_TICK = 50;        /* ms between updates while only the ambient field moves */
  var TAU_FOLLOW = 0.09;     /* lens follows the pointer with this lag */
  var TAU_RISE = 0.12;       /* per-dot activation rise */
  var TAU_FALL = 0.6;        /* per-dot activation fall (exponential part) */
  var FALL_LIN = 0.12;       /* per-dot activation fall (linear part, per s) */
  var IDLE_AFTER = 2.5;      /* pointer at rest for this long ... */
  var IDLE_LEVEL = 0;        /* ... fades the lens out (no halo parked in the margin) */
  var FADE_IN = 0.9;         /* field fades in on start */
  var T_STATIC = 14;         /* wave time used for the reduced-motion frame */
  /* reading-column mask: margin = 1, under the column = floor. The floor rises
     a little when the column fills the screen (phones), where there is no margin. */
  var FLOOR_BASE = 0.55, FLOOR_BASE_FULL = 0.6, FLOOR_GLOW = 0.25;
  var MASK_IN = 24, MASK_OUT = 150;   /* transition from 24px inside to 150px outside the column edge */
  /* ambient waves: wavelength px, direction deg, speed px/s, weight */
  var WAVES = [
    [760, 32, 40, 0.62],
    [1500, 150, 16, 0.28],
    [520, 260, 11, 0.1]
  ];
  /* the summed wave is shaped into soft crests over a calm base:
     multiplier AMB_LO on the base, up to AMB_HI on a crest */
  var AMB_LO = 0.72, AMB_HI = 1.6;
  var TINT = 0.25;                     /* crests drift this far toward the accent step */
  var CREST_FLOOR = 0.4;               /* crest strength under the reading column */

  var LIGHT_ACCENT = [141, 184, 255];  /* #8DB8FF */

  function clamp01(x) { return x < 0 ? 0 : x > 1 ? 1 : x; }
  function smooth(e0, e1, x) { var u = clamp01((x - e0) / (e1 - e0)); return u * u * (3 - 2 * u); }
  function parseHex(hex, fallback) {
    var h = String(hex == null ? "" : hex).trim().replace(/^#/, "");
    if (h.length === 3) h = h.charAt(0) + h.charAt(0) + h.charAt(1) + h.charAt(1) + h.charAt(2) + h.charAt(2);
    if (!/^[0-9a-fA-F]{6}$/.test(h)) return fallback;
    var n = parseInt(h, 16);
    return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  }
  function mix(a, b, u) { return [a[0] + (b[0] - a[0]) * u, a[1] + (b[1] - a[1]) * u, a[2] + (b[2] - a[2]) * u]; }
  function css(c) { return "rgb(" + Math.round(c[0]) + "," + Math.round(c[1]) + "," + Math.round(c[2]) + ")"; }
  function luma(c) { return (0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2]) / 255; }

  function start(canvas, opts0) {
    var opts = {};
    var k;
    for (k in opts0) if (Object.prototype.hasOwnProperty.call(opts0, k)) opts[k] = opts0[k];

    var ctx = canvas.getContext("2d");
    var noop = { stop: function () {}, update: function () {} };
    if (!ctx) return noop;

    var raf = window.requestAnimationFrame.bind(window);
    var caf = window.cancelAnimationFrame.bind(window);

    /* layout */
    var W = 0, H = 0, rawDpr = 1, dpr = 1, pitch = PITCH;
    var cols = 0, rows = 0, ox = 0, oy = 0;
    var colX, rowY, devX, devY, colEdge, rowEdge, maskB, maskG, crestW, act;
    var nW = WAVES.length;
    var rowS = [], rowC = [], colS = [], colC = [], wKx = [], wKy = [], wOm = [], wWt = [];
    /* theme */
    var sheet = null, CELL = 8, HALF = 4, A0 = 0.15, A1 = 0.55;
    /* time / state */
    var t = 0, last = 0, rafId = 0, timerId = 0, stopped = false, fade = 0, reduced = false;
    var bandRow = 0, bandAcc = 0;
    var ptr = { x: 0, y: 0, on: false, moved: -1e9 };
    var lens = { x: 0, y: 0, s: 0 };
    var box = null;            /* [c0, c1, r0, r1] of dots with activation > 0 */
    var busy = false;          /* lens still moving / easing: run at full frame rate */
    var resizeTimer = 0;
    var mql = window.matchMedia ? window.matchMedia("(prefers-reduced-motion: reduce)") : null;
    /* touch-only devices (phones, tablets) get the static field: no pointer, and it saves battery */
    var touchOnly = window.matchMedia ? window.matchMedia("(hover: none) and (pointer: coarse)").matches : false;

    for (k = 0; k < nW; k++) {
      var w = WAVES[k], kk = (2 * Math.PI) / w[0], th = (w[1] * Math.PI) / 180;
      wKx.push(kk * Math.cos(th)); wKy.push(kk * Math.sin(th)); wOm.push(kk * w[2]); wWt.push(w[3]);
    }

    /* ---------------------------------------------------------------- theme */
    function applyTheme() {
      var i = Number(opts.intensity);
      if (!(i >= 0)) i = 0.5;
      if (i > 1) i = 1;
      var bg = parseHex(opts.bg, null);
      var dark = typeof opts.dark === "boolean" ? opts.dark : (bg ? luma(bg) < 0.4 : false);
      var gain = i <= 0.5 ? 0.35 + 1.3 * i : 1 + 1.4 * (i - 0.5);    /* 0 -> .35, .5 -> 1, 1 -> 1.7 */
      var hot = 0.55 + 0.9 * i;                                        /* 0 -> .55, .5 -> 1, 1 -> 1.45 */
      var accent = parseHex(opts.accent, [79, 143, 247]);
      var base, hi;
      if (dark) {
        base = LIGHT_ACCENT;
        hi = mix(LIGHT_ACCENT, [255, 255, 255], 0.15);   /* lit dots: a touch lighter than #8DB8FF */
        A0 = 0.17 * gain;
        A1 = Math.min(0.9, 0.7 * hot);
      } else {
        base = parseHex(opts.ink, [12, 35, 64]);
        hi = accent;
        A0 = 0.18 * gain;
        A1 = Math.min(0.9, 0.55 * hot);
      }
      buildSheet(base, hi);
    }

    function buildSheet(base, hi) {
      CELL = Math.ceil((R_HOT * dpr + 1.5) * 2);
      if (CELL % 2) CELL++;
      HALF = CELL / 2;
      sheet = document.createElement("canvas");
      sheet.width = CELL * STEPS;
      sheet.height = CELL;
      var g = sheet.getContext("2d");
      for (var s = 0; s < STEPS; s++) {
        var u = s / (STEPS - 1);
        g.fillStyle = css(mix(base, hi, u));
        g.beginPath();
        g.arc(s * CELL + HALF, HALF, (R_REST + (R_HOT - R_REST) * u) * dpr, 0, Math.PI * 2);
        g.fill();
      }
    }

    /* --------------------------------------------------------------- layout */
    var CONTENT = [".page__content", "#main .page", "#main .archive", "main", "article"];
    function contentBounds() {
      var o = opts.content, el = null, list = typeof o === "string" && o ? [o] : CONTENT;
      try {
        if (o && o.nodeType === 1) el = o;
        for (var q = 0; !el && q < list.length; q++) el = document.querySelector(list[q]);
      } catch (e) { el = null; }
      if (el) {
        var r = el.getBoundingClientRect();
        if (r.width > 120) return [r.left, r.right];
      }
      var cw = Math.min(W - 40, 820);
      return [(W - cw) / 2, (W + cw) / 2];
    }

    function computeMask() {
      var b = contentBounds();
      var floor = FLOOR_BASE + (FLOOR_BASE_FULL - FLOOR_BASE) * smooth(0.72, 0.92, (b[1] - b[0]) / W);
      for (var c = 0; c < cols; c++) {
        var x = colX[c];
        var d = x < b[0] ? b[0] - x : x > b[1] ? x - b[1] : -Math.min(x - b[0], b[1] - x);
        var m = smooth(-MASK_IN, MASK_OUT, d);
        maskB[c] = floor + (1 - floor) * m;
        maskG[c] = FLOOR_GLOW + (1 - FLOOR_GLOW) * m;
        crestW[c] = (CREST_FLOOR + (1 - CREST_FLOOR) * m) * (AMB_HI - AMB_LO);
      }
    }

    function layout() {
      W = window.innerWidth || document.documentElement.clientWidth || 1;
      H = window.innerHeight || document.documentElement.clientHeight || 1;
      rawDpr = window.devicePixelRatio || 1;
      dpr = Math.min(rawDpr, 2);
      canvas.style.width = W + "px";
      canvas.style.height = H + "px";
      canvas.width = Math.max(1, Math.round(W * dpr));
      canvas.height = Math.max(1, Math.round(H * dpr));
      ctx.imageSmoothingEnabled = false;

      pitch = W < 640 ? PITCH_PHONE : PITCH;
      /* columns centered (side margins between pitch/4 and 3*pitch/4, no half
         dots); rows anchored to the top so a height-only resize (mobile URL
         bar) never shifts the dots that are already there */
      cols = Math.max(1, Math.floor((W - pitch / 2) / pitch) + 1);
      ox = (W - (cols - 1) * pitch) / 2;
      oy = Math.round(pitch / 2);
      rows = Math.max(1, Math.floor((H - oy - pitch / 4) / pitch) + 1);

      colX = new Float32Array(cols); devX = new Int32Array(cols); colEdge = new Int32Array(cols + 1);
      rowY = new Float32Array(rows); devY = new Int32Array(rows); rowEdge = new Int32Array(rows + 1);
      maskB = new Float32Array(cols); maskG = new Float32Array(cols); crestW = new Float32Array(cols);
      act = new Float32Array(cols * rows);
      var c, r, j;
      for (c = 0; c < cols; c++) { colX[c] = ox + c * pitch; devX[c] = Math.round(colX[c] * dpr); }
      for (r = 0; r < rows; r++) { rowY[r] = oy + r * pitch; devY[r] = Math.round(rowY[r] * dpr); }
      for (c = 0; c <= cols; c++) colEdge[c] = c === 0 ? 0 : c === cols ? canvas.width : Math.round((ox + (c - 0.5) * pitch) * dpr);
      for (r = 0; r <= rows; r++) rowEdge[r] = r === 0 ? 0 : r === rows ? canvas.height : Math.round((oy + (r - 0.5) * pitch) * dpr);

      rowS = []; rowC = []; colS = []; colC = [];
      for (j = 0; j < nW; j++) {
        var rs = new Float32Array(rows), rc = new Float32Array(rows);
        for (r = 0; r < rows; r++) { var p = wKy[j] * rowY[r]; rs[r] = Math.sin(p); rc[r] = Math.cos(p); }
        rowS.push(rs); rowC.push(rc);
        colS.push(new Float32Array(cols)); colC.push(new Float32Array(cols));
      }
      box = null;
      bandRow = 0; bandAcc = 0;
      computeMask();
      applyTheme();
    }

    /* per-frame column terms of the waves (time folded in) */
    function waveColumns(time) {
      for (var j = 0; j < nW; j++) {
        var kx = wKx[j], om = wOm[j] * time, cs = colS[j], cc = colC[j];
        for (var c = 0; c < cols; c++) { var p = kx * colX[c] - om; cs[c] = Math.sin(p); cc[c] = Math.cos(p); }
      }
    }

    /* --------------------------------------------------------------- render */
    function drawRegion(c0, c1, r0, r1) {
      var x0 = colEdge[c0], y0 = rowEdge[r0];
      ctx.clearRect(x0, y0, colEdge[c1 + 1] - x0, rowEdge[r1 + 1] - y0);
      var fa = fade >= 1 ? 1 : 1 - (1 - fade) * (1 - fade) * (1 - fade);
      var a0 = A0 * fa, a1 = A1 * fa, top = STEPS - 1;
      var s0 = colS[0], k0 = colC[0], s1 = colS[1], k1 = colC[1], s2 = colS[2], k2 = colC[2];
      var w0 = wWt[0], w1 = wWt[1], w2 = wWt[2];
      var img = sheet, cell = CELL, half = HALF;
      for (var r = r0; r <= r1; r++) {
        var rs0 = rowS[0][r], rc0 = rowC[0][r], rs1 = rowS[1][r], rc1 = rowC[1][r], rs2 = rowS[2][r], rc2 = rowC[2][r];
        var y = devY[r] - half, i = r * cols + c0;
        for (var c = c0; c <= c1; c++, i++) {
          var s = w0 * (s0[c] * rc0 + k0[c] * rs0) + w1 * (s1[c] * rc1 + k1[c] * rs1) + w2 * (s2[c] * rc2 + k2[c] * rs2);
          var e = 0.5 + 0.5 * s;
          e = e * e * (3 - 2 * e);
          e *= e;                                  /* narrow crests, calm base */
          var a = a0 * maskB[c] * (AMB_LO + crestW[c] * e);
          var u = TINT * e;
          var g = act[i];
          if (g > 0) {
            a += (a1 * maskG[c] - a) * g;
            g = 1 - (1 - g) * (1 - g);           /* color/size lead the alpha: no gray ring */
            if (g > u) u = g;
          }
          if (a < 0.004) continue;
          ctx.globalAlpha = a > 1 ? 1 : a;
          ctx.drawImage(img, ((u * top + 0.5) | 0) * cell, 0, cell, cell, devX[c] - half, y, cell, cell);
        }
      }
      ctx.globalAlpha = 1;
    }

    function drawAll() { drawRegion(0, cols - 1, 0, rows - 1); }

    /* pointer lens: update activations, return the cell region to redraw */
    function stepLens(dt) {
      var want = 0;
      busy = false;
      if (ptr.on) {
        want = t - ptr.moved > IDLE_AFTER ? IDLE_LEVEL : 1;
        if (lens.s < 0.02) { lens.x = ptr.x; lens.y = ptr.y; }
        var kf = 1 - Math.exp(-dt / TAU_FOLLOW);
        lens.x += (ptr.x - lens.x) * kf;
        lens.y += (ptr.y - lens.y) * kf;
        if (Math.abs(ptr.x - lens.x) + Math.abs(ptr.y - lens.y) > 0.3) busy = true;
      }
      lens.s += (want - lens.s) * (1 - Math.exp(-dt / (want > lens.s ? 0.22 : 0.7)));
      if (want === 0 && lens.s < 0.01) lens.s = 0;
      if (Math.abs(want - lens.s) > 0.004) busy = true;

      var c0 = cols, c1 = -1, r0 = rows, r1 = -1;
      if (lens.s > 0) {
        c0 = Math.max(0, Math.floor((lens.x - LENS_R - ox) / pitch));
        c1 = Math.min(cols - 1, Math.ceil((lens.x + LENS_R - ox) / pitch));
        r0 = Math.max(0, Math.floor((lens.y - LENS_R - oy) / pitch));
        r1 = Math.min(rows - 1, Math.ceil((lens.y + LENS_R - oy) / pitch));
      }
      if (box) {
        if (box[0] < c0) c0 = box[0];
        if (box[1] > c1) c1 = box[1];
        if (box[2] < r0) r0 = box[2];
        if (box[3] > r1) r1 = box[3];
      }
      if (c1 < c0 || r1 < r0) { box = null; return null; }

      var kU = 1 - Math.exp(-dt / TAU_RISE), kD = 1 - Math.exp(-dt / TAU_FALL), lin = FALL_LIN * dt;
      var inv = 1 / (LENS_R * LENS_R), ls = lens.s, lx = lens.x, ly = lens.y;
      var nc0 = cols, nc1 = -1, nr0 = rows, nr1 = -1;
      for (var r = r0; r <= r1; r++) {
        var dy = rowY[r] - ly, dy2 = dy * dy, i = r * cols + c0;
        for (var c = c0; c <= c1; c++, i++) {
          var dx = colX[c] - lx, q = (dx * dx + dy2) * inv, tg = 0;
          if (q < 1 && ls > 0) { q = 1 - q; tg = q * q * q * ls; }
          var g = act[i];
          if (g !== tg) {
            if (tg > g) g += (tg - g) * kU;
            else { g -= (g - tg) * kD + lin; if (g < tg) g = tg; }
            act[i] = g;
            if (tg - g > 0.004 || g - tg > 0.004) busy = true;
          }
          if (g > 0) {
            if (c < nc0) nc0 = c;
            if (c > nc1) nc1 = c;
            if (r < nr0) nr0 = r;
            if (r > nr1) nr1 = r;
          }
        }
      }
      box = nc1 >= 0 ? [nc0, nc1, nr0, nr1] : null;
      return [c0, c1, r0, r1];
    }

    function frame(now) {
      rafId = 0;
      if (stopped || reduced || document.hidden) return;
      var dt = last ? (now - last) / 1000 : 1 / 60;
      if (dt > 0.1) dt = 0.1;
      if (dt < 0) dt = 0;
      last = now;
      t += dt;
      var full = fade < 1;
      if ((window.devicePixelRatio || 1) !== rawDpr) { layout(); full = true; }
      waveColumns(t);
      if (full) {
        if (fade < 1) fade = Math.min(1, fade + dt / FADE_IN);
        stepLens(dt);
        drawAll();
      } else {
        var reg = stepLens(dt);
        bandAcc += (rows * dt) / REFRESH;
        var n = bandAcc | 0;
        bandAcc -= n;
        if (n > rows) n = rows;
        while (n > 0) {
          var r0 = bandRow, r1 = Math.min(rows - 1, bandRow + n - 1);
          drawRegion(0, cols - 1, r0, r1);
          n -= r1 - r0 + 1;
          bandRow = r1 + 1 >= rows ? 0 : r1 + 1;
        }
        if (reg) drawRegion(reg[0], reg[1], reg[2], reg[3]);
      }
      /* full rate while fading in or while the lens moves / eases; ~20 Hz when
         only the slow ambient field changes (a resting pointer included) */
      if (fade < 1 || busy) rafId = raf(frame);
      else timerId = setTimeout(tick, IDLE_TICK);
    }
    function tick() { timerId = 0; if (!rafId) rafId = raf(frame); }

    function kick() { if (!rafId && !timerId && !stopped && !reduced && !document.hidden) { last = 0; rafId = raf(frame); } }
    function wake() { if (timerId) { clearTimeout(timerId); tick(); } }
    function halt() {
      if (rafId) { caf(rafId); rafId = 0; }
      if (timerId) { clearTimeout(timerId); timerId = 0; }
    }

    function drawStatic() {
      fade = 1;
      t = T_STATIC;              /* if motion is re-enabled, it continues from this frame */
      if (act) act.fill(0);
      box = null;
      waveColumns(t);
      drawAll();
    }

    /* ------------------------------------------------------------ listeners */
    function onMove(e) {
      if (e.pointerType === "touch" || reduced) return;
      ptr.x = e.clientX; ptr.y = e.clientY; ptr.on = true; ptr.moved = t;
      wake();
    }
    function onLeave() { ptr.on = false; }
    function onOut(e) { if (!e.relatedTarget) ptr.on = false; }
    function onVisibility() { if (document.hidden) halt(); else kick(); }
    function relayout() {
      resizeTimer = 0;
      if (stopped) return;
      layout();
      if (reduced) drawStatic(); else { waveColumns(t); drawAll(); }
    }
    function onResize() { if (resizeTimer) clearTimeout(resizeTimer); resizeTimer = setTimeout(relayout, 150); }
    function onLoad() { if (!stopped) relayout(); }
    function setMode() {
      reduced = touchOnly || !!(mql && mql.matches);
      if (reduced) { halt(); ptr.on = false; lens.s = 0; drawStatic(); }
      else { waveColumns(t); drawAll(); kick(); }
    }
    var passive = { passive: true };
    function listen(on) {
      var m = on ? "addEventListener" : "removeEventListener";
      window[m]("pointermove", onMove, passive);
      window[m]("pointerdown", onMove, passive);
      window[m]("mouseout", onOut, passive);
      window[m]("blur", onLeave, passive);
      window[m]("resize", onResize, passive);
      document[m]("visibilitychange", onVisibility, passive);
      if (document.readyState !== "complete") window[m]("load", onLoad, passive);
      if (mql) {
        if (mql.addEventListener) mql[m]("change", setMode);
        else if (mql.addListener) on ? mql.addListener(setMode) : mql.removeListener(setMode);
      }
    }

    layout();
    listen(true);
    reduced = touchOnly || !!(mql && mql.matches);
    if (reduced) drawStatic();
    else { waveColumns(0); drawAll(); kick(); }

    return {
      stop: function () {
        if (stopped) return;
        stopped = true;
        halt();
        if (resizeTimer) clearTimeout(resizeTimer);
        listen(false);
        window.removeEventListener("load", onLoad, passive);
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.globalAlpha = 1;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      },
      update: function (o) {
        if (stopped || !o) return;
        for (var key in o) if (Object.prototype.hasOwnProperty.call(o, key)) opts[key] = o[key];
        computeMask();
        applyTheme();
        if (reduced) drawStatic(); else { waveColumns(t); drawAll(); }
      }
    };
  }

  FX["dotgrid"] = { label: "Dot Matrix", start: start };
})();
