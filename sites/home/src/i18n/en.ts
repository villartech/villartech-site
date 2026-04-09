export const en = {
  lang: 'en',
  langToggle: 'PT',
  langToggleHref: '/',

  nav: {
    services: 'Services',
    expertise: 'Expertise',
    products: 'Products',
    tech: 'Tech Stack',
    contact: 'Contact',
    cta: 'Get in touch',
  },

  hero: {
    headline: 'We build software that works in production.',
    sub: 'Specialized consulting in healthcare applications, custom development, and Java systems performance.',
    cta: 'Get in touch',
    ctaSecondary: 'Our services',
  },

  services: {
    title: 'What we do',
    subtitle: "We work on software projects that need people who've seen production code break — and know how to fix it.",
    items: [
      {
        title: 'Healthcare Apps',
        desc: 'Health system development with Java and Node.js. Integrations with HL7, FHIR standards, and public health systems. Real experience with emergency services and hospitals.',
      },
      {
        title: 'Custom Apps',
        desc: "Web, Android, and iOS applications built from scratch for your business. No generic templates — each project is designed to solve the client's actual problem.",
      },
      {
        title: 'Software Factories',
        desc: 'Planning and management consulting for software factories. Processes, metrics, team allocation, and project governance.',
      },
      {
        title: 'Java Performance',
        desc: 'Tuning and optimization of Spring Boot and Quarkus applications. Profiling, memory analysis, query optimization, and architecture review for high-load systems.',
      },
    ],
  },

  expertise: {
    title: 'Why VillarTech',
    items: [
      {
        value: '10+',
        label: 'years shipping production software',
      },
      {
        value: 'Healthcare',
        label: 'real experience with public health systems',
      },
      {
        value: 'Full-stack',
        label: 'from Java backend to Flutter mobile apps',
      },
      {
        value: 'Performance',
        label: 'JVM tuning and profiling specialists',
      },
    ],
  },

  products: {
    title: 'Our Products',
    subtitle: 'In-house solutions that combine technology and real-world experience to solve concrete problems.',
    concursino: {
      name: 'Concursino',
      tagline: 'Like Duolingo, but for public exams.',
      desc: 'Pass your exam studying just 5 minutes a day. FSRS spaced repetition algorithm, full gamification, and offline mode. Web and mobile.',
      features: [
        'FSRS: smart review that optimizes your memory',
        'XP, combos, streaks, leaderboards, and achievements',
        'Timed practice tests with real exam questions',
        'Study offline — download questions to your phone',
      ],
      cta: 'Visit',
      url: 'https://www.concursino.com.br',
    },
    fitperson: {
      name: 'FitPerson',
      tagline: 'Everything a personal trainer needs in one place.',
      desc: 'Complete platform for client management, workouts, nutrition, scheduling, and billing. With gamification for engagement and integrated payments.',
      features: [
        'Custom workouts with 600+ exercises',
        'Integrated nutrition plans',
        'Client chat and real-time progress tracking',
        'Automated billing with local payment methods',
      ],
      cta: 'Coming soon',
    },
  },

  tech: {
    title: 'Tech Stack',
    subtitle: "We work with technologies we know deeply — we don't chase hype.",
    categories: {
      backend: 'Backend',
      frontend: 'Frontend & Mobile',
      infra: 'Infra & Cloud',
      data: 'Data',
    },
  },

  contact: {
    title: "Let's talk",
    subtitle: 'Have a project in mind or need consulting? Get in touch.',
    email: 'contato@villartech.com',
    cta: 'Send email',
  },

  footer: {
    copy: `© ${new Date().getFullYear()} VillarTech. All rights reserved.`,
    legalName: 'Lucas Villar Batista de Carvalho Cia Ltda - ME',
    tradeName: 'Villar Consultoria e Tecnologia',
    cnpjLabel: 'CNPJ',
    cnpj: '53.074.782/0001-70',
    links: {
      services: 'Services',
      products: 'Products',
      expertise: 'Expertise',
      contact: 'Contact',
    },
  },
} as const;
