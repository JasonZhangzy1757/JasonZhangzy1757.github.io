---
permalink: /
title: "About me"
author_profile: true
redirect_from: 
  - /Zheyuan (Jason) Zhang/
  - /Zheyuan (Jason) Zhang.html
---

My name is Zheyuan (Jason) Zhang, a third-year Ph.D. student in the Department of Computer Science and Engineering at the University of Notre Dame. My advisor is [Prof. Yanfang (Fanny) Ye](http://yes-lab.org/). Under Prof. Ye's supervision, I collaborate with my [lab mates](http://yes-lab.org/students.html), IBM Research, and [Prof. Chuxu Zhang](https://chuxuzhang.github.io/). 

My research focuses on post-training strategies for large language models, with a focus on optimizing LLM agent behaviors, such as improving performance, reducing manual intervention, and enhancing alignment. Specifically, the topics cover the following three aspects: Dynamic Multi-agent System Design; Retrieval Augmented Generation; Reinforcement Learning. My research application fields include: LLM for coding and data science, Health intelligence and other social science. For more details, please check my CV [here](http://JasonZhangzy1757.github.io/files/CV.pdf).


<!-- Header row: title on the left, button on the right -->
<div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 4px;">
  <h1 style="margin: 0;">🔥 News</h1>

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
    <li><strong>[2025.09]</strong> I will continue my intern at Amazon this Autumn.</li>
    <li><strong>[2025.09]</strong> Two papers are accepted to NeurIPS.</li>
    <li><strong>[2025.05]</strong> Two papers are accepted to ACL.</li>
    <li><strong>[2025.05]</strong> Two papers are accepted by ICML 2025.</li>
  </ul>

  <!-- extra items (initially hidden) -->
  <div id="news-hidden" style="display: none;">
    <ul style="margin-top: 0;">
      <li><strong>[2025.02]</strong> I will join Amazon as Applied Scientist Intern this Summer. See you in Seattle!</li>
      <li><strong>[2025.01]</strong> One paper is accepted by NAACL 2025. See you in Albuquerque!</li>
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

# 📚 Selected Publications
--------------
Please directly check my [CV](http://JasonZhangzy1757.github.io/files/CV_10092025.pdf) for highlighted publications.

You can find the full list of my articles on my [Google Scholar](https://scholar.google.com/citations?user=qJURp_AAAAAJ&hl=en) profile.

# 💻 Work Experience 
--------------



<div class='paper-box'><div class='paper-box-image'><div><img src='images/coleridge.avif' alt="coleridge" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**Coleridge Initiative**   <i>New York, NY, USA</i>  

* **Research Scientist**   (*Oct. 2021 – Mar. 2023*)
* **Associated Research Scientist**   (*Aug. 2020 – Oct. 2021*)
* **Junior Research Scientist (Intern)**  (*Oct. 2019 – Aug. 2020*)

</div>
</div>










# 📖 Educations 
--------------
* <i>2023.07 - present</i>, Ph.D., University of Notre Dame
* <i>2019.08 - 2020.08</i>, M.S., New York University
* <i>2015.09 - 2019.06</i>, B.S., Wuhan University


# 📝 Mentorship 
--------------
I've been fortunate to mentor and work alongside many brilliant minds:
### **Current Mentees**

- **[Zhengqing Yuan](https://dlyuangod.github.io/zhengqingyuan/)**, Ph.D. Student, University of Notre Dame (Sept. 2025 – present)  
- **[Kaiwen Shi](https://scholar.google.com/citations?user=2SUGJDcAAAAJ&hl=en)**, Ph.D. Student, University of Notre Dame (Mar. 2025 – present)  
- **[Jiatan Huang](https://j-huang01.github.io/)**, Ph.D. Student, University of Connecticut (May 2025 – present)  
- **[Han Bao](https://www.linkedin.com/in/han-bao-59796b379/)**, Senior Undergraduate, Sichuan University (Sept. 2025 – present)  
- **[Xiaoyu Ma](https://www.linkedin.com/in/xiaoyu-ma-29b8ba337/?originalSubdomain=sg)**, M.S. Student, National University of Singapore (Oct. 2025 – present)  

### **Former Mentees**

- **[Yiyang Li](https://yiyang-ian-li.github.io/)**, Ph.D. Student, University of Notre Dame (Sept. 2024 – Sept. 2025)  
- **[Nhi Le](https://www.linkedin.com/in/nhi-hl-le/)**, M.S. Student, Brandeis University (Jun. 2024 – Jan. 2025)  
- **[Vinny Galassi](https://www.linkedin.com/in/vincent-galassi/)**, Junior Undergraduate, University of Notre Dame (2023 – 2025)  
- **[Evan Hall](https://www.linkedin.com/in/evan-hall-703b341a3/)**, Senior Undergraduate, University of Notre Dame (2023 – 2024)  
- **[Landon Bachman](https://www.linkedin.com/in/landon-bachman-983740203/)**, Senior Undergraduate, University of Notre Dame (2023 – 2024)  
- **[Jasmine White](https://www.linkedin.com/in/jasmine-white-13b46021b/)**, Senior Undergraduate, Purdue University (2023 – 2024)  


# 💬 Invited Talks
--------------
* **MOPI-HFRS** (Sept. 2024) @ IBM Research, Thomas J. Watson Research Center, Yorktown Heights.
* **LLM Agents for Code Generation** (Jun. 2025) @ Amazon, Seattle.

# 📢 Contact
--------------
* Email: zzhang42 [at] nd [dot] edu
* Office: 247B Fitzpatrick Hall of Engineering
* Location: University of Notre Dame, Notre Dame, IN 46565

Feel free to reach out via email if you’re interested in our research or potential collaborations. 
