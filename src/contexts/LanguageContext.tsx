import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'pt';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, options?: { [key: string]: string | number }) => string;
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

    'projects.filters.all': 'All',
    'projects.filters.fullstack': 'Full Stack',
    'projects.filters.backend': 'Back-End',
    'projects.filters.web3': 'Web3',
    'projects.filters.java': 'Java',
    'projects.filters.python': 'Python',
    'projects.filters.rust': 'Rust',
    'projects.filters.dotnet': '.NET',

    'projects.chainmed.title': 'ChainMed',
    'projects.chainmed.desc': 'ChainMed revolutionizes the way doctors prescribe and patients manage their medications, all with the security and immutability of blockchain technology.',

    'projects.monemiitec.title': 'Monemii Tec',
    'projects.monemiitec.desc': 'A digital platform for the Agrotech sector, offering agrocomputing solutions for the public sector and connecting cutting-edge technology to the field.',

    'projects.convit3-digital.title': 'Convit3-digital',
    'projects.convit3-digital.desc': 'Its an intuitive platform for creating and managing digital events. With it, you can track attendee RSVPs, see who confirmed or declined invitations, and organize all event details in one place.',

    'projects.sysagua.title': 'Sys Água',
    'projects.sysagua.desc': 'Development of a desktop system for inventory and sales control. Using Spring Boot to manage business logic and data persistence in PostgreSQL.',

    'projects.innovateacademytech.title': 'InnovateAcademyTech',
    'projects.innovateacademytech.desc': 'API for course management.',

    'projects.ponte-pecem-ia-ret.title': 'Pecém Bridge: IA-RET (Audit and Selection Governance)',
    'projects.ponte-pecem-ia-ret.desc': 'AI-RET (Regenerative Artificial Intelligence) acts as an impartial auditing agent. Unlike a conventional AI (LLM), it uses Operations Research (Integer Linear Programming) to select candidates. The algorithm maximizes the teams technical score (merit), respecting a strict governance constraint: the Anti-Nomination Lock, which limits the percentage of positions that can be filled by political appointment, forcing the prioritization of technical competence.',

    'projects.todolist.title': 'Todo List',
    'projects.todolist.desc': 'API for managing tasks (CRUD) that is part of the challenge for junior backend developers, who apply to Simplify.',

    'projects.investtrackapi.title': 'Invest Track API',
    'projects.investtrackapi.desc': 'RESTful API for aggregating and managing investment portfolios, developed with .NET 8 and C#.',

    'projects.bookfinderapi.title': 'Book Finder API',
    'projects.bookfinderapi.desc': 'This is a .NET 8 Web API that searches for books by author using the Open Library API. It processes the results and stores them in a local SQL Server database. This project was developed as part of a technical assessment for the Junior Backend Developer position.',



    'projects.candidatesapi.title' : 'CandidatesAPI',
    'projects.candidatesapi.desc' : 'is a REST API developed to provide access to data related to candidacies, elections, parties, and visual analysis of this information.',

    'projects.teste.title': 'Back-End Developer Internship Selection Process Test',
    'projects.teste.desc': 'solve a series of challenges related to different areas of data engineering and software development. Challenges include web scraping in Java, data transformation in Java, and database manipulation in Postgres SQL, as well as developing an API with Vue.js and Python.',


    'projects.sylopay.title': 'Sylopay',
    'projects.sylopay.desc': 'A Buy Now, Pay Later (BNPL) platform built on the Stellar blockchain, enabling instant merchant settlements. Built core Back-End infrastructure using NestJS, Stellar SDK, PostgreSQL, and Docker.',
    
    'projects.kyra.title': 'Kyra Finance',
    'projects.kyra.desc': 'An AI agent that analyzes DeFi strategies and recommends optimal combinations within the SUI ecosystem. Designed and implemented the Back-End logic for data analysis and on-chain integrations.',
    
    'projects.heather.title': 'Heather AI Finance',
    'projects.heather.desc': 'An AI-powered educational assistant for the XRP Ledger, guiding non-technical users through XRPL tools. Designed the database schema and data model for AI–user interactions.',
    
    'projects.btg.title': 'BTG Pactual Challenge',
    'projects.btg.desc': 'Development of a microservice with Java and Spring Boot for asynchronous order processing via RabbitMQ. RESTful API implementation for querying reports and persisting data in MongoDB.',
    
    'projects.contratobiblia.title': 'Bible contract',
    'projects.contratobiblia.desc': 'A Rust library for a smart contract on the Stellar blockchain (Soroban) focused on a social and Bible study application.',
    
    
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
    'contact.description': 'I\m always open to discussing new projects, creative ideas or opportunities to be part of your visions.',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.form.name': 'Name',
    'contact.form.name.placeholder': 'Your full name',
    'contact.form.email': 'Email',
    'contact.form.email.placeholder': 'your.email@example.com',
    'contact.form.subject': 'Subject',
    'contact.form.subject.placeholder': 'Select a reason for contacting',
    'contact.form.subject.general': 'General Inquiry',
    'contact.form.subject.project': 'Project Proposal',
    'contact.form.subject.feedback': 'Feedback',
    'contact.form.subject.other': 'Other',
    'contact.form.message': 'Message',
    'contact.form.message.placeholder': 'Type your message here...',
    'contact.form.submit': 'Send Message',
    'contact.form.submitting': 'Sending...',
    'contact.form.success': 'Message sent successfully!',
    'contact.form.error.min': 'Must be at least {count} characters.',
    'contact.form.error.email': 'Invalid email address.',
    'contact.form.error.subject': 'Please select a subject.',
    'contact.form.error.message': 'Message must be at least {count} characters.',
    'contact.form.error.submit': 'Error sending message. Please try again.',


    'chatbot.greeting': 'Hi! I am a virtual assistant. Ask me about Josias Batista\'s experience, projects, or skills.',
    'chatbot.error': 'Sorry, an error occurred while fetching the response.',
    'chatbot.title': 'Virtual Assistant',
    'chatbot.user': 'ME',
    'chatbot.placeholder': 'Ask about my projects...',
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

    'projects.filters.all': 'Todos',
    'projects.filters.fullstack': 'Full Stack',
    'projects.filters.backend': 'Back-End',
    'projects.filters.web3': 'Web3',
    'projects.filters.java': 'Java',
    'projects.filters.python': 'Python',
    'projects.filters.rust': 'Rust',
    'projects.filters.dotnet': '.NET',

    'projects.chainmed.title': 'ChainMed',
    'projects.chainmed.desc': 'ChainMed revoluciona a forma como médicos prescrevem e pacientes gerenciam seus medicamentos, tudo com a segurança e imutabilidade da tecnologia blockchain.',

    'projects.monemiitec.title': 'Monemii Tec',
    'projects.monemiitec.desc': 'Uma plataforma digital para o setor Agrotech, que apresenta soluções de agrocomputação para o setor público e conecta tecnologia de ponta ao campo.',


    'projects.convit3-digital.title': 'Convit3-digital',
    'projects.convit3-digital.desc': 'É uma plataforma intuitiva para criar e gerenciar eventos digitais. Com ela, você pode acompanhar as confirmações de presença dos participantes, ver quem confirmou ou recusou convites e organizar todos os detalhes do evento em um só lugar.',

    'projects.innovateacademytech.title': 'InnovateAcademyTech',
    'projects.innovateacademytech.desc': 'API para gerenciamento de cursos.',

    'projects.todolist.title': 'Todo List',
    'projects.todolist.desc': 'API para gerenciamento de tarefas (CRUD) que faz parte do desafio para desenvolvedores backend juniores que se candidatam ao Simplify.',

    'projects.investtrackapi.title': 'Invest Track API',
    'projects.investtrackapi.desc': 'API RESTful para agregar e gerenciar portfólios de investimentos, desenvolvida com .NET 8 e C#.',

    'projects.bookfinderapi.title': 'Book Finder API',
    'projects.bookfinderapi.desc': 'Esta é uma API Web .NET 8 que busca livros por autor usando a Open Library API. Ela processa os resultados e os armazena em um banco de dados SQL Server local. Este projeto foi desenvolvido como parte de uma avaliação técnica para a vaga de Desenvolvedor Backend Júnior.',

    'projects.candidatesapi.title' : 'CandidatesAPI',
    'projects.candidatesapi.desc' : 'é uma API REST desenvolvida para fornecer acesso a dados relacionados a candidaturas, eleições, partidos e análise visual dessas informações.',

    'projects.teste.title': 'Back-End Developer Internship Selection Process Test',
    'projects.teste.desc': 'Resolver uma série de desafios relacionados a diferentes áreas da engenharia de dados e desenvolvimento de software. Os desafios incluem web scraping em Java, transformação de dados em Java e manipulação de banco de dados em PostgreSQL, além de desenvolver uma API com Vue.js e Python.',

    'projects.ponte-pecem-ia-ret.title': 'Ponte do Pecém: IA-RET (Auditoria e Governança de Seleção)',
    'projects.ponte-pecem-ia-ret.desc': 'A IA-RET (Inteligência Artificial Regenerativa) atua como um agente de auditoria imparcial. Ao contrário de uma IA convencional (LLM), ela utiliza Pesquisa Operacional (Programação Linear Inteira) para selecionar candidatos. O algoritmo maximiza a pontuação técnica (mérito) das equipes, respeitando uma restrição de governança rigorosa: o Bloqueio Anti-Nomeação, que limita a porcentagem de cargos que podem ser preenchidos por indicação política, forçando a priorização da competência técnica.',

    'projects.sylopay.title': 'Sylopay',
    'projects.sylopay.desc': 'Uma plataforma Buy Now, Pay Later (BNPL) construída na blockchain Stellar, permitindo liquidações instantâneas para comerciantes. Construí a infraestrutura Back-End principal usando NestJS, Stellar SDK, PostgreSQL e Docker.',
    
    'projects.kyra.title': 'Kyra Finance',
    'projects.kyra.desc': 'Um agente de IA que analisa estratégias DeFi e recomenda combinações ideais dentro do ecossistema SUI. Projetei e implementei a lógica Back-End para análise de dados e integrações on-chain.',
    'projects.heather.title': 'Heather AI Finance',
    'projects.heather.desc': 'Um assistente educacional alimentado por IA para o XRP Ledger, orientando usuários não técnicos através das ferramentas XRPL. Projetei o esquema do banco de dados e modelo de dados para interações IA-usuário.',
    
    'projects.btg.title': 'Desafio BTG Pactual',
    'projects.btg.desc': 'Desenvolvimento de um microsserviço com Java e Spring Boot para processamento assíncrono de pedidos via RabbitMQ. Implementação de API RESTful para consulta de relatórios e persistência de dados em MongoDB.',
    
    'projects.sysagua.title': 'Sys Água',
    'projects.sysagua.desc': 'Desenvolvimento de um sistema desktop para controle de estoque e vendas. Usando Spring Boot para gerenciar lógica de negócios e persistência de dados em PostgreSQL.',

    'projects.contratobiblia.title': 'Contrato Biblia',
    'projects.contratobiblia.desc': 'Uma biblioteca Rust para um contrato inteligente no blockchain Stellar (Soroban) focada em uma aplicação social e de estudo bíblico.',

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
    'contact.phone': 'Telefone',
    'contact.form.name': 'Nome',
    'contact.form.name.placeholder': 'Seu nome completo',
    'contact.form.email': 'Email',
    'contact.form.email.placeholder': 'seu.email@exemplo.com',
    'contact.form.subject': 'Assunto',
    'contact.form.subject.placeholder': 'Selecione o motivo do contato',
    'contact.form.subject.general': 'Contato Geral',
    'contact.form.subject.project': 'Proposta de Projeto',
    'contact.form.subject.feedback': 'Feedback',
    'contact.form.subject.other': 'Outro',
    'contact.form.message': 'Mensagem',
    'contact.form.message.placeholder': 'Digite sua mensagem aqui...',
    'contact.form.submit': 'Enviar Mensagem',
    'contact.form.submitting': 'Enviando...',
    'contact.form.success': 'Mensagem enviada com sucesso!',
    'contact.form.error.min': 'Deve ter pelo menos {count} caracteres.',
    'contact.form.error.email': 'Email inválido.',
    'contact.form.error.subject': 'Por favor, selecione um assunto.',
    'contact.form.error.message':
      'A mensagem deve ter pelo menos {count} caracteres.',
    'contact.form.error.submit':
      'Erro ao enviar a mensagem. Tente novamente.',

    'chatbot.greeting': 'Olá! Sou um assistente virtual. Pergunte-me sobre a experiência, projetos ou habilidades do Josias Batista.',
    'chatbot.error': 'Desculpe, ocorreu um erro ao buscar a resposta.',
    'chatbot.title': 'Assistente Virtual',
    'chatbot.user': 'EU',
    'chatbot.placeholder': 'Pergunte sobre meus projetos...',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

 const t = (
    key: string,
    options?: { [key: string]: string | number }
  ): string => {
    let translation =
      translations[language][key as keyof (typeof translations)['en']] || key;

    if (options) {
      Object.keys(options).forEach((optionKey) => {
        translation = translation.replace(
          `{${optionKey}}`,
          String(options[optionKey])
        );
      });
    }

    return translation;
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
