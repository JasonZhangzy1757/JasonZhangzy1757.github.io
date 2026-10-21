---
permalink: /
title: ""
author_profile: true
redirect_from: 
  - /Zheyuan (Jason) Zhang/
  - /Zheyuan (Jason) Zhang.html
---

<h1 id="about-me">About Me</h1>

My name is Zheyuan (Jason) Zhang, a fourth-year Ph.D. Candidate in the Department of Computer Science and Engineering at the University of Notre Dame, advised by [Prof. Yanfang (Fanny) Ye](http://yes-lab.org/). 

My research focuses on **LLM Agent Optimization**, with the goal of building adaptive agents that learn from experience and interaction to perform reliably in complex, evolving real-life environments. Specifically, my work spans three areas:

<!-- Research areas: one line per area. Method names link to their papers: [Name](link) -->
<div class="areas" markdown="1">

* **Knowledge-Augmented Reasoning:** GraphRAG ([Diet-ODIN](https://arxiv.org/abs/2403.08820), [MOPI-HFRS](https://arxiv.org/abs/2412.08847), [NGQA](https://arxiv.org/abs/2412.15547)).
* **Agent Harness Optimization:** Instruction Optimization ([MAPRO](https://arxiv.org/abs/2510.07475), [EvolveRouter](https://arxiv.org/abs/2604.05149)); Task-Aware Routing ([AgentRouter](https://arxiv.org/abs/2510.05445), [NG-Router](https://arxiv.org/abs/2510.09854), [EvolveRouter](https://arxiv.org/abs/2604.05149)).
* **Agent Policy Optimization:** Data-Centric Reinforcement Learning ([GCPO](https://openreview.net/pdf?id=PetbEgY8Bs), [RAIL](https://arxiv.org/abs/2608.05080)); Agentic RL with Simulated Users ([CLEAT](https://arxiv.org/abs/2610.12655), [StaGPO](https://arxiv.org/abs/2610.24294)).

</div>

I am specifically interested in the topics of **Agent Uncertainty** and **Interactive Intent Alignment**: when agents face real users’ incomplete or misleading requests and evolving goals in long-horizon agentic tasks, how can we enable them to recognize their own uncertainty, understand the limits of their capabilities, and remain aligned with users through effective and efficient interaction, such as seeking clarification? Specifically, my work covers:

<div class="areas areas--focus" markdown="1">

* **Agent Uncertainty** ([Survey](https://openreview.net/pdf?id=7NoenVN5Ly)): Uncertainty Quantification ([GCPO](https://openreview.net/pdf?id=PetbEgY8Bs)); Uncertainty Calibration ([SAGE](https://arxiv.org/abs/2606.11512), LProp); Uncertainty Utilization ([GCPO](https://openreview.net/pdf?id=PetbEgY8Bs), [RAIL](https://arxiv.org/abs/2608.05080)).
* **Interactive Intent Alignment:** Benchmarking Intent Misalignment and Shifting ([Drift-Bench](https://arxiv.org/abs/2602.02455), [Drift-Bench++](https://arxiv.org/abs/2609.38604)); Interactive Policy Learning ([CLEAT](https://arxiv.org/abs/2610.12655), [StaGPO](https://arxiv.org/abs/2610.24294)).

</div>

For more details, please check my CV [here](https://jasonzhangzy1757.github.io/files/CV.pdf). 


<!-- News: add new items at the top of the first list, one line each:
     <li><strong>[YYYY.MM]</strong> What happened.</li>
     Move older items into the "news-hidden" list below (shown by Show More). -->
<div class="section-head">
  <h1 id="news">News</h1>
  <button id="news-toggle" type="button" onclick="toggleNews()">Show More</button>
</div>

<div class="news">
  <!-- always visible items -->
  <ul>
    <li><strong>[2026.10]</strong> We have released a new survey on agent uncertainty: <a href="https://openreview.net/pdf?id=7NoenVN5Ly">Uncertainty in LLM Agents: A Comprehensive Survey</a>.</li>
    <li><strong>[2026.04]</strong> Two papers are accepted to ICML 2026.</li>
    <li><strong>[2026.04]</strong> One paper is accepted to ACL 2026. See you in San Diego!</li>
    <li><strong>[2026.03]</strong> I will join ByteDance as Research Scientist Intern this July. See you in Seattle.</li>
    <li><strong>[2026.02]</strong> I will join Amazon as Applied Scientist Intern this April. See you in Seattle.</li>
    <li><strong>[2026.01]</strong> Three papers are accepted to EACL 2026.</li>
  </ul>

  <!-- extra items (hidden until "Show More" is clicked) -->
  <div id="news-hidden">
    <ul>
      <li><strong>[2025.10]</strong> We have released <a href="https://arxiv.org/pdf/2509.19580">LLMs4ALL</a>, an extensive survey on LLMs for research and applications in academic disciplines.</li>
      <li><strong>[2025.09]</strong> I will continue my intern at Amazon this Autumn.</li>
      <li><strong>[2025.09]</strong> Two papers are accepted to NeurIPS.</li>
      <li><strong>[2025.05]</strong> Two papers are accepted to ACL.</li>
      <li><strong>[2025.05]</strong> Two papers are accepted by ICML 2025.</li>
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

  /* ensure function is available to inline onclick */
  window.toggleNews = toggleNews;
</script>

<h1 id="selected-publications">Selected Publications</h1>

You can find the full list of my articles on my [Google Scholar](https://scholar.google.com/citations?user=qJURp_AAAAAJ&hl=en) profile.

<!-- One block per paper: badge = venue, then image, title link, authors -->
<div class="paper-box">
  <div class="paper-box-image"><div class="badge">Arxiv 26 Sept.</div><img src="images/driftbenchpp.png" alt="driftbenchpp"></div>
  <div class="paper-box-text">
    <a href="https://arxiv.org/abs/2609.38604">Beyond Oracle Communication: Benchmarking Interactive Intent Alignment Under Miscommunication and Evolving User Intent</a>
    <p><strong>Zheyuan Zhang</strong>, Mengyuan Chao, Ke Xiao, Ziyi Chen, Daoan Zhang, Yan Zhang, Yanfang Ye, Wei Xu</p>
  </div>
</div>

<div class="paper-box">
  <div class="paper-box-image"><div class="badge">Arxiv 26 Aug.</div><img src="images/rail.png" alt="rail"></div>
  <div class="paper-box-text">
    <a href="https://arxiv.org/abs/2608.05080">Optimizing What Policies Learn From: Recoverability-aware Rollout Intervention Learning</a>
    <p><strong>Zheyuan Zhang</strong>, Manqing Mao, Hong Wang, Zhuoer Wang, Samson Koelle, Jie Yuan, Yanjun Lin, James Feng, Nikki Lijing Kuang, Yanfang Ye, Wei Niu</p>
  </div>
</div>

<div class="paper-box">
  <div class="paper-box-image"><div class="badge">Arxiv 26 Jun.</div><img src="images/GCPO.png" alt="gcpo"></div>
  <div class="paper-box-text">
    <a href="https://openreview.net/pdf?id=PetbEgY8Bs">Regulating What Policies Learn From: Geometry-aware Calibrated Policy Optimization</a>
    <p><strong>Zheyuan Zhang</strong>, Kaiwen Shi, Han Bao, Zehong Wang, Tianyi Ma, Yanfang Ye</p>
  </div>
</div>

<div class="paper-box">
  <div class="paper-box-image"><div class="badge">EMNLP'26 Findings</div><img src="images/sage.png" alt="sage"></div>
  <div class="paper-box-text">
    <a href="https://arxiv.org/abs/2606.11512">SAGE: Answer-Conditioned Uncertainty Targets for Verbal Uncertainty
Alignment</a>
    <p>Kaiwen Shi*, <strong>Zheyuan Zhang</strong>*, Yanfang Ye</p>
  </div>
</div>

<div class="paper-box">
  <div class="paper-box-image"><div class="badge">Arxiv 26 Apr.</div><img src="images/evolverouter.png" alt="evolverouter"></div>
  <div class="paper-box-text">
    <a href="https://arxiv.org/pdf/2604.05149">EvolveRouter: Co-Evolving Routing and Prompt for Multi-Agent Question Answering</a>
    <p>Jiatan Huang*, <strong>Zheyuan Zhang</strong>*, Kaiwen Shi, Yanfang Ye, Chuxu Zhang</p>
  </div>
</div>

<div class="paper-box">
  <div class="paper-box-image"><div class="badge">ACL'26 Main</div><img src="images/agentrouter.png" alt="agentrouter"></div>
  <div class="paper-box-text">
    <a href="https://arxiv.org/abs/2510.05445">AgentRouter: A Knowledge-Graph-Guided LLM Router for Collaborative Multi-Agent Question Answering</a>
    <p><strong>Zheyuan Zhang</strong>*, Kaiwen Shi*, Zhengqing Yuan, Zehong Wang, Tianyi Ma, Keerthiram Murugesan, Vincent Galassi, Chuxu Zhang, Yanfang Ye</p>
  </div>
</div>

<div class="paper-box">
  <div class="paper-box-image"><div class="badge">EACL'26 Findings</div><img src="images/mapro.png" alt="mapro"></div>
  <div class="paper-box-text">
    <a href="https://arxiv.org/abs/2510.07475">MAPRO: Recasting Multi-Agent Prompt Optimization as Maximum a Posteriori Inference</a>
    <p><strong>Zheyuan Zhang</strong>, Lin Ge, Hongjiang Li, Weicheng Zhu, Chuxu Zhang, Yanfang Ye</p>
  </div>
</div>

<div class="paper-box">
  <div class="paper-box-image"><div class="badge">EACL'26 Main</div><img src="images/ngrouter.png" alt="ngrouter"></div>
  <div class="paper-box-text">
    <a href="https://arxiv.org/abs/2510.09854">NG-Router: Graph-Supervised Multi-Agent Collaboration for Nutrition Question Answering</a>
    <p>Kaiwen Shi*, <strong>Zheyuan Zhang</strong>*, Zhengqing Yuan, Keerthiram Murugesan, Vincent Galassi, Chuxu Zhang, Yanfang Ye</p>
  </div>
</div>

<div class="paper-box">
  <div class="paper-box-image"><div class="badge">ACL'25 Main</div><img src="images/ngqa.png" alt="ngqa"></div>
  <div class="paper-box-text">
    <a href="https://arxiv.org/abs/2412.15547">NGQA: A Nutritional Graph Question Answering Benchmark for Personalized Health-aware Nutritional Reasoning</a>
    <p><strong>Zheyuan Zhang</strong>*, Yiyang Li*, Nhi Ha Lan Le*, Zehong Wang, Tianyi Ma, Vincent Galassi, Keerthiram Murugesan, Nuno Moniz, Werner Geyer, Nitesh V Chawla, Chuxu Zhang, Yanfang Ye</p>
  </div>
</div>

<div class="paper-box">
  <div class="paper-box-image"><div class="badge">KDD'25</div><img src="images/mopi.png" alt="mopi"></div>
  <div class="paper-box-text">
    <a href="https://arxiv.org/abs/2412.08847">MOPI-HFRS: A Multi-objective Personalized Health-aware Food Recommendation System with LLM-enhanced Interpretation</a>
    <p><strong>Zheyuan Zhang</strong>, Zehong Wang, Tianyi Ma, Varun Sameer Taneja, Sofia Nelson, Nhi Ha Lan Le, Keerthiram Murugesan, Mingxuan Ju, Nitesh V Chawla, Chuxu Zhang, Yanfang Ye</p>
  </div>
</div>

<div class="paper-box">
  <div class="paper-box-image"><div class="badge">KDD'24</div><img src="images/diet.png" alt="diet"></div>
  <div class="paper-box-text">
    <a href="https://arxiv.org/abs/2403.08820">Diet-ODIN: A Novel Framework for Opioid Misuse Detection with Interpretable Dietary Patterns</a>
    <p><strong>Zheyuan Zhang</strong>*, Zehong Wang*, Shifu Hou, Evan Hall, Landon Bachman, Vincent Galassi, Jasmine White, Nitesh V. Chawla, Chuxu Zhang, Yanfang Ye</p>
  </div>
</div>


<h1 id="work-experience">Work Experience</h1>

<!-- One block per employer: logo, company + location, then one line per role -->
<div class="logo-box">
  <img src="images/logo-bytedance.png" alt="bytedance">
  <div class="logo-box-text">
    <p><strong>ByteDance</strong> <i>Seattle, WA, USA</i></p>
    <ul>
      <li><strong>Research Scientist (Intern)</strong> <em>Jul. 2026 – Oct. 2026</em></li>
    </ul>
  </div>
</div>

<div class="logo-box">
  <img src="images/logo-amazon.png" alt="amazon">
  <div class="logo-box-text">
    <p><strong>Amazon Science</strong> <i>Seattle, WA, USA</i></p>
    <ul>
      <li><strong>Applied Scientist (Intern)</strong> <em>Apr. 2026 – Jul. 2026</em></li>
    </ul>
  </div>
</div>

<div class="logo-box">
  <img src="images/logo-amazon.png" alt="amazon">
  <div class="logo-box-text">
    <p><strong>Amazon Science</strong> <i>Seattle, WA, USA</i></p>
    <ul>
      <li><strong>Applied Scientist (Part-time)</strong> <em>Aug. 2025 – Dec. 2025</em></li>
      <li><strong>Applied Scientist (Intern)</strong> <em>May 2025 – Aug. 2025</em></li>
    </ul>
  </div>
</div>

<div class="logo-box">
  <img src="images/logo-ibm.png" alt="ibm">
  <div class="logo-box-text">
    <p><strong>IBM Research</strong> <i>Yorktown Heights, NY, USA</i></p>
    <ul>
      <li><strong>Student Researcher (Part-time)</strong> <em>Jun. 2024 – May 2025</em></li>
    </ul>
  </div>
</div>

<div class="logo-box">
  <img src="images/logo-coleridge.png" alt="coleridge">
  <div class="logo-box-text">
    <p><strong>Coleridge Initiative</strong> <i>New York, NY, USA</i></p>
    <ul>
      <li><strong>Research Scientist</strong> <em>Oct. 2021 – Mar. 2023</em></li>
      <li><strong>Associated Research Scientist</strong> <em>Aug. 2020 – Oct. 2021</em></li>
      <li><strong>Junior Research Scientist (Intern)</strong> <em>Oct. 2019 – Aug. 2020</em></li>
    </ul>
  </div>
</div>


<h1 id="education">Education</h1>

<!-- One line per degree:  * <i>dates</i> **Degree** School -->
<div class="dated edu" markdown="1">

* <i>2023.07 - present</i> **Ph.D.** University of Notre Dame
* <i>2019.08 - 2020.08</i> **M.S.** New York University
* <i>2015.09 - 2019.06</i> **B.S.** Wuhan University

</div>


<h1 id="mentorship">Mentorship</h1>

I've been fortunate to mentor and work alongside many brilliant minds:

<!-- One line per mentee:  - **[Name](link)** Role, School <i>dates</i> -->
<div class="people" markdown="1">

### Current Mentees

- **[Han Bao](https://wad3birch.github.io/)** Ph.D. Student, University of Notre Dame <i>Sept. 2025 – present</i>
- **[Jiatan Huang](https://j-huang01.github.io/)** Ph.D. Student, University of Connecticut <i>Aug. 2025 - present</i>
- **[Kaiwen Shi](https://scholar.google.com/citations?user=2SUGJDcAAAAJ&hl=zh-CN)** Ph.D. Student, University of Notre Dame <i>Mar. 2025 - present</i>
- **[Xiaoyu Ma](https://www.linkedin.com/in/xiaoyu-ma-29b8ba337/?originalSubdomain=sg)** M.S. Student, National University of Singapore <i>Oct. 2025 – present</i>

### Former Mentees

- **[Nhi Le](https://www.linkedin.com/in/nhi-hl-le/)** M.S. Student, Brandeis University <i>Jun. 2024 – Jan. 2025</i>
- **[Vinny Galassi](https://www.linkedin.com/in/vincent-galassi/)** Junior Undergraduate, University of Notre Dame <i>2023 – 2025</i>
- **[Sofia Nelson](https://www.linkedin.com/in/sofia-nelson-7a5882273/)** Senior Undergraduate, University of Notre Dame <i>2024</i>
- **[Varun Taneja](https://www.linkedin.com/in/varuntaneja7/)** Senior Undergraduate, University of Notre Dame <i>2024</i>
- **[Evan Hall](https://www.linkedin.com/in/evan-hall-703b341a3/)** Senior Undergraduate, University of Notre Dame <i>2023 – 2024</i>
- **[Landon Bachman](https://www.linkedin.com/in/landon-bachman-983740203/)** Senior Undergraduate, University of Notre Dame <i>2023 – 2024</i>
- **[Jasmine White](https://www.linkedin.com/in/jasmine-white-13b46021b/)** Senior Undergraduate, Purdue University <i>2023 – 2024</i>

</div>


<h1 id="services">Services</h1>

<!-- One line per item:  * **Label** value -->
<div class="kv" markdown="1">

* **Conference Senior Area Chair** KDD’26
* **Conference Reviewer** NeurIPS'26, ICML'26, ICLR’26, KDD’26, KDD’25, WWW’25
* **Journal Reviewer** Transactions on Big Data, DMKD, TIST, TMLR, TWEB
* **Teaching Assistant** FA23-CSE-40113, SP24-CSE-40113: Design/Analysis of Algorithms

</div>


<h1 id="invited-talks">Invited Talks</h1>

<!-- One line per talk:  * <i>date</i> **Title** @ where -->
<div class="dated talks" markdown="1">

* <i>Sept. 2024</i> **MOPI-HFRS** @ IBM Research, Thomas J. Watson Research Center, Yorktown Heights.
* <i>Jun. 2025</i> **LLM Agents for Code Generation** @ Amazon, Seattle.

</div>


<h1 id="contact">Contact</h1>

<div class="kv" markdown="1">

* **Email** zzhang42 [at] nd [dot] edu
* **Office** 247B Fitzpatrick Hall of Engineering
* **Location** University of Notre Dame, Notre Dame, IN 46565

</div>

Feel free to reach out via email if you’re interested in our research or potential collaborations. 
