import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'pt';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.education': 'Education',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.greeting': 'Hi, I\'m',
    'hero.title': 'Full Stack Developer',
    'hero.subtitle': 'Specialized in Backend Development, Web3 & Financial Systems',
    'hero.location': 'Quixadá - Ceará, Brazil',
    'hero.cta': 'View Projects',
    'hero.contact': 'Contact Me',
    
    // About
    'about.title': 'About Me',
    'about.summary': 'Full Stack Developer with a solid foundation in software engineering, blockchain, and back-end architecture. Experienced in building RESTful APIs, integrating financial and Web3 systems, and developing scalable and secure applications. Focused on innovation, security, and performance, with hands-on experience in digital payments, financial automation, and decentralized solutions. Passionate about contributing to global teams that build seamless and future-ready financial technologies.',
    
    // Skills
    'skills.title': 'Technical Skills',
    'skills.web3': 'Web3 & Blockchain',
    'skills.backend': 'Back-End',
    'skills.frontend': 'Front-End',
    'skills.databases': 'Databases',
    'skills.devops': 'DevOps & Cloud',
    'skills.additional': 'Additional Skills',
    
    // Experience
    'experience.title': 'Work Experience',
    'experience.current': 'Present',
    'experience.switchpay.role': 'Full Stack Developer Junior',
    'experience.switchpay.company': 'Switch Pay',
    'experience.switchpay.period': 'October 2024 - Present',
    'experience.switchpay.desc': 'Developing and maintaining the Switch Pay platform, focused on payment solutions, financial reconciliation, and automated integration with management systems.',
    'experience.switchpay.tech': 'Technologies: Node.js, React.js, Express.js, MySQL, TypeORM, TypeScript, Docker, Portainer, Redis, AWS',
    'experience.brazil.role': 'Front-End Developer',
    'experience.brazil.company': 'Brazil Preparatory Courses',
    'experience.brazil.period': 'February 2025 - Present',
    'experience.brazil.desc': 'Direct involvement in the development and maintenance of the organization\'s portal, using Next.js, React, TypeScript and Tailwind CSS to create components and user interfaces.',
    'experience.lucrei.role': 'IT Intern',
    'experience.lucrei.company': 'Lucrei - Cash Back',
    'experience.lucrei.period': 'September 2021 - November 2021',
    'experience.lucrei.desc': 'Collaboration in the technical training of students, assisting in learning web programming, programming logic and the use of tools such as Excel. Performing manual testing on software and website.',
    
    // Projects
    'projects.title': 'Featured Projects',
    'projects.viewCode': 'View Code',
    'projects.viewDemo': 'Live Demo',
    'projects.sylopay.title': 'Sylopay',
    'projects.sylopay.subtitle': 'HackMeridian 2025 (Stellar)',
    'projects.sylopay.desc': 'A Buy Now, Pay Later (BNPL) platform built on the Stellar blockchain, enabling instant merchant settlements. Built core Back-End infrastructure using NestJS, Stellar SDK, PostgreSQL, and Docker.',
    'projects.kyra.title': 'Kyra Finance',
    'projects.kyra.subtitle': 'SUI Hackathon 2025',
    'projects.kyra.desc': 'An AI agent that analyzes DeFi strategies and recommends optimal combinations within the SUI ecosystem. Designed and implemented the Back-End logic for data analysis and on-chain integrations.',
    'projects.heather.title': 'Heather AI Finance',
    'projects.heather.subtitle': 'XRPL Hackathon 2024',
    'projects.heather.desc': 'An AI-powered educational assistant for the XRP Ledger, guiding non-technical users through XRPL tools. Designed the database schema and data model for AI–user interactions.',
    'projects.btg.title': 'BTG Pactual Challenge',
    'projects.btg.subtitle': 'Order Microservice',
    'projects.btg.desc': 'Development of a microservice with Java and Spring Boot for asynchronous order processing via RabbitMQ. RESTful API implementation for querying reports and persisting data in MongoDB.',
    'projects.sysagua.title': 'Sys Água',
    'projects.sysagua.subtitle': 'Team Project',
    'projects.sysagua.desc': 'Development of a desktop system for inventory and sales control. Using Spring Boot to manage business logic and data persistence in PostgreSQL.',
    
    // Education
    'education.title': 'Education & Languages',
    'education.degree': 'Bachelor\'s Degree in Software Engineering',
    'education.university': 'Federal University of Ceará - UFC',
    'education.graduation': 'Expected: 12/2027',
    'education.technical': 'Intermediate Level Technical Course in Computer Science',
    'education.school': 'EEEP Dr. Salomão Alves de Moura',
    'education.completed': 'Completed: 12/2021',
    'education.languages': 'Languages',
    'education.portuguese': 'Portuguese: Native',
    'education.english': 'English: Intermediate (B1)',
    
    // Contact
    'contact.title': 'Get In Touch',
    'contact.description': 'I\'m always open to discussing new projects, creative ideas or opportunities to be part of your visions.',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.location': 'Location',
  },
  pt: {
    // Navigation
    'nav.about': 'Sobre',
    'nav.skills': 'Habilidades',
    'nav.experience': 'Experiência',
    'nav.projects': 'Projetos',
    'nav.education': 'Educação',
    'nav.contact': 'Contato',
    
    // Hero
    'hero.greeting': 'Olá, eu sou',
    'hero.title': 'Desenvolvedor Full Stack',
    'hero.subtitle': 'Especializado em Desenvolvimento Backend, Web3 e Sistemas Financeiros',
    'hero.location': 'Quixadá - Ceará, Brasil',
    'hero.cta': 'Ver Projetos',
    'hero.contact': 'Entre em Contato',
    
    // About
    'about.title': 'Sobre Mim',
    'about.summary': 'Tenho me dedicado a construir uma carreira sólida como Engenheiro de Software. Hoje, como estudante na UFC-Quixadá, meu foco está no desenvolvimento de soluções back-end com Java, Spring Boot, C# e .NET. Minha jornada é uma mistura de aprendizado acadêmico e desafios práticos, aplicando conhecimentos em projetos significativos com forte desejo de aprender e inovar. Sou movido pela curiosidade e pela vontade de competir, sempre buscando criar soluções back-end que realmente atendem às necessidades do usuário final.',
    
    // Skills
    'skills.title': 'Habilidades Técnicas',
    'skills.web3': 'Web3 & Blockchain',
    'skills.backend': 'Back-End',
    'skills.frontend': 'Front-End',
    'skills.databases': 'Bancos de Dados',
    'skills.devops': 'DevOps & Cloud',
    'skills.additional': 'Habilidades Adicionais',
    
    // Experience
    'experience.title': 'Experiência Profissional',
    'experience.current': 'Presente',
    'experience.switchpay.role': 'Desenvolvedor Full Stack Júnior',
    'experience.switchpay.company': 'Switch Pay',
    'experience.switchpay.period': 'Outubro 2024 - Presente',
    'experience.switchpay.desc': 'Desenvolvimento e manutenção da plataforma Switch Pay, focada em soluções de pagamento, conciliação financeira e integração automatizada com sistemas de gestão.',
    'experience.switchpay.tech': 'Tecnologias: Node.js, React.js, Express.js, MySQL, TypeORM, TypeScript, Docker, Portainer, Redis, AWS',
    'experience.brazil.role': 'Desenvolvedor Front-End',
    'experience.brazil.company': 'Brasil Cursinhos',
    'experience.brazil.period': 'Fevereiro 2025 - Presente',
    'experience.brazil.desc': 'Envolvimento direto no desenvolvimento e manutenção do portal da organização, usando Next.js, React, TypeScript e Tailwind CSS para criar componentes e interfaces de usuário.',
    'experience.lucrei.role': 'Estagiário de TI',
    'experience.lucrei.company': 'Lucrei - Cash Back',
    'experience.lucrei.period': 'Setembro 2021 - Novembro 2021',
    'experience.lucrei.desc': 'Colaboração no treinamento técnico de estudantes, auxiliando no aprendizado de programação web, lógica de programação e uso de ferramentas como Excel. Realização de testes manuais em software e website.',
    
    // Projects
    'projects.title': 'Projetos em Destaque',
    'projects.viewCode': 'Ver Código',
    'projects.viewDemo': 'Demo ao Vivo',
    'projects.sylopay.title': 'Sylopay',
    'projects.sylopay.subtitle': 'HackMeridian 2025 (Stellar)',
    'projects.sylopay.desc': 'Uma plataforma Buy Now, Pay Later (BNPL) construída na blockchain Stellar, permitindo liquidações instantâneas para comerciantes. Construí a infraestrutura Back-End principal usando NestJS, Stellar SDK, PostgreSQL e Docker.',
    'projects.kyra.title': 'Kyra Finance',
    'projects.kyra.subtitle': 'SUI Hackathon 2025',
    'projects.kyra.desc': 'Um agente de IA que analisa estratégias DeFi e recomenda combinações ideais dentro do ecossistema SUI. Projetei e implementei a lógica Back-End para análise de dados e integrações on-chain.',
    'projects.heather.title': 'Heather AI Finance',
    'projects.heather.subtitle': 'XRPL Hackathon 2024',
    'projects.heather.desc': 'Um assistente educacional alimentado por IA para o XRP Ledger, orientando usuários não técnicos através das ferramentas XRPL. Projetei o esquema do banco de dados e modelo de dados para interações IA-usuário.',
    'projects.btg.title': 'Desafio BTG Pactual',
    'projects.btg.subtitle': 'Microsserviço de Pedidos',
    'projects.btg.desc': 'Desenvolvimento de um microsserviço com Java e Spring Boot para processamento assíncrono de pedidos via RabbitMQ. Implementação de API RESTful para consulta de relatórios e persistência de dados em MongoDB.',
    'projects.sysagua.title': 'Sys Água',
    'projects.sysagua.subtitle': 'Projeto em Equipe',
    'projects.sysagua.desc': 'Desenvolvimento de um sistema desktop para controle de estoque e vendas. Usando Spring Boot para gerenciar lógica de negócios e persistência de dados em PostgreSQL.',
    
    // Education
    'education.title': 'Formação & Idiomas',
    'education.degree': 'Bacharelado em Engenharia de Software',
    'education.university': 'Universidade Federal do Ceará - UFC',
    'education.graduation': 'Previsão: 12/2027',
    'education.technical': 'Curso Técnico de Nível Médio em Informática',
    'education.school': 'EEEP Dr. Salomão Alves de Moura',
    'education.completed': 'Concluído: 12/2021',
    'education.languages': 'Idiomas',
    'education.portuguese': 'Português: Nativo',
    'education.english': 'Inglês: Intermediário (B1)',
    
    // Contact
    'contact.title': 'Entre em Contato',
    'contact.description': 'Estou sempre aberto a discutir novos projetos, ideias criativas ou oportunidades para fazer parte das suas visões.',
    'contact.email': 'E-mail',
    'contact.phone': 'Telefone',
    'contact.location': 'Localização',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
