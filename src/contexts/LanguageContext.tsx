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
    'hero.subtitle': 'Backend Development and Integration with Web3 Ecosystems',
    'hero.location': 'Quixadá - Ceará, Brazil',
    'hero.cta': 'View Projects',
    'hero.contact': 'Contact Me',
    
    // About
    'about.title': 'About Me',
    'about.summary': 'Full-stack developer focused on building robust and innovative Back-End and Web3 solutions. I have experience building scalable and secure applications, leveraging cutting-edge technologies to solve complex problems and deliver value in both decentralized and traditional ecosystems.',
    
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
    'experience.switchpay.period': 'October 2025 - Present',
    'experience.switchpay.desc': 'Development and maintenance of the Switch Pay platform, specializing in payment methods, automatic reconciliation, and integration with management software. Creation and integration of financial APIs for process automation. Implementation of responsive and secure interfaces, focusing on UX/UI and performance. Collaboration in a multidisciplinary environment, applying agile methodologies.',
    'experience.switchpay.tech': 'Technologies: Node.js, React.js, Express.js, MySQL, TypeORM, TypeScript, Docker, Portainer, Redis, AWS',

    'experience.brazil.role': 'Front-End Developer',
    'experience.brazil.company': 'Brazil Preparatory Courses',
    'experience.brazil.period': 'February 2025 - October 2025',
    'experience.brazil.desc': 'Direct involvement in the development and maintenance of the organizations portal, using HTML, CSS, JavaScript, React, Next.js, TypeScript and Tailwind CSS to create components and user interfaces. Leading the design and organization of the entire technology structure.',
    'experience.brazil.tech': 'Technologies: Html, Css, JavaScript, React.js, Next.js, TypeScript, TailwindCss.',

    'experience.lucrei.role': 'IT Intern',
    'experience.lucrei.company': 'Lucrei - Cash Back',
    'experience.lucrei.period': 'September 2021 - December 2021',
    'experience.lucrei.desc': 'Collaboration in the technical training of students at EEEP Dr. Salomão Alves de Moura, helping them learn web programming, programming logic and use of tools such as Excel. Performing manual tests on software and on the website https://eulucrei.com.br, documenting results in spreadsheets and participating in meetings to report and discuss improvements.',
    
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
    'education.graduation': 'Expected: December 2027',
    'education.technical': 'Intermediate Level Technical Course in Computer Science',
    'education.school': 'EEEP Dr. Salomão Alves de Moura',
    'education.completed': 'Completed: December 2021',
    'education.languages': 'Languages',
    'education.portuguese': 'Portuguese: Native',
    'education.english': 'English: Intermediate (B1)',
    
    // Contact
    'contact.title': 'Get In Touch',
    'contact.description': 'I\'m always open to discussing new projects, creative ideas or opportunities to be part of your visions.',
    'contact.email': 'Email',
    'contact.phone': 'Phone'
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
    'hero.subtitle': 'Desenvolvimento de Backend e Integração com Ecossistemas Web3',
    'hero.location': 'Quixadá - Ceará, Brasil',
    'hero.cta': 'Ver Projetos',
    'hero.contact': 'Entre em Contato',
    
    // About
    'about.title': 'Sobre Mim',
    'about.summary': 'Desenvolvedor full-stack focado na construção de soluções Back-End e Web3 robustas e inovadoras. Tenho experiência na construção de aplicações escaláveis ​​e seguras, utilizando tecnologias de ponta para resolver problemas complexos e agregar valor em ecossistemas descentralizados e tradicionais.',
    
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
    'experience.switchpay.period': 'Outubro 2025 - Presente',
    'experience.switchpay.desc': 'Desenvolvimento e manutenção da plataforma Switch Pay, especializada em meios de pagamento, conciliação automática e integração com softwares de gestão. Criação e integração de APIs financeiras para automação de processos. Implementação de interfaces responsivas e seguras, com foco em UX/UI e desempenho. Colaboração em um ambiente multidisciplinar, aplicando metodologias ágeis.',
    'experience.switchpay.tech': 'Tecnologias: Node.js, React.js, Express.js, MySQL, TypeORM, TypeScript, Docker, Portainer, Redis, AWS',
    
    'experience.brazil.role': 'Desenvolvedor Front-End',
    'experience.brazil.company': 'Brasil Cursinhos',
    'experience.brazil.period': 'Fevereiro 2025 - Outubro 2025',
    'experience.brazil.desc': 'Atuação direta no desenvolvimento e manutenção do portal da organização, utilizando Next.js, React, TypeScript e Tailwind CSS para criar componentes e interfaces de usuário. Liderando o projeto e organização de toda a estrutura da parte da tecnologia.',
    'experience.brazil.tech': 'Tecnologias: Html, Css, JavaScript, React.js, Next.js, TypeScript, TailwindCss.',

    'experience.lucrei.role': 'Estagiário de TI',
    'experience.lucrei.company': 'Lucrei - Cash Back',
    'experience.lucrei.period': 'Setembro 2021 - Dezembro 2021',
    'experience.lucrei.desc': 'Colaboração na formação técnica de alunos da EEEP Dr. Salomão Alves de Moura, auxiliando no aprendizado de programação web, lógica de programação e uso de ferramentas como Excel. Realização de testes manuais em software e no site https://eulucrei.com.br, documentando resultados em planilhas e participando de reuniões para reportar e discutir melhorias.',
    
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
    'education.graduation': 'Previsão: Dezembro de 2027',
    'education.technical': 'Curso Técnico de Nível Médio em Informática',
    'education.school': 'EEEP Dr. Salomão Alves de Moura',
    'education.completed': 'Concluído: Dezembro de 2021',
    'education.languages': 'Idiomas',
    'education.portuguese': 'Português: Nativo',
    'education.english': 'Inglês: Intermediário (B1)',
    
    // Contact
    'contact.title': 'Entre em Contato',
    'contact.description': 'Estou sempre aberto a discutir novos projetos, ideias criativas ou oportunidades para fazer parte das suas visões.',
    'contact.email': 'E-mail',
    'contact.phone': 'Telefone'
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
