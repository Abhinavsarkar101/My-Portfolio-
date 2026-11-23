# Abhinav Sarkar — Product Manager Portfolio

Portfolio website for **Abhinav Sarkar** (Associate Product Manager / Senior Product Management Consultant at Tecnotree Corporation), showcasing work experience, product management capabilities, and three shipped products from [`github.com/Abhinavsarkar101`](https://github.com/Abhinavsarkar101).

- **LinkedIn:** [linkedin.com/in/abhinav-sarkar-product-manager](https://www.linkedin.com/in/abhinav-sarkar-product-manager/)
- **GitHub:** [github.com/Abhinavsarkar101](https://github.com/Abhinavsarkar101)
- **Email:** `abhinavsarkar121@gmail.com`

---

## Products Showcased from GitHub

Every product description, module breakdown, link, and FAQ in this portfolio is sourced strictly from its respective GitHub repository without added or fabricated claims.

### 1. Compass — MBA Career Operating System (`Columbus.ai-`)
- **GitHub Repository:** https://github.com/Abhinavsarkar101/Columbus.ai-
- **Working Demo:** https://columbus-ai-61q7.onrender.com (GitHub Pages mirror: https://abhinavsarkar101.github.io/Columbus.ai-/)
- **Overview:** An executive career readiness platform built for MBA students, alumni, and candidates targeting consulting (MBB), product management, corporate finance, and operations.
- **Core Modules:**
  - **Executive Candidate Dashboard:** Blended readiness index weighted across Resume Quality (35%), Diagnostic Assessment (30%), Role Match Precision (20%), and Networking Pipeline (15%), with peer percentile benchmarking.
  - **4-Track Diagnostic Assessment:** Behavioral archetype calibration across 24 archetypes, dual specialization validation, post-MBA role shortlist, and a 90-day sprint roadmap.
  - **Resume Studio:** Google XYZ bullet optimizer, live ATS parser diagnostics, and Classic / Modern / Minimal one-page PDF export (`jsPDF` + `html2canvas`).
  - **Precision Live Job Search (`#jobs`):** Role-first job discovery with deterministic three-gate filtering (title/seniority matching, experience band classification, and backend `datePosted` freshness cutoffs for 24h, 3d, 7d, 30d). Queries CORS-enabled corporate ATS feeds (Greenhouse, SmartRecruiters, Lever) and open boards zero-config on GitHub Pages, plus Indeed India, Naukri, and public LinkedIn when paired with the Python FastAPI + `python-jobspy` service.
  - **Deterministic Job Description Matcher:** Powered by `@veriworkly/ats-engine` with a 70-term MBA taxonomy, classifying each requirement as Matched, Weakly Evidenced, Missing, or Uncertain with source-cited evidence and anti-hallucination validation gates.
  - **People & Target Outreach + Company Interview Prep:** Boolean LinkedIn search generators, cold outreach templates, and 12 corporate dossiers (McKinsey, BCG, Bain, Amazon, Flipkart, Swiggy, Goldman Sachs, HUL, Deloitte, etc.).
- **Tech Stack:** React 19, TypeScript, Vite, Tailwind CSS v4, Express, Python FastAPI (`python-jobspy`), Firebase Auth & Cloud Firestore (with local SHA-256 + `localStorage` fallback), `@veriworkly/ats-engine`, `jsPDF`, `html2canvas`.

---

### 2. SignalIQ — Customer Feedback Intelligence Platform (`Signaliq`)
- **GitHub Repository:** https://github.com/Abhinavsarkar101/Signaliq
- **Working Demo:** https://abhinavsarkar101.github.io/Signaliq/
- **Overview:** An AI-powered customer feedback intelligence and research sufficiency platform that converts fragmented feedback across support logs, transcripts, and heatmaps into evidence-backed product decisions.
- **Core Modules:**
  - **Role-Adaptive Dashboard & Onboarding:** Customizes KPIs and views for Founder / Executive, Product Manager / Designer, Customer Success Lead, and User Researcher / Data Analyst, with 3 pre-loaded sample scenarios.
  - **AI Research Brief & Objective Framing:** Uses Google Gemini to structure Primary Question, Core Hypothesis, Granular Sub-Questions, Blindspots, and interactive Clarification Cards with manual brief editing.
  - **Multi-Channel Evidence Ingestion:** Supports CSV/Excel/TSV support logs (smart column mapping + noise/spam scrubbing), call/interview transcripts, and UI heatmaps, linking every insight back to verbatim quotes and ticket IDs.
  - **3-Tier Research Sufficiency Assessment:** Evaluates evidence into **Outcome A (Sufficient Data)**, **Outcome B (Knowledge Gap Identified)** to auto-generate a targeted micro-survey, or **Outcome C (Insufficient / Exploratory)** recommending qualitative discovery calls.
  - **Targeted Survey Builder & Distribution Hub:** Multi-choice, Likert, and open-ended survey builder with live public respondent links (`/#survey-:id`), email campaign composer, CSV recipient uploader, Google Apps Script webhook integration, and Submissions Explorer.
  - **Boardroom Reports:** Impact vs. Effort priority matrix, filterable verbatim quote bank, vector PDF export (`jsPDF` + `html2canvas`), and Markdown export.
- **Tech Stack:** React 19, TypeScript, Tailwind CSS v4, Express 4, Node.js, Google Gemini API (`@google/genai`), `jsPDF`, `html2canvas`, Lucide React, Motion.

---

### 3. PMPeak — Free Product Management Course for Beginners (`pmpeak`)
- **GitHub Repository:** https://github.com/Abhinavsarkar101/pmpeak
- **Working Demo:** https://abhinavsarkar101.github.io/pmpeak/
- **Overview:** A free, zero-sign-up, zero-payment product management course for beginners built as a responsive single-file web application supporting desktop sidebar navigation, mobile bottom tabbar, and light/dark/system themes.
- **Core Modules:**
  - **9 Progressive Chapters:** Covering Mapping Business Outcome to Product Outcome; Outcomes to Opportunities & User Research; Problem Framing, Ideation & Validation; Metrics & Analysis; Driving Product Growth; Designing & Building a Prototype; Deep Diving Into Data (cohorts, funnels, SQL); Machine Learning Foundations & Gen AI; and Fundamentals of Tech & System Design.
  - **Inline Theme-Aware SVG Diagram Engine:** Renders step-by-step KPI trees, JTBD maps, funnel/cohort charts, SQL execution order, and LLM pipelines directly inside lessons.
  - **Quizzes & Quiz Centre:** 90 chapter questions (10 per chapter across multiple-choice, multi-select, true/false, and short answer) with an 80% pass gate, weakest-topic tracking, and revision recommendations.
  - **After-Course Interview Preparation:** 12 PM interview categories (Guesstimates, Root Cause Analysis, Product Design, Product Improvement, Product Metrics, A/B Testing, Product Strategy, Pricing, Go-to-Market, AI Product Sense, Technical & System Design, SQL) with timed mock interviews, sample answers, and self-scoring rubrics.
  - **Gamification & Local Persistence:** XP, levels, daily streaks, Today's Quests, lesson notes, and 16 unlockable badges persisted in browser `localStorage`.
- **Tech Stack:** HTML5, Vanilla JavaScript, CSS Custom Properties, Inline SVG Diagram Engine, `IBM Plex Sans`, `Source Serif 4`.

---

## Portfolio Architecture & Features

- **Typing Hero Headline, Headshot & Resume Download:** Typewriter-style cycling headline paired with Abhinav's portrait, core product pillars, and direct one-click **Download Resume** PDF button.
- **New-Tab Project Detail Pages (`?project=<slug>`):** Clicking any of the 3 products opens a dedicated project detail view in a new tab with 4 landing page UI screens, an interactive live embed tab, target **User Personas**, complete module & architecture breakdown, direct GitHub/Demo links, and a product-specific FAQ accordion.
- **Categorized Skills Grid:** 3-column dark-slate category grid showcasing the 27 skills listed on Abhinav's resume, paired with a Light/Dark theme toggle in the top navigation bar.
- **Complete Resume Sections:** Work Experience (Tecnotree Corporation & Shoppz.co), Hackathon Recognition, Education, Certifications, Languages, and Contact details.

---

## Local Development

```bash
npm install
npm run dev
```

To type-check and build for production:

```bash
npm run lint
npm run build
```
