const puppeteer = require('puppeteer');
const path = require('path');

/**
 * ATS-optimized CV generator for Roman Emiliano Arenas.
 *
 * ATS (Applicant Tracking System) rules applied:
 * - Standard section headings (EXPERIENCE, SKILLS, EDUCATION, etc.)
 * - No tables, no text boxes, no columns for critical content
 * - Plain bullet points (•)
 * - All keywords spelled out in full (no icons replacing text)
 * - Dates in MM/YYYY format
 * - Job title | Company format (standard ATS pattern)
 * - Skills listed as plain comma-separated text, not badges/graphics
 * - No header/footer that might get cut by parsers
 * - Single-column layout for experience and education
 * - Contact info as plain text (not inside a table)
 */

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Roman Emiliano Arenas - Resume</title>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 10.5pt;
    color: #111;
    line-height: 1.5;
    padding: 32px 40px;
  }

  /* ---- HEADER ---- */
  .header-name {
    font-size: 22pt;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1.5px;
  }
  .header-title {
    font-size: 11.5pt;
    color: #333;
    margin-top: 2px;
    font-weight: 600;
  }
  .header-contact {
    margin-top: 5px;
    font-size: 10pt;
    color: #222;
  }
  .header-contact span { margin-right: 20px; }

  /* ---- SECTION ---- */
  .section-title {
    font-size: 10.5pt;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    border-bottom: 1.5px solid #111;
    padding-bottom: 2px;
    margin-top: 14px;
    margin-bottom: 7px;
  }

  /* ---- SKILLS ---- */
  .skill-row {
    margin-bottom: 3px;
    font-size: 10pt;
  }
  .skill-label {
    font-weight: 700;
  }

  /* ---- EXPERIENCE ---- */
  .job { margin-bottom: 12px; }
  .job-top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
  .job-title-company {
    font-weight: 700;
    font-size: 10.5pt;
  }
  .job-date-loc {
    font-size: 9.5pt;
    color: #444;
    text-align: right;
    white-space: nowrap;
    padding-left: 12px;
    flex-shrink: 0;
  }
  .job-bullets {
    margin-top: 3px;
    padding-left: 18px;
  }
  .job-bullets li {
    margin-bottom: 2px;
    font-size: 10pt;
  }

  /* ---- EDUCATION ---- */
  .edu { margin-bottom: 6px; }
  .edu-name { font-weight: 700; }
  .edu-detail { font-size: 10pt; color: #333; }

  /* ---- MISC ---- */
  ul.plain { padding-left: 18px; }
  ul.plain li { margin-bottom: 2px; font-size: 10pt; }
  .lang-row { font-size: 10pt; }
  .lang-row span { margin-right: 28px; }
</style>
</head>
<body>

<!-- ============ HEADER ============ -->
<div class="header-name">Roman Emiliano Arenas</div>
<div class="header-title">Full Stack Developer | Tech Lead | DevOps Engineer</div>
<div class="header-contact">
  <span>Email: roman.ea3232@gmail.com</span>
  <span>Phone: +54 2281 568550</span>
  <span>Location: Azul, Buenos Aires Province, Argentina</span>
  <span>LinkedIn: linkedin.com/in/roman-emiliano-arenas-55b8561aa</span>
</div>

<!-- ============ SUMMARY ============ -->
<div class="section-title">Professional Summary</div>
<p style="font-size:10pt;">
  Full Stack Developer, Tech Lead, and DevOps Engineer with 7+ years of experience designing and
  delivering scalable web applications, criminal intelligence platforms, and enterprise ecosystems.
  Proven expertise in cloud infrastructure (AWS, Azure, GCP), containerization (Docker, Kubernetes),
  CI/CD pipelines, and microservices architecture. Led the design and development of ICIA
  (Infraestructura de Inteligencia Criminal y Analitica), a 13-system interconnected platform for
  criminal data analysis for the Buenos Aires Province public security sector. Strong background in
  artificial intelligence integration, automation bots, blockchain development, and IoT solutions.
  Experienced working remotely with international and public-sector teams. Fluent in English (C1)
  and native Spanish.
</p>

<!-- ============ SKILLS ============ -->
<div class="section-title">Technical Skills</div>

<div class="skill-row">
  <span class="skill-label">Programming Languages: </span>
  JavaScript, TypeScript, Python
</div>
<div class="skill-row">
  <span class="skill-label">Frontend Technologies: </span>
  React, Vue.js, Next.js, React Native, Angular, Redux, Vuex, Webpack, Babel,
  Chart.js, Leaflet, SASS, LESS, Bootstrap, Tailwind CSS, Material-UI
</div>
<div class="skill-row">
  <span class="skill-label">Backend Technologies: </span>
  Node.js, Express.js, NestJS, FastAPI, Django, RESTful APIs, GraphQL,
  Microservices, Serverless Architecture, API Gateway, WebSockets, MCP Server
</div>
<div class="skill-row">
  <span class="skill-label">Database Technologies: </span>
  PostgreSQL, MySQL, MongoDB, Redis, DynamoDB, Firebase,
  Prisma, SQLAlchemy, Sequelize, TypeORM
</div>
<div class="skill-row">
  <span class="skill-label">DevOps and Cloud Infrastructure: </span>
  Docker, Kubernetes, AWS, AWS Lambda, AWS CDK, CloudFormation, Azure, Google Cloud Platform,
  Jenkins, GitLab CI/CD, GitHub Actions, Terraform, Ansible, Infrastructure as Code
</div>
<div class="skill-row">
  <span class="skill-label">Monitoring and Logging: </span>
  Prometheus, Grafana, ELK Stack, CloudWatch, New Relic, Datadog, Splunk, Sentry
</div>
<div class="skill-row">
  <span class="skill-label">Testing and Quality Assurance: </span>
  Jest, Cypress, Selenium, Unit Testing, Integration Testing, End-to-End Testing, Test-Driven Development
</div>
<div class="skill-row">
  <span class="skill-label">Automation and Integration: </span>
  n8n, Zapier, Python Scripting, Selenium Bots, PyAutoGUI, Webhook Integration, API Integration, OpenAPI
</div>
<div class="skill-row">
  <span class="skill-label">Emerging Technologies: </span>
  Artificial Intelligence, Machine Learning, LangChain, RAG (Retrieval-Augmented Generation),
  Vercel AI SDK, Blockchain, Ethereum, Smart Contracts, Internet of Things, Edge Computing
</div>
<div class="skill-row">
  <span class="skill-label">Methodologies: </span>
  Agile, Scrum, Kanban, DevOps, CI/CD, Test-Driven Development,
  Microservices Architecture, MVVM, MVC
</div>
<div class="skill-row">
  <span class="skill-label">Version Control and Collaboration: </span>
  Git, GitHub, GitLab, Bitbucket, Jira, Confluence, Slack
</div>

<!-- ============ EXPERIENCE ============ -->
<div class="section-title">Professional Experience</div>

<!-- Meetlabs -->
<div class="job">
  <div class="job-top">
    <div class="job-title-company">Software Developer | Meetlabs</div>
    <div class="job-date-loc">07/2024 - Present | Lima, Peru (Remote)</div>
  </div>
  <ul class="job-bullets">
    <li>Develop intelligent and autonomous software solutions integrating AI, blockchain, and IoT technologies</li>
    <li>Implement microservices architecture using Node.js, Docker, and Kubernetes for scalable applications</li>
    <li>Build and maintain Xynapse backend: NestJS, TypeScript, PostgreSQL, AWS Lambda, LangChain, TypeORM, AWS CDK, JWT, Sentry</li>
    <li>Design and deploy cloud infrastructure on AWS using Infrastructure as Code principles (CDK, CloudFormation)</li>
    <li>Establish CI/CD pipelines using GitHub Actions, improving deployment efficiency by 40%</li>
    <li>Work with cross-functional international teams in agile development environment</li>
  </ul>
</div>

<!-- Teclab -->
<div class="job">
  <div class="job-top">
    <div class="job-title-company">Academic Tutor - Web Technologies | Teclab Instituto Tecnico Superior</div>
    <div class="job-date-loc">10/2023 - 01/2025 | Buenos Aires, Argentina (Remote)</div>
  </div>
  <ul class="job-bullets">
    <li>Taught modern web development technologies including React, Vue.js, Node.js, and full-stack development</li>
    <li>Developed comprehensive curriculum covering HTML5, CSS3, JavaScript ES6+, TypeScript, and responsive design</li>
    <li>Mentored students in practical software development projects and industry best practices</li>
    <li>Created educational content focused on modern development workflows and DevOps practices</li>
    <li>Guided students through version control, testing methodologies, and deployment strategies</li>
  </ul>
</div>

<!-- ICIA -->
<div class="job">
  <div class="job-top">
    <div class="job-title-company">Tech Lead - Full Stack and DevOps Engineer | Seguridad Publica - Provincia de Buenos Aires (ICIA)</div>
    <div class="job-date-loc">2017 - Present | Buenos Aires, Argentina (Remote)</div>
  </div>
  <ul class="job-bullets">
    <li>Designed and developed ICIA (Infraestructura de Inteligencia Criminal y Analitica), an ecosystem of 13 interconnected systems for criminal data analysis and public security of Buenos Aires Province</li>
    <li>Built Hermes: criminal intelligence web platform with interactive dashboards for homicides (HOBA module), armed confrontations, stolen vehicles, and police procedures using Next.js, TypeScript, React, Chart.js, Leaflet heat maps, and multi-field filters with CSV, Excel, and PDF export</li>
    <li>Developed Prometheus, Quiron, Cassandra, and Pegasus: Python and FastAPI microservices suite for loading, deep analysis, and querying of criminal incidents, with SQLAlchemy, SQLAdmin, role-based access control, and shared paginated API layer</li>
    <li>Engineered Argo and Argonauta: distributed master-slave bot architecture using FastAPI, WebSockets, MySQL, and Selenium to automate extraction of judicial records and police denunciations from the SID system, with real-time web console and Excel output pipeline feeding Ariadna</li>
    <li>Built Teseo (Django): intelligence system for football security risk management with risk levels (LOW, MEDIUM, HIGH, CRITICAL), geolocated incidents, club conflict ranking, gang intelligence, admission restrictions, and versioned operational plan PDF generation</li>
    <li>Deployed Cerberus (centralized JWT authentication, multi-role system, rate limiting, metrics), Helios (async activity logging microservice), Ariadna (desktop SISEP data processor with integrity pipeline to MySQL using Tkinter and Python), and Hestia (custom Docker container monitor)</li>
    <li>Managed full deployment lifecycle: Docker Hub, GitHub Actions CI/CD pipelines, server provisioning, and container orchestration for the entire 13-system ecosystem</li>
  </ul>
</div>

<!-- redUsers -->
<div class="job">
  <div class="job-top">
    <div class="job-title-company">Full Stack Programmer | redUsers</div>
    <div class="job-date-loc">06/2019 - 03/2023 | Argentina (Remote)</div>
  </div>
  <ul class="job-bullets">
    <li>Developed web applications using MVVM architecture pattern with Vue.js and React frameworks</li>
    <li>Built responsive user interfaces with HTML5, CSS3, JavaScript ES6+, and TypeScript</li>
    <li>Implemented RESTful APIs using Node.js and Express.js with PostgreSQL and MongoDB databases</li>
    <li>Maintained and optimized existing applications improving performance by 30%</li>
    <li>Collaborated with remote teams using Git version control and agile methodologies</li>
    <li>Integrated third-party APIs and services for enhanced application functionality</li>
  </ul>
</div>

<!-- ============ EDUCATION ============ -->
<div class="section-title">Education</div>

<div class="edu">
  <div class="edu-name">Teclab Instituto Tecnico Superior</div>
  <div class="edu-detail">Technical Degree in Programming and Software Development</div>
  <div class="edu-detail">Specialization: Web Technologies and Software Engineering</div>
</div>
<div class="edu">
  <div class="edu-name">Universidad Siglo XXI</div>
  <div class="edu-detail">Higher Education</div>
</div>

<!-- ============ CERTIFICATIONS ============ -->
<div class="section-title">Certifications and Continuous Learning</div>
<ul class="plain">
  <li>AWS Cloud Practitioner (pursuing)</li>
  <li>Docker Containerization</li>
  <li>Kubernetes Orchestration</li>
  <li>CI/CD Pipeline Implementation</li>
  <li>Agile Project Management</li>
</ul>

<!-- ============ KEY ACHIEVEMENTS ============ -->
<div class="section-title">Key Achievements</div>
<ul class="plain">
  <li>Designed and delivered ICIA, an ecosystem of 13 criminal intelligence systems for Buenos Aires Province public security, active since 2017</li>
  <li>Successfully delivered 15+ web applications and platforms using modern JavaScript and TypeScript frameworks</li>
  <li>Implemented DevOps practices reducing deployment time by 50% across multiple projects</li>
  <li>Led remote development teams and public-sector technical projects across different time zones</li>
  <li>Integrated AI, LangChain RAG, and blockchain technologies in enterprise-level applications</li>
  <li>Mentored 200+ students in web development technologies at Teclab Instituto Tecnico Superior</li>
</ul>

<!-- ============ LANGUAGES ============ -->
<div class="section-title">Languages</div>
<div class="lang-row">
  <span>Spanish: Native</span>
  <span>English: C1 Advanced</span>
</div>

</body>
</html>`;

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: 'networkidle0' });

  const outputPath = path.join(__dirname, '../public/ROMAN EMILIANO ARENAS.pdf');

  await page.pdf({
    path: outputPath,
    format: 'A4',
    margin: { top: '0px', right: '0px', bottom: '0px', left: '0px' },
    printBackground: false,
  });

  await browser.close();
  console.log('CV generated at:', outputPath);
})();
