export const mockData = {
  nav: {
    links: [
      { label: 'About', href: '#about' },
      { label: 'Projects', href: '#projects' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  hero: {
    photoUrl:
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80',
    name: 'Bjorn Melin',
    title: 'Senior Data Scientist | AI Engineer | UC Berkeley MIDS | Researcher | 6x AWS Certified',
    subtitle:
      'Building intelligent systems, data pipelines, and AI-driven solutions.',
    actions: [
      { label: 'View Projects', href: '#projects', style: 'primary' },
      { label: 'Get in Touch', href: '#contact', style: 'outline' },
    ],
    timeline: [
      {
        date: 'Nov 2025 – Present',
        title: 'Data Analyst',
        org: 'Cancer Council NSW',
        type: 'work',
      },
      {
        date: 'Mar 2024 – Aug 2025',
        title: 'Retail Operations Analyst',
        org: 'Techno-Brands PVT LTD',
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
  about: {
    title: 'About Me',
    subtitle: 'I build clean, modern data products with a focus on reliability, usability, and measurable impact.',
    blocks: [
      {
        label: 'Location',
        value: 'Sydney, Australia',
      },
      {
        label: 'Open to',
        value: 'Full-time · Contract · Freelance',
      },
      {
        label: 'Specialties',
        value: 'Data Engineering · ML Ops · Analytics',
      },
    ],
    skills: [
      'Python',
      'SQL',
      'Spark',
      'Airflow',
      'Snowflake',
      'DBT',
      'Databricks',
      'FastAPI',
      'React',
    ],
  },
  experience: {
    title: 'Experience & Journey',
    subtitle: 'A timeline of roles where I built and shipped real products, sharpened skills, and learned fast.',
    items: [
      {
        title: 'Full Stack Development Intern',
        company: 'Unified Mentor Pvt. Ltd.',
        timeframe: 'Sep 2025 – Dec 2025',
        location: 'Remote',
        description:
          'Built modern web apps with React, Next.js, and Firebase. Integrated AI models into frontend workflows and optimized performance for real-time experiences.',
        highlights: [
          'Built a dashboard for model monitoring and usage analytics',
          'Implemented fast search with vector embeddings',
          'Improved frontend performance with code splitting and caching',
        ],
        tags: ['React', 'Next.js', 'Firebase', 'TypeScript', 'Git'],
      },
      {
        title: 'Junior Data Scientist',
        company: 'Infolabz IT Services Pvt. Ltd.',
        timeframe: 'Jun 2024 – Aug 2024',
        location: 'Ahmedabad',
        description:
          'Delivered data pipelines and ML workflows for predictive analytics. Collaborated with stakeholders to turn raw data into actionable metrics.',
        highlights: [
          'Built ETL pipelines with Python and Pandas',
          'Produced dashboards to track model drift and performance',
          'Automated data validation checks for reliability',
        ],
        tags: ['Python', 'Pandas', 'SQL', 'Data Visualization'],
      },
    ],
  },
  projects: {
    title: 'Featured Projects',
    subtitle: 'Personal experiments and real-world tooling that demonstrate what I build end-to-end.',
    items: [
      {
        title: 'PTE Magic',
        description:
          'AI-powered PTE exam platform that delivers realistic practice tests, instant scoring, and personalized study paths.',
        tags: ['TypeScript', 'Next.js', 'React', 'PostgreSQL', 'Docker'],
        link: '#',
      },
      {
        title: 'Datawise',
        description:
          'A configurable dataset generator that creates multi-table relational schemas for MySQL, PostgreSQL, and Oracle.',
        tags: ['React', 'Next.js', 'Chakra UI', 'PostgreSQL'],
        link: '#',
      },
      {
        title: 'Neon AI Chat',
        description:
          'A chat assistant prototype combining GPT-style responses with vector memory search and a custom knowledge base.',
        tags: ['React', 'FastAPI', 'LangChain', 'Redis'],
        link: '#',
      },
    ],
  },
  contact: {
    title: 'Contact Me',
    subtitle: 'Open to new opportunities, collaborations, and conversations.',
    socials: [
      { label: 'GitHub', href: 'https://github.com/quanchan', icon: 'github' },
      { label: 'LinkedIn', href: 'https://linkedin.com/in/anhquantran12', icon: 'linkedin' },
      { label: 'Email', href: 'mailto:quan.trananh12@gmail.com', icon: 'mail' },
    ],
  },
}
