import profilePhotoUrl from '../assets/profile pic.jpeg'
import cvPdf from '../assets/HuyDucVu.pdf'
import project1Img1 from '../assets/project1-1.png'
import project1Img2 from '../assets/project1-2.png'
import project2Img1 from '../assets/project2-1.png'
import project2Img2 from '../assets/project2-2.png'
import project2Img3 from '../assets/project2-3.png'
import project2Img4 from '../assets/project2-4.png'
import project3Img1 from '../assets/project3-1.png'
import project5Img1 from '../assets/project5-1.png'
import project5Img2 from '../assets/project5-2.png'
import project4Img1 from '../assets/project4-1.png'
import project4Img2 from '../assets/project4-2.png'

export const mockData = {
  nav: {
    name: 'Huy Duc (Justin) Vu',
    links: [
      { label: 'About',      href: '#main' },
      { label: 'Experience', href: '#experience' },
      { label: 'Projects',   href: '#projects' },
      { label: 'Skills',     href: '#skills' },
      { label: 'Contact',    href: '#contact' },
    ],
    socials: [
    ],
  },
  hero: {
    photoUrl: profilePhotoUrl,
    name: 'Huy Duc Vu',
    tagline: 'data scientist · ai engineer · data analyst · sydney, au',
    headlinePrimary: 'JUSTIN',
    headlineAccent: 'VU',
    bioParagraph1:
      'I build things that learn. **End-to-end ML pipelines, RAG systems, and cloud data architectures** — designed to ship, not just prototype.',
    bioParagraph2:
      '**135% workflow efficiency gains. 120% social reach growth.** Not estimates but deliverable results.',
    stats: [
      { value: '2+ yrs', label: 'Experience' },
      { value: '6.7/7', label: "Master's GPA" },
      { value: '87/100', label: "Bachelor's WAM" },
    ],
    actions: [
      { label: 'View Projects', href: '#projects', style: 'primary' },
      { label: 'Get in Touch', href: '#contact', style: 'outline' },
    ],
    socials: [
      { label: 'LinkedIn', href: 'https://linkedin.com/in/huyducvu', icon: 'linkedin' },
      { label: 'GitHub', href: 'https://github.com/huyducv', icon: 'github' },
      { label: 'CV', href: cvPdf, icon: 'cv', openInNewTab: true },
    ],
  },
  experience: {
    titlePrefix: 'My Career &',
    titleAccent: 'Experience',
    items: [
      {
        title: 'Business Data Analyst',
        company: 'Vennu Pty Ltd',
        type: 'Casual',
        endDate: 'Present',
        startDate: 'Feb 2024',
        description: [
          "I joined to own Vennu's data from the ground up, with no existing pipeline, no dashboards, just raw potential and ideas.",
          'Recently, I built a unified data platform consolidating 10+ sources via Python ETL and Tableau, turning weeks of manual reporting into a single source of truth. That alone **cut planning time by 50%**.',
          'Then engineered a Google Maps API pipeline to fuel marketing. Result? **120% growth in social reach**. Total workflow efficiency across the team improved by **135%**.',
        ],
      },
      {
        title: 'Business Analyst Intern',
        company: 'Vennu Pty Ltd',
        type: 'Internship',
        endDate: 'Feb 2024',
        startDate: 'Nov 2023',
        description:
          'Led a proposal to replace manual Excel workflows with **Power BI**, pulling from 6 MySQL sources, building 4 dashboards that became production. **Reporting cycle dropped from 1–2 weeks to 2–3 days**. The proposal was accepted and initiated before I finished the internship.',
      },
      {
        title: 'Senior Leader (Uni Academic Club)',
        company: 'UOW Chinese Academic Business Learning & Education',
        type: 'Part-time',
        endDate: 'Dec 2024',
        startDate: 'Sep 2023',
        description:
          'Ran statistics workshops for **50+ students**. **99% satisfaction rate**. Program received a national AAUT citation, I was selected as senior leader based on academic standing.',
      },
    ],
  },
  // about: {
  //   title: 'About',
  //   subtitle: 'A chronological look at my work and education.',
  //   timeline: [
  //     {
  //       date: 'Nov 2025 – Present',
  //       title: 'Data Analyst',
  //       org: 'Cancer Council NSW',
  //       type: 'work',
  //     },
  //     {
  //       date: 'Sep 2025 – Dec 2025',
  //       title: 'Full Stack Development Intern',
  //       org: 'Unified Mentor Pvt. Ltd.',
  //       type: 'work',
  //     },
  //     {
  //       date: 'Mar 2024 – Aug 2025',
  //       title: 'Retail Operations Analyst',
  //       org: 'Techno-Brands PVT LTD',
  //       type: 'work',
  //     },
  //     {
  //       date: 'Jun 2024 – Aug 2024',
  //       title: 'Junior Data Scientist',
  //       org: 'Infolabz IT Services Pvt. Ltd.',
  //       type: 'work',
  //     },
  //     {
  //       date: '2023 – 2024',
  //       title: 'MIDS (Master of Information and Data Science)',
  //       org: 'UC Berkeley',
  //       type: 'education',
  //     },
  //     {
  //       date: '2019 – 2023',
  //       title: 'BSc Computer Science',
  //       org: 'University of Melbourne',
  //       type: 'education',
  //     },
  //   ],
  // },
  projects: {
    title: 'Projects',
    subtitle: "Things I've built. Problems I chose to solve.",
    items: [
      {
        title: 'Airbnb ELT Pipeline',
        subtitle: 'Sydney Rental & Demographic Data · 2025',
        categoryLine: '01 · DATA ENGINEERING',
        description:
          'Automated ELT pipeline ingesting **300K+ Airbnb records** + ABS Census data into a Postgres warehouse. Designed a **dbt medallion architecture** for revenue prediction, host segmentation, and demographic profiling across **128 NSW LGAs**.',
        metrics: [
          { value: '300K+', label: 'Records' },
          { value: '128', label: 'LGAs' },
          { value: '200+', label: 'Suburbs' },
        ],
        tags: ['Airflow', 'dbt', 'PostgreSQL', 'GCP', 'SQL', 'Python'],
        images: [project1Img1, project1Img2],
        link: 'https://github.com/huyducv/dbt-airbnb',
      },
      {
        title: 'Lecture Notes AI Tutor',
        subtitle: 'Local RAG Assistant · 2025',
        categoryLine: '02 · LLM / RAG',
        description:
          // 'A local RAG system (LangChain, FAISS, Llama 3, Ollama) to enable semantic search and grounded Q&A over university lecture PDFs.',
          'Fully **local RAG system** for semantic Q&A over lecture PDFs, no API, no data leaves the machine. Built the full ingestion pipeline (extraction, chunking, embedding) and optimised retrieval across **1,300+ semantic chunks**. Apply **LLM-as-a-judge** for evaluation.',
        metrics: [
          { value: '100%', label: 'Local' },
          { value: '1.3K+', label: 'Chunks' },
          { value: 'E2E', label: 'Pipeline' },
        ],
        tags: ['RAG','LangChain', 'FAISS', 'Llama 3', 'Ollama', 'Python', 'Docker'],
        images: [project2Img1, project2Img2, project2Img3, project2Img4],
        link: 'https://github.com/huyducv/nlp_a2_llm',
      },
      {
        title: 'Intelligent CCTV Querying Pipeline',
        subtitle: 'Multi-Modal RAG Assistant · 2026 (TBC)',
        categoryLine: '03 · RAG / VLM / LLM',
        description: [
          'A ** 4-stage multimodal RAG** pipeline that transforms raw CCTV archives into a database queryable by LLM. Powered by **Gemini VLMs** and **ChromaDB**, it retrieves and analyses specific events across **128+ hours of video**.',
          '(1) Video embedding (Gemini Embedding), (2) user query intent understanding (LLM), (3) cosine similarity retrieval, (4) a VLM synthesises the final answer.',
          '_Project in progress, will be updated soon._',
        ],
        metrics: [
          { value: '128H+', label: 'CCTV Videos' },
          { value: '1,900+', label: 'Surveillance Events' },
          { value: '4-stage', label: 'RAG Pipeline' },
        ],
        tags: ['Gemini Embedding 2', 'Gemini VLM', 'ChromaDB', 'LangChain', 'Docker', 'AWS', 'Python'],
        images: [project3Img1
        ],
        link: '#',
      },
      {
        title: 'NYC Taxi Big Data Analytics',
        subtitle: 'Databricks · 2025',
        categoryLine: '04 · Big Data Analytics / ML',
        description:
          'Processed **1B+** of NYC Taxi records using **Databricks Spark** — ingestion, cleaning, and SQL-based analysis across yellow and green cab datasets. Architected ML models to predict fare amounts, with **Random Forest** achieving **RMSE of 5.13**, a 37% improvement over baseline.',
        metrics: [
          { value: '1B+', label: 'Records' },
          { value: '5.134', label: 'RMSE' },
          { value: '37% ↑', label: 'vs baseline' },
        ],
        tags: ['Databricks', 'Apache Spark', 'scikit-learn', 'SparkSQL', 'SparkML', 'Python'],
        images: [project4Img1, project4Img2
        ],
        link: 'https://github.com/huyducv/databricks-NYC-cab',
      },
      {
        title: 'Youtube Trending Video Analysis',
        subtitle: 'Snowflake · 2025',
        categoryLine: '05 · Data Lakehouse',
        description:
          'Built a cloud data lakehouse pipeline from Azure Blob Storage into Snowflake, ingesting 2.8M+ YouTube trending records across 20 countries. Ran Advanced **Snowflake SQL** to identify top-performing categories and recommended Gaming as the optimal niche for new channels targeting US, CA, FR, JP, and MX.',
        metrics: [
          { value: '2.8M+', label: 'Records' },
          { value: '20', label: 'countries' },
          { value: 'Snowflake', label: 'Cloud pipline' },
        ],
        tags: ['Snowflake', 'Azure ADLS', 'SQL', 'Data Lakehouse'],
        images: [project5Img1, project5Img2
        ],
        link: '#',
      },
    ],
  },
  contact: {
    title: 'Get in Touch',
    subtitle: 'Open to Data Scientist, Data Analytics, and AI roles.',
    location: 'Sydney, NSW, Australia',
    phone: '0410 899 204',
    socials: [
      { label: 'Github', href: 'https://github.com/huyducv', icon: 'github' },
      { label: 'LinkedIn', href: 'https://linkedin.com/in/huyducvu', icon: 'linkedin' },
      { label: 'Email', href: 'mailto:vuhuyduc03@gmail.com', icon: 'mail' },
    ],
  },
  footer: {
    designedBy: 'Justin Vu',
    year: 2026,
  },
}
