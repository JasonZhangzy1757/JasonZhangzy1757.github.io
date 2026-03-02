---
permalink: /
title: ""
author_profile: true
redirect_from: 
  - /Zheyuan (Jason) Zhang/
  - /Zheyuan (Jason) Zhang.html
---

<h1 id="about-me">About Me</h1>

My name is Zheyuan (Jason) Zhang, a third-year Ph.D. student in the Department of Computer Science and Engineering at the University of Notre Dame, advised by [Prof. Yanfang (Fanny) Ye](http://yes-lab.org/). 

My research focuses on post-training strategies for large language models, with an emphasis on agent optimization and self-evolving agent behaviors. Specifically, my work spans three areas: 
* **Dynamic Multi-agent System Design**: prompt optimization ([EACL'26](https://arxiv.org/pdf/2510.07475)), self-evolving agents ([Arxiv](https://arxiv.org/pdf/2510.05445?); [EACL'26](https://arxiv.org/pdf/2510.09854)), agent collaboration ([NeurIPS'25](https://arxiv.org/pdf/2505.15859?); [Arxiv](https://arxiv.org/pdf/2510.05445?))
*  **Retrieval-augmented Reasoning**: ([KDD'24](https://dl.acm.org/doi/pdf/10.1145/3637528.3671587); [KDD'25](https://dl.acm.org/doi/pdf/10.1145/3690624.3709382); [ACL'25](https://aclanthology.org/2025.acl-long.296.pdf); [EACL'26](https://arxiv.org/pdf/2510.09854)), for data analysis with long context ([Arxiv](https://arxiv.org/pdf/2601.02598)).
*  **Uncertainty-aware Reinforcement Learning**: intention clarifying, uncertainty beyond entropy, uncertainty in VLA.

For more details, please check my CV [here](http://JasonZhangzy1757.github.io/files/CV.pdf).


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
    <li><strong>[2026.02]</strong> I will join Amazon as Applied Scientist Intern this April. See you in Seattle.</li>
    <li><strong>[2026.01]</strong> Three papers are accepted to EACL 2026. One paper is accecpted to ICLR 2026.</li>
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

<h1 id="selected-publications">📚 Selected Publications</h1>

You can find the full list of my articles on my [Google Scholar](https://scholar.google.com/citations?user=qJURp_AAAAAJ&hl=en) profile.

--------------

<div class='paper-box'><div class='paper-box-image'><div><div class="badge"></div><img src='images/agentrouter.png' alt="agentrouter" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

<div style="font-size: 0.9rem; line-height: 1.35;">
  <!-- all your publication text here -->
  <a href="https://arxiv.org/abs/2510.05445">AgentRouter: A Knowledge-Graph-Guided LLM Router for Collaborative Multi-Agent Question Answering</a> <em>[Arxiv Oct.]</em><br><br>

  <strong>Zheyuan Zhang</strong>*, Kaiwen Shi*, Zhengqing Yuan,  
  Zehong Wang, Tianyi Ma, Keerthiram Murugesan,  
  Vincent Galassi, Chuxu Zhang, Yanfang Ye
</div>

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge"></div><img src='images/mapro.png' alt="mapro" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

<div style="font-size: 0.9rem; line-height: 1.35;">
  <!-- all your publication text here -->
  <a href="https://arxiv.org/abs/2510.07475">MAPRO: Recasting Multi-Agent Prompt Optimization as Maximum a Posteriori Inference</a> <em>[EACL'26]</em><br><br>

  <strong>Zheyuan Zhang</strong>, Lin Ge, Hongjiang Li, Weicheng Zhu, Chuxu Zhang, Yanfang Ye
</div>

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge"></div><img src='images/ngrouter.png' alt="ngrouter" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

<div style="font-size: 0.9rem; line-height: 1.35;">
  <!-- all your publication text here -->
  <a href="https://arxiv.org/abs/2510.09854">NG-Router: Graph-Supervised Multi-Agent Collaboration for Nutrition Question Answering</a> <em>[EACL'26]</em><br><br>

  Kaiwen Shi*, <strong>Zheyuan Zhang</strong>*, Zhengqing Yuan, 
  Keerthiram Murugesan, Vincent Galass, Chuxu Zhang, Yanfang Ye
</div>

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge"></div><img src='images/ngqa.png' alt="ngqa" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

<div style="font-size: 0.9rem; line-height: 1.35;">
  <!-- all your publication text here -->
  <a href="https://arxiv.org/abs/2412.15547">NGQA: A Nutritional Graph Question Answering Benchmark for Personalized Health-aware Nutritional Reasoning</a> <em>[ACL'25]</em><br><br>

  <strong>Zheyuan Zhang</strong>*, Yiyang Li*, Nhi Ha Lan Le*, Zehong Wang, 
  Tianyi Ma, Vincent Galassi, Keerthiram Murugesan, Nuno Moniz, Werner Geyer, Nitesh V Chawla, Chuxu Zhang, Yanfang Ye
</div>

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge"></div><img src='images/mopi.png' alt="mopi" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

<div style="font-size: 0.9rem; line-height: 1.35;">
  <!-- all your publication text here -->
  <a href="https://arxiv.org/abs/2412.08847">MOPI-HFRS: A Multi-objective Personalized Health-aware Food Recommendation System with LLM-enhanced Interpretation</a> <em>[KDD'25]</em><br><br>

  <strong>Zheyuan Zhang</strong>, Zehong Wang, Tianyi Ma, Varun Sameer Taneja, 
  Sofia Nelson, Nhi Ha Lan Le, Keerthiram Murugesan, Mingxuan Ju, Nitesh V Chawla, Chuxu Zhang, Yanfang Ye
</div>

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge"></div><img src='images/diet.png' alt="diet" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

<div style="font-size: 0.9rem; line-height: 1.35;">
  <!-- all your publication text here -->
  <a href="https://arxiv.org/abs/2403.08820">Diet-ODIN: A Novel Framework for Opioid Misuse Detection with Interpretable Dietary Patterns</a> <em>[KDD'24]</em><br><br>

  <strong>Zheyuan Zhang</strong>*, Zehong Wang*, Shifu Hou, Evan Hall, Landon Bachman, 
  Vincent Galassi, Jasmine White, Nitesh V. Chawla, Chuxu Zhang, Yanfang Ye
</div>

</div>
</div>


<div style="height: 40px;"></div>
<h1 id="work-experience">💻 Work Experience</h1>
--------------
<div class='logo-box'><div class='logo-box-image'><div><img src='images/amazon.webp' alt="amazon" width="100%"></div></div>
<div class='logo-box-text' markdown="1">

**Amazon Science**,   <i>Seattle, WA, USA</i>  

* *Aug. 2025 – Dec. 2025*, **Applied Scientist (Part-time)**  
* *May. 2025 – Aug. 2025*, **Applied Scientist (Intern)**    

</div>
</div>

<div class='logo-box'><div class='logo-box-image'><div><img src='images/ibm.webp' alt="ibm" width="100%"></div></div>
<div class='logo-box-text' markdown="1">

**IBM Research**,   <i>Yorktown Heights, NY, USA</i>  

* *Jun. 2024 – May. 2025*, **Student Researcher (Part-time)**   

</div>
</div>


<div class='logo-box'><div class='logo-box-image'><div><img src='images/coleridge.avif' alt="coleridge" width="100%"></div></div>
<div class='logo-box-text' markdown="1">

**Coleridge Initiative**,   <i>New York, NY, USA</i>  

* *Oct. 2021 – Mar. 2023*, **Research Scientist**  
* *Aug. 2020 – Oct. 2021*, **Associated Research Scientist**   
* *Oct. 2019 – Aug. 2020*, **Junior Research Scientist (Intern)**  

</div>
</div>

<div style="height: 40px;"></div>

<h1 id="education">📖 Education</h1>
--------------
* <i>2023.07 - present</i>, Ph.D., University of Notre Dame
* <i>2019.08 - 2020.08</i>, M.S., New York University
* <i>2015.09 - 2019.06</i>, B.S., Wuhan University


<h1 id="mentorship">📝 Mentorship</h1>
--------------
I've been fortunate to mentor and work alongside many brilliant minds:
### **Current Mentees**

- **[Han Bao](https://www.linkedin.com/in/han-bao-59796b379/)**, Senior Undergraduate, Sichuan University (Sept. 2025 – present)  
- **[Xiaoyu Ma](https://www.linkedin.com/in/xiaoyu-ma-29b8ba337/?originalSubdomain=sg)**, M.S. Student, National University of Singapore (Oct. 2025 – present)  

### **Former Mentees**
  
- **[Nhi Le](https://www.linkedin.com/in/nhi-hl-le/)**, M.S. Student, Brandeis University (Jun. 2024 – Jan. 2025)  
- **[Vinny Galassi](https://www.linkedin.com/in/vincent-galassi/)**, Junior Undergraduate, University of Notre Dame (2023 – 2025)
- **[Sofia Nelson](https://www.linkedin.com/in/sofia-nelson-7a5882273/)**, Senior Undergraduate, University of Notre Dame (2024)
- **[Varun Taneja](https://www.linkedin.com/in/varuntaneja7/)**, Senior Undergraduate, University of Notre Dame (2024)
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
