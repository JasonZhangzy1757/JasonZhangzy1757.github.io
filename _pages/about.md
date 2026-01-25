---
permalink: /
title: "About me"
author_profile: true
redirect_from: 
  - /Zheyuan (Jason) Zhang/
  - /Zheyuan (Jason) Zhang.html
---

My name is Zheyuan (Jason) Zhang, a third-year Ph.D. student in the Department of Computer Science and Engineering at the University of Notre Dame. My advisor is [Prof. Yanfang (Fanny) Ye](http://yes-lab.org/). Under Prof. Ye's supervision, I collaborate with my [lab mates](http://yes-lab.org/students.html), IBM Research, and [Prof. Chuxu Zhang](https://chuxuzhang.github.io/). Before joining Notre Dame, I received my B.S. degree at Wuhan University (WHU) in 2019 and M.S. degree at New York University (NYU) in 2020. My research focuses on post-training strategies for large language models, with a focus on optimizing LLM agent behaviors, such as improving performance, reducing manual intervention, and enhancing alignment. Specifically, the topics cover the following three aspects: Dynamic Multi-agent System Design; Retrieval Augmented Generation; Reinforcement Learning. My research application fields include: LLM for coding and data science, Health intelligence and other social science. For more details, please check my CV [here](http://JasonZhangzy1757.github.io/files/CV_10092025.pdf).


<!-- Header row: title on the left, button on the right -->
<div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 4px;">
  <h2 style="margin: 0;">🔥 News</h2>

  <!-- Option B style button -->
  <button 
    id="news-toggle"
    type="button"
    style="
      font-size: 12px; 
      padding: 6px 12px; 
      background-color: transparent;
      color: #4da6ff; 
      border: 1px solid #4da6ff; 
      border-radius: 6px; 
      cursor: pointer;
      transition: 0.2s;
    " 
    onclick="toggleNews()"
    onmouseover="this.style.backgroundColor='rgba(77,166,255,0.15)'"
    onmouseout="this.style.backgroundColor='transparent'"
  >
    Show More
  </button>
</div>

<!-- faint line under the header -->
<hr style="margin: 0 0 12px 0;">

<!-- visible + hidden news items -->
<div style="padding-left: 20px; margin-bottom: 16px;">

  <!-- always visible items -->
  <ul style="margin-top: 0; margin-bottom: 8px;">
    <li><strong>[2025.12]</strong> Three papers are accepted to EACL 2026.</li>
    <li><strong>[2025.10]</strong> We have released <a href="https://arxiv.org/pdf/2509.19580">LLMs4ALL</a>, an extensive survey on LLMs for research and applications in academic disciplines.</li>
    <li><strong>[2025.02]</strong> I will continue my intern at Amazon this Autumn.</li>
    <li><strong>[2025.09]</strong> Two papers are accepted to NeurIPS.</li>
  </ul>

  <!-- extra items (initially hidden) -->
  <div id="news-hidden" style="display: none;">
    <ul style="margin-top: 0;">
      <li><strong>[2024.11]</strong> One paper is accepted by KDD 2025. See you in Toronto!</li>
      <li><strong>[2024.10]</strong> One paper is accepted by WSDM 2025.</li>
      <li><strong>[2024.09]</strong> I will be giving a talk about our work, MOPI-HFRS, at IBM T.J. Watson Research Center. See you in Yorktown Heights!</li>
      <li><strong>[2024.09]</strong> One paper is accepted by NeurIPS 2024.</li>
      <li><strong>[2024.06]</strong> I start collaboration with IBM Research, working under the mentorship of 
        <a href="https://keerthi166.github.io/">Keerthiram Murugesan</a>.
      </li>
      <li><strong>[2024.05]</strong> One paper is accepted by KDD 2024.</li>
      <li><strong>[2024.04]</strong> One paper is accepted by IJCAI 2024.</li>
    </ul>
  </div>

</div>

<!-- simple global toggle function -->
<script>
  function toggleNews() {
    var hidden = document.getElementById('news-hidden');
    var btn = document.getElementById('news-toggle');
    if (!hidden || !btn) return;

    var current = hidden.style.display || 'none';

    if (current === 'none') {
      hidden.style.display = 'block';
      btn.textContent = 'Show Less';
    } else {
      hidden.style.display = 'none';
      btn.textContent = 'Show More';
    }
  }

  // ensure function is available to inline onclick
  window.toggleNews = toggleNews;
</script>

Selected Publications
======
Please directly check my [CV](http://JasonZhangzy1757.github.io/files/CV_10092025.pdf) for highlighted publications.

You can find the full list of my articles on my [Google Scholar](https://scholar.google.com/citations?user=qJURp_AAAAAJ&hl=en) profile.

📖 Educations 
======
* 2023.07 - 2028.06 (<i>expected</i>), Ph.D., University of Notre Dame
* 2019.08 - 2020.08, M.S., New York University
* 2015.09 - 2019.06, B.S., Wuhan University  

Contact
======
* Email: zzhang42 [at] nd [dot] edu
* Office: 247B Fitzpatrick Hall of Engineering
* Location: University of Notre Dame, Notre Dame, IN 46565

Feel free to reach out via email if you’re interested in our research or potential collaborations. 
