---
permalink: /
title: "About me"
author_profile: true
redirect_from: 
  - /Zheyuan (Jason) Zhang/
  - /Zheyuan (Jason) Zhang.html
---

My name is Zheyuan (Jason) Zhang, a third-year Ph.D. student in the Department of Computer Science and Engineering at the University of Notre Dame. My advisor is [Prof. Yanfang (Fanny) Ye](http://yes-lab.org/). Under Prof. Ye's supervision, I collaborate with my [lab mates](http://yes-lab.org/students.html), IBM Research, and [Prof. Chuxu Zhang](https://chuxuzhang.github.io/). Before joining Notre Dame, I received my B.S. degree at Wuhan University (WHU) in 2019 and M.S. degree at New York University (NYU) in 2020. My research focuses on post-training strategies for large language models, with a focus on optimizing LLM agent behaviors, such as improving performance, reducing manual intervention, and enhancing alignment. Specifically, the topics cover the following three aspects: Dynamic Multi-agent System Design; Retrieval Augmented Generation; Reinforcement Learning. My research application fields include: LLM for coding and data science, Health intelligence and other social science. For more details, please check my CV [here](http://JasonZhangzy1757.github.io/files/CV_10092025.pdf).


<!-- News section header + button on one line -->
<div style="display: flex; align-items: center; gap: 12px; margin-bottom: 4px;">
  <h1 style="margin: 0;">🔥 News</h1>

  <!-- Option B: Subtle outline button -->
  <button 
    id="toggle-button"
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
    onclick="toggleHiddenItems()"
    onmouseover="this.style.backgroundColor='rgba(77,166,255,0.15)'"
    onmouseout="this.style.backgroundColor='transparent'"
  >
    Show More
  </button>
</div>

<!-- faint line under the title -->
<hr style="margin: 0 0 12px 0;">

<!-- News content (scrollable area) -->
<div style="max-height: 180px; overflow-y: auto; padding-left: 20px; margin-bottom: 16px;">

  <!-- always visible items -->
  <ul style="margin-top: 0; margin-bottom: 8px;">
    <li><strong>[2025.12]</strong> Three papers are accepted to EACL 2026.</li>
    <li><strong>[2025.10]</strong> We have released <a href="https://arxiv.org/pdf/2509.19580">LLMs4ALL</a>, an extensive survey on LLMs for research and applications in academic disciplines.</li>
    <li><strong>[2025.02]</strong> I will continue my intern at Amazon this Autumn.</li>
    <li><strong>[2025.09]</strong> Two papers are accepted to NeurIPS.</li>
  </ul>

  <!-- hidden items (initially collapsed) -->
  <div id="hidden-items" style="display: none;">
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

<!-- toggle logic -->
<script>
  function toggleHiddenItems() {
    var hiddenItems = document.getElementById('hidden-items');
    var button = document.getElementById('toggle-button');
    if (!hiddenItems || !button) return;

    // if style is '' (not yet set), treat as 'none'
    var current = hiddenItems.style.display || 'none';

    if (current === 'none') {
      hiddenItems.style.display = 'block';
      button.textContent = 'Show Less';
    } else {
      hiddenItems.style.display = 'none';
      button.textContent = 'Show More';
    }
  }

  // expose to inline onclick in some strict environments
  window.toggleHiddenItems = toggleHiddenItems;
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
