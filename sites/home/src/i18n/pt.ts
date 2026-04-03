export const pt = {
  lang: 'pt-BR',
  langToggle: 'EN',
  langToggleHref: '/en/',

  nav: {
    services: 'Serviços',
    expertise: 'Expertise',
    products: 'Produtos',
    tech: 'Tecnologias',
    contact: 'Contato',
    cta: 'Fale conosco',
  },

  hero: {
    headline: 'Construímos software que funciona em produção.',
    sub: 'Consultoria especializada em aplicações de saúde, desenvolvimento sob medida e performance de sistemas Java.',
    cta: 'Fale com a gente',
    ctaSecondary: 'Nossos serviços',
  },

  services: {
    title: 'O que fazemos',
    subtitle: 'Atuamos em projetos de software que precisam de gente que já viu código em produção quebrar — e sabe consertar.',
    items: [
      {
        title: 'Aplicativos de Saúde',
        desc: 'Desenvolvimento de sistemas para a área de saúde com Java e Node.js. Integrações com padrões HL7, FHIR e sistemas SUS. Experiência real com SAMU, UBS e hospitais.',
      },
      {
        title: 'Apps Sob Medida',
        desc: 'Aplicativos web, Android e iOS desenvolvidos do zero para o seu negócio. Sem template genérico — cada projeto é pensado para resolver o problema real do cliente.',
      },
      {
        title: 'Fábricas de Software',
        desc: 'Consultoria de planejamento e gerenciamento para fábricas de software. Processos, métricas, alocação de equipe e governança de projetos.',
      },
      {
        title: 'Performance Java',
        desc: 'Tuning e otimização de aplicações Spring Boot e Quarkus. Profiling, análise de memória, otimização de queries e revisão de arquitetura para alta carga.',
      },
    ],
  },

  expertise: {
    title: 'Por que a VillarTech',
    items: [
      {
        value: '10+',
        label: 'anos entregando software em produção',
      },
      {
        value: 'Saúde',
        label: 'experiência real com sistemas SUS/SAMU',
      },
      {
        value: 'Full-stack',
        label: 'do backend Java ao app mobile Flutter',
      },
      {
        value: 'Performance',
        label: 'especialistas em JVM tuning e profiling',
      },
    ],
  },

  products: {
    title: 'Nossos Produtos',
    subtitle: 'Soluções próprias que combinam tecnologia e experiência real para resolver problemas concretos.',
    concursino: {
      name: 'Concursino',
      tagline: 'Preparação para concursos do jeito certo.',
      desc: 'Plataforma de estudos para concursos públicos com repetição espaçada, gamificação e microaulas. Funciona como Duolingo — mas para concursos.',
      features: [
        'Repetição espaçada com algoritmo inteligente',
        'Gamificação: streaks, badges e desafios',
        'Microaulas criadas por especialistas',
      ],
      cta: 'Acessar',
      url: 'https://concursino.com.br',
    },
    fitperson: {
      name: 'FitPerson',
      tagline: 'Gestão inteligente para personal trainers.',
      desc: 'Plataforma para personal trainers criarem treinos personalizados com IA, acompanharem progresso de clientes e gerenciarem sua carreira.',
      features: [
        'Planos de treino gerados com IA',
        'Dashboard de progresso dos clientes',
        'Gestão de agenda e faturamento',
      ],
      cta: 'Em breve',
    },
  },

  tech: {
    title: 'Stack',
    subtitle: 'Trabalhamos com tecnologias que conhecemos em profundidade — não surfamos hype.',
    categories: {
      backend: 'Backend',
      frontend: 'Frontend & Mobile',
      infra: 'Infra & Cloud',
      data: 'Dados',
    },
  },

  contact: {
    title: 'Vamos conversar',
    subtitle: 'Tem um projeto em mente ou precisa de consultoria? Entre em contato.',
    email: 'contato@villartech.com',
    cta: 'Enviar e-mail',
  },

  footer: {
    copy: `© ${new Date().getFullYear()} VillarTech. Todos os direitos reservados.`,
    links: {
      services: 'Serviços',
      products: 'Produtos',
      expertise: 'Expertise',
      contact: 'Contato',
    },
  },
} as const;
