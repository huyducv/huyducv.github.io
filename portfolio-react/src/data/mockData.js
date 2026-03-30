import profilePhotoUrl from '../assets/profile pic.jpeg'
import cvPdf from '../assets/HuyDucVu.pdf'

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
        title: 'Business Analyst',
        company: 'Vennu Pty Ltd',
        type: 'Casual',
        endDate: 'Present',
        startDate: 'Feb 2024',
        description:
          'Building and maintaining ETL pipelines to support health research initiatives. Designing interactive dashboards and automated reporting workflows that surface actionable insights for cross-functional stakeholders.',
      },
      {
        title: 'Business Analyst Intern',
        company: 'Vennu Pty Ltd',
        type: 'Internship',
        endDate: 'Feb 2024',
        startDate: 'Nov 2023',
        description:
          'Developed responsive web features using React and Node.js. Collaborated with senior engineers on RESTful API design, wrote unit tests, and contributed to CI/CD pipeline improvements.',
      },
      {
        title: 'Senior Leader (Uni Academic Club)',
        company: 'UOW Chinese Academic Business Learning & Education',
        type: 'Part-time',
        endDate: 'Dec 2024',
        startDate: 'Sep 2023',
        description:
          'Automated inventory reconciliation with Python scripts reducing manual effort by 60%. Built SQL-based sales reports and demand-forecasting models to optimise stock levels across 12 retail locations.',
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
    subtitle: 'Personal experiments and academic projects reflecting what I built outside my career.',
    items: [
      {
        title: 'Airbnb business & demographic ELT Pipeline',
        subtitle: 'Big Data Engineering · 2025',
        description:
          'A complete ELT pipeline for Airbnb and NSW Census data, ingesting monthly listings, loading it into a data warehouse, and producing analytics-ready models.',
        tags: ['TypeScript', 'Next.js', 'React', 'PostgreSQL', 'Docker'],
        images: [
          'https://picsum.photos/seed/ptemagic1/600/340',
          'https://picsum.photos/seed/ptemagic2/600/340',
          'https://picsum.photos/seed/ptemagic3/600/340',
        ],
        link: '#',
      },
      {
        title: 'Lecture Notes AI Tutor',
        subtitle: 'Local RAG Assistant · 2025',
        description:
          'A local RAG system (LangChain, FAISS, Llama 3, Ollama) to enable semantic search and grounded Q&A over university lecture PDFs.',
        tags: ['React', 'Next.js', 'Chakra UI', 'PostgreSQL'],
        images: [
          'https://picsum.photos/seed/datawise1/600/340',
          'https://picsum.photos/seed/datawise2/600/340',
          'https://picsum.photos/seed/datawise3/600/340',
        ],
        link: '#',
      },
      {
        title: 'Neon AI Chat',
        subtitle: 'Chat Assistant · 2024',
        description:
          'A chat assistant prototype combining GPT-style responses with vector memory search and a custom knowledge base.',
        tags: ['React', 'FastAPI', 'LangChain', 'Redis'],
        images: [
          'https://picsum.photos/seed/neonai1/600/340',
          'https://picsum.photos/seed/neonai2/600/340',
          'https://picsum.photos/seed/neonai3/600/340',
        ],
        link: '#',
      },
    ],
  },
  contact: {
    title: 'Get in Touch',
    subtitle: 'Open to Data Scientist, Data Analytics, and AI roles in Sydney (Open to relocate).',
    location: 'Sydney, NSW, Australia',
    socials: [
      { label: 'Github', href: 'https://github.com/huyducv', icon: 'github' },
      { label: 'LinkedIn', href: 'https://linkedin.com/in/huyducvu', icon: 'linkedin' },
      { label: 'Email', href: 'mailto:vuhuyduc03@gmail.com', icon: 'mail' },
    ],
  },
  footer: {
    name: 'Justin Vu',
    location: 'Sydney, Australia',
  },
}
