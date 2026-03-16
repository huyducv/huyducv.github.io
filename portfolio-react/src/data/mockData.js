export const mockData = {
  nav: {
    name: 'Huy Duc Vu',
    links: [
      { label: 'Experience', href: '#experience' },
      { label: 'Projects',   href: '#projects' },
      { label: 'Skills',     href: '#skills' },
      { label: 'Contact',    href: '#contact' },
    ],
    socials: [
    ],
  },
  hero: {
    photoUrl:
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=400&q=80',
    name: 'Quan Tran',
    title: 'Data Engineer & Analyst',
    subtitle:
      'Building intelligent systems, data pipelines, and AI-driven solutions.',
    actions: [
      { label: 'View Projects', href: '#projects', style: 'primary' },
      { label: 'Get in Touch', href: '#contact', style: 'outline' },
    ],
    socials: [
      { label: 'GitHub', href: 'https://github.com/quanchan', icon: 'github' },
      { label: 'LinkedIn', href: 'https://linkedin.com/in/anhquantran12', icon: 'linkedin' },
    ],
  },
  experience: {
    titlePrefix: 'My career &',
    titleAccent: 'experience',
    items: [
      {
        title: 'Data Analyst',
        company: 'Cancer Council NSW',
        type: 'Full-Time',
        endDate: 'Present',
        startDate: 'Nov 2025',
        description:
          'Building and maintaining ETL pipelines to support health research initiatives. Designing interactive dashboards and automated reporting workflows that surface actionable insights for cross-functional stakeholders.',
      },
      {
        title: 'Full Stack Development Intern',
        company: 'Unified Mentor Pvt. Ltd.',
        type: 'Internship',
        endDate: 'Dec 2025',
        startDate: 'Sep 2025',
        description:
          'Developed responsive web features using React and Node.js. Collaborated with senior engineers on RESTful API design, wrote unit tests, and contributed to CI/CD pipeline improvements.',
      },
      {
        title: 'Retail Operations Analyst',
        company: 'Techno-Brands PVT LTD',
        type: 'Full-Time',
        endDate: 'Aug 2025',
        startDate: 'Mar 2024',
        description:
          'Automated inventory reconciliation with Python scripts reducing manual effort by 60%. Built SQL-based sales reports and demand-forecasting models to optimise stock levels across 12 retail locations.',
      },
      {
        title: 'Junior Data Scientist',
        company: 'Infolabz IT Services Pvt. Ltd.',
        type: 'Full-Time',
        endDate: 'Aug 2024',
        startDate: 'Jun 2024',
        description:
          'Trained and evaluated classification models for client churn prediction. Preprocessed large-scale datasets using Pandas and Scikit-learn, and delivered model performance reports to product stakeholders.',
      },
    ],
  },
  about: {
    title: 'About',
    subtitle: 'A chronological look at my work and education.',
    timeline: [
      {
        date: 'Nov 2025 – Present',
        title: 'Data Analyst',
        org: 'Cancer Council NSW',
        type: 'work',
      },
      {
        date: 'Sep 2025 – Dec 2025',
        title: 'Full Stack Development Intern',
        org: 'Unified Mentor Pvt. Ltd.',
        type: 'work',
      },
      {
        date: 'Mar 2024 – Aug 2025',
        title: 'Retail Operations Analyst',
        org: 'Techno-Brands PVT LTD',
        type: 'work',
      },
      {
        date: 'Jun 2024 – Aug 2024',
        title: 'Junior Data Scientist',
        org: 'Infolabz IT Services Pvt. Ltd.',
        type: 'work',
      },
      {
        date: '2023 – 2024',
        title: 'MIDS (Master of Information and Data Science)',
        org: 'UC Berkeley',
        type: 'education',
      },
      {
        date: '2019 – 2023',
        title: 'BSc Computer Science',
        org: 'University of Melbourne',
        type: 'education',
      },
    ],
  },
  projects: {
    title: 'Projects',
    subtitle: 'Personal experiments and real-world tooling that demonstrate what I build end-to-end.',
    items: [
      {
        title: 'PTE Magic',
        subtitle: 'AI Exam Platform · 2025',
        description:
          'AI-powered PTE exam platform that delivers realistic practice tests, instant scoring, and personalized study paths.',
        tags: ['TypeScript', 'Next.js', 'React', 'PostgreSQL', 'Docker'],
        images: [
          'https://picsum.photos/seed/ptemagic1/600/340',
          'https://picsum.photos/seed/ptemagic2/600/340',
          'https://picsum.photos/seed/ptemagic3/600/340',
        ],
        link: '#',
      },
      {
        title: 'Datawise',
        subtitle: 'Dataset Generator · 2024',
        description:
          'A configurable dataset generator that creates multi-table relational schemas for MySQL, PostgreSQL, and Oracle.',
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
    subtitle: 'Open to Data Engineering, Data Analytics, and AI roles in Sydney.',
    socials: [
      { label: 'https://github.com/quanchan', href: 'https://github.com/quanchan', icon: 'github' },
      { label: 'https://linkedin.com/in/anhquantran12', href: 'https://linkedin.com/in/anhquantran12', icon: 'linkedin' },
      { label: 'Email', href: 'mailto:quan.trananh12@gmail.com', icon: 'mail' },
    ],
  },
  footer: {
    name: 'Quan Tran',
    location: 'Sydney, Australia',
  },
}
