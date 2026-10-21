/* Light / dark switch (button in the masthead) and the dot-matrix background.
   The theme is applied before first paint by the inline script in
   _includes/head/custom.html; this file only handles clicks and the canvas. */
(function () {
  var root = document.documentElement;
  var fx = null;

  function isDark() {
    return root.getAttribute('data-bg') !== 'mist';
  }

  function fxOpts() {
    var dark = isDark();
    return {
      dark: dark,
      ink: dark ? '#8db8ff' : '#0c2340',
      accent: dark ? '#8db8ff' : '#4f8ff7',
      bg: dark ? '#0a1628' : '#f4f6fa',
      intensity: 0.5
    };
  }

  function label(btn) {
    btn.setAttribute('aria-label', isDark() ? 'Switch to light theme' : 'Switch to dark theme');
  }

  function initToggle() {
    var btn = document.querySelector('.theme-toggle');
    if (!btn) return;
    label(btn);
    btn.addEventListener('click', function () {
      var dark = !isDark();
      root.setAttribute('data-bg', dark ? 'midnight' : 'mist');
      try { localStorage.setItem('theme', dark ? 'dark' : 'light'); } catch (e) {}
      label(btn);
      if (fx && fx.update) fx.update(fxOpts());
    });
  }

  function startFx() {
    if (!window.HomeFX || !window.HomeFX.dotgrid) return;
    if (window.matchMedia && window.matchMedia('(forced-colors: active)').matches) return;
    var canvas = document.createElement('canvas');
    canvas.id = 'fx-canvas';
    canvas.setAttribute('aria-hidden', 'true');
    document.body.insertBefore(canvas, document.body.firstChild);
    fx = window.HomeFX.dotgrid.start(canvas, fxOpts());
  }

  function whenIdle(fn) {
    if (window.requestIdleCallback) window.requestIdleCallback(fn, { timeout: 1500 });
    else setTimeout(fn, 200);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initToggle);
  else initToggle();

  if (document.readyState === 'complete') whenIdle(startFx);
  else window.addEventListener('load', function () { whenIdle(startFx); });
})();
