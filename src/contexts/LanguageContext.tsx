import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'pt' | 'es';

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
    'nav.hackathons': 'Hackathons',
    'nav.education': 'Education',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.greeting': 'Hi, I\'m',
    'hero.title': 'Full Stack Developer',
    'hero.subtitle': 'Backend Development and Integration with Web3 Ecosystems',
    'hero.location': 'Quixadá - Ceará, Brazil',
    'hero.cta': 'View Projects',
    'hero.contact': 'Contact Me',
    'hero.downloadCV': 'Download CV',
    
    // About
    'about.title': 'About Me',
    'about.summary': 'Born in the countryside of Passagem Funda, Ceará (Brazil), my journey in tech started early. I took my first steps as a developer during my technical course in Aracoiaba, building websites with HTML, PHP, and Java. Today, I am studying Software Engineering at the Federal University of Ceará (UFC) in Quixadá. I am a Christian at the Assembleia de Deus Templo Central, passionate about games, and driven by the challenge of building real solutions. I value strong roots and clean code.',
    'about.bento.backend': 'Backend & APIs',
    'about.bento.backend_desc': 'Scalable architectures with Java, Spring Boot, and Node.js.',
    'about.bento.web3': 'Web3 & Blockchain',
    'about.bento.web3_desc': 'Smart Contracts and integrations on Stellar & SUI.',
    'about.bento.frontend': 'Modern Frontend',
    'about.bento.frontend_desc': 'Interactive UIs using React, Next.js and Tailwind CSS.',
    'about.bento.database': 'Data & Architecture',
    'about.bento.database_desc': 'Database design, modeling and CI/CD pipelines.',

    // GitHub Stats
    'github.title': 'GitHub Activity',
    'github.subtitle': 'Real-time data from the GitHub API.',
    'github.repos': 'Public Repos',
    'github.stars': 'Total Stars',
    'github.followers': 'Followers',
    'github.following': 'Following',
    'github.languages': 'Top Languages',
    'github.viewProfile': 'View GitHub profile',
    
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

    'experience.ideedutec.role': 'Full Stack Developer',
    'experience.ideedutec.company': 'IDEEDUTEC',
    'experience.ideedutec.period': 'APRIL 2026 - Present',
    'experience.ideedutec.desc1': 'Modern Interface Development: Responsible for implementing complex dashboards and reporting systems using Next.js, TypeScript, and Chakra UI.',
    'experience.ideedutec.desc2': 'Analysis and Refactoring of Legacy Systems: Proactively identifying performance bottlenecks in legacy routes, proposing data processing migrations from the client-side to the server-side to optimize loading times and user experience.',
    'experience.ideedutec.desc3': 'Technical Collaboration: Direct interface with the Backend team for defining new API contracts and data architecture focused on Analytics.',
    'experience.ideedutec.tech': 'Technology Stack: React, Next.js, TypeScript, Chakra UI, Git/GitHub, REST APIs, Nest.js, PostgreSQL, PrismaORM, and Docker.',

    'experience.monitor.role': 'Software Development Monitor (Web & Mobile)',
    'experience.monitor.company': 'Federal University of Ceará – UFC',
    'experience.monitor.period': 'March 2026 - Present',
    'experience.monitor.desc1': 'Supported best development practices (Clean Code), leading Code Review sessions and requiring the implementation of unit tests in complex academic projects.',
    'experience.monitor.desc2': 'Supported AI-driven development initiatives, instructing classes on using LLMs for refactoring and structuring modern architectures.',
    'experience.monitor.tech': 'Technologies: JavaScript, TypeScript, React.js, Node.js, Unit Testing, Clean Code, LLMs',

    'experience.switchpay.role': 'Junior Full Stack Developer (Temporary)',
    'experience.switchpay.company': 'Switch Pay',
    'experience.switchpay.period': 'October 2025 - December 2025',
    'experience.switchpay.desc1': 'Developed features and fixed bugs in web applications using the JavaScript ecosystem and Java integrations.',
    'experience.switchpay.desc2': 'Participated in agile ceremonies (Scrum), optimizing CI/CD integration flow and rigorously applying versioning best practices.',
    'experience.switchpay.tech': 'Technologies: Node.js, React.js, Express.js, MySQL, TypeORM, TypeScript, Docker, Java, CI/CD',

    'experience.brazil.role': 'Junior Front-End Developer',
    'experience.brazil.company': 'Brasil Cursinhos',
    'experience.brazil.period': 'February 2025 - February 2026',
    'experience.brazil.desc1': 'Built modular front-end interfaces using JavaScript, HTML, and CSS, applying componentization concepts essential for modern frameworks.',
    'experience.brazil.desc2': 'Developed routines to consume REST APIs efficiently and in a structured way.',
    'experience.brazil.tech': 'Technologies: HTML, CSS, JavaScript, React.js, Next.js, TypeScript, TailwindCSS.',

    'experience.lucrei.role': 'IT Intern',
    'experience.lucrei.company': 'Lucrei - Cash Back',
    'experience.lucrei.period': 'September 2021 - December 2021',
    'experience.lucrei.desc1': 'Created and executed rigorous tests on web services and actively contributed to the technical documentation of company solutions.',
    
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
    'projects.convit3-digital.desc': 'An intuitive platform for creating and managing digital events. Track attendee RSVPs, see who confirmed or declined invitations, and organize all event details in one place.',

    'projects.sysagua.title': 'Sys Água',
    'projects.sysagua.desc': 'Development of a desktop system for inventory and sales control. Uses Spring Boot to manage business logic and data persistence in PostgreSQL.',

    'projects.innovateacademytech.title': 'InnovateAcademyTech',
    'projects.innovateacademytech.desc': 'REST API for course management.',

    'projects.ponte-pecem-ia-ret.title': 'Pecém Bridge: IA-RET (Audit and Selection Governance)',
    'projects.ponte-pecem-ia-ret.desc': 'AI-RET (Regenerative Artificial Intelligence) acts as an impartial auditing agent. Unlike a conventional AI (LLM), it uses Operations Research (Integer Linear Programming) to select candidates. The algorithm maximizes the team\'s technical score (merit), respecting a strict governance constraint: the Anti-Nomination Lock, which limits the percentage of positions that can be filled by political appointment, forcing the prioritization of technical competence.',

    'projects.todolist.title': 'Todo List',
    'projects.todolist.desc': 'REST API for managing tasks (CRUD) that is part of the challenge for junior backend developers applying to Simplify.',

    'projects.investtrackapi.title': 'Invest Track API',
    'projects.investtrackapi.desc': 'RESTful API for aggregating and managing investment portfolios, developed with .NET 8 and C#.',

    'projects.bookfinderapi.title': 'Book Finder API',
    'projects.bookfinderapi.desc': 'A .NET 8 Web API that searches for books by author using the Open Library API. It processes the results and stores them in a local SQL Server database. This project was developed as part of a technical assessment for the Junior Backend Developer position.',

    'projects.candidatesapi.title': 'Candidates API',
    'projects.candidatesapi.desc': 'A REST API developed to provide access to data related to candidacies, elections, parties, and visual analysis of this information.',

    'projects.teste.title': 'Back-End Developer Internship Selection Process Test',
    'projects.teste.desc': 'Solved a series of challenges related to different areas of data engineering and software development. Challenges include web scraping in Java, data transformation in Java, and database manipulation in PostgreSQL, as well as developing an API with Vue.js and Python.',

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
    
    // Hackathons
    'hackathons.badge': 'Competitions & Innovation',
    'hackathons.title': 'Hackathons',
    'hackathons.subtitle': 'Projects developed under pressure and focused on real solutions during programming and Web3 marathons.',
    'hackathons.meridian.desc': 'Modern BNPL (Buy Now, Pay Later) platform built on the Stellar blockchain. Enables instant settlement for merchants and transparent interest-free installment plans.',
    'hackathons.meridian.award': 'Competitor (Prize Pool: US$50k)',
    'hackathons.sui.desc': 'AI agent specialized in DeFi strategies, acting as an on-chain analyst. Identifies and simulates efficient combinations of lending, staking, and swaps on the SUI network.',
    'hackathons.xrpl.desc': 'Personalized digital tutor integrated with an LLM chatbot designed to guide users intuitively within the XRP Ledger ecosystem.',
    'hackathons.xrpl.award': '3rd Place - Web 3 Track',
    
    // Education
    'education.title': 'Education & Languages',
    'education.degree': 'Bachelor\'s Degree in Software Engineering',
    'education.university': 'Federal University of Ceará - UFC',
    'education.graduation': '2022 - Expected: December 2027',
    'education.technical': 'Intermediate Level Technical Course in Computer Science',
    'education.school': 'EEEP Dr. Salomão Alves de Moura',
    'education.completed': '2019 - 2021',
    'education.languages': 'Languages',
    'education.portuguese': 'Portuguese: Native',
    'education.english': 'English: Intermediate',
    'education.spanish': 'Spanish: Intermediate',
    
    // Contact
    'contact.title': 'Get In Touch',
    'contact.description': 'I\'m always open to discussing new projects, creative ideas or opportunities to be part of your visions.',
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

    // Footer
    'footer.tagline': 'Full Stack Developer & Web3 enthusiast building robust, scalable solutions.',
    'footer.nav': 'Quick Links',
    'footer.social': 'Connect',
    'footer.contact.label': 'Contact',
    'footer.rights': 'All rights reserved.',
    'footer.open': 'Open to work',
    'footer.backToTop': 'Back to top',
    'footer.madeWith': 'Made with',

    // Experience (inline labels)
    'experience.badge.current': 'Present',
    'experience.tech.label': 'Technologies Used',

    // Hackathons
    'hackathons.project.label': 'Project',

    // Contact
    'contact.direct.title': 'Get in touch directly',

    // Projects count
    'projects.count.one': 'project',
    'projects.count.many': 'projects',
  },
  pt: {
    // Navigation
    'nav.about': 'Sobre',
    'nav.skills': 'Habilidades',
    'nav.experience': 'Experiência',
    'nav.projects': 'Projetos',
    'nav.hackathons': 'Hackathons',
    'nav.education': 'Educação',
    'nav.contact': 'Contato',
    
    // Hero
    'hero.greeting': 'Olá, eu sou',
    'hero.title': 'Desenvolvedor Full Stack',
    'hero.subtitle': 'Desenvolvimento de Backend e Integração com Ecossistemas Web3',
    'hero.location': 'Quixadá - Ceará, Brasil',
    'hero.cta': 'Ver Projetos',
    'hero.contact': 'Entre em Contato',
    'hero.downloadCV': 'Baixar Currículo',
    
    // About
    'about.title': 'Sobre Mim',
    'about.summary': 'Nascido no interior de Passagem Funda (CE), minha jornada na tecnologia começou cedo. Dei meus primeiros passos como desenvolvedor no curso técnico em Informática em Aracoiaba, criando sites com HTML, PHP e Java. Hoje, curso Engenharia de Software na Universidade Federal do Ceará (UFC) em Quixadá. Sou cristão da Assembleia de Deus Templo Central, apaixonado por jogos e movido pelo desafio de construir soluções reais. Valorizo raízes fortes e código limpo.',
    'about.bento.backend': 'Backend & APIs',
    'about.bento.backend_desc': 'Arquiteturas escaláveis com Java, Spring Boot e Node.js.',
    'about.bento.web3': 'Web3 & Blockchain',
    'about.bento.web3_desc': 'Smart Contracts e integrações na Stellar e SUI.',
    'about.bento.frontend': 'Frontend Moderno',
    'about.bento.frontend_desc': 'Interfaces interativas com React, Next.js e Tailwind CSS.',
    'about.bento.database': 'Dados & Arquitetura',
    'about.bento.database_desc': 'Modelagem de dados, bancos relacionais e pipelines CI/CD.',

    // GitHub Stats
    'github.title': 'Atividade no GitHub',
    'github.subtitle': 'Dados em tempo real via API do GitHub.',
    'github.repos': 'Repositórios',
    'github.stars': 'Total de Stars',
    'github.followers': 'Seguidores',
    'github.following': 'Seguindo',
    'github.languages': 'Principais Linguagens',
    'github.viewProfile': 'Ver perfil no GitHub',
    
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

    'experience.ideedutec.role': 'Desenvolvedor Full Stack',
    'experience.ideedutec.company': 'IDEEDUTEC',
    'experience.ideedutec.period': 'Abril 2026 - Presente',
    'experience.ideedutec.desc1': 'Desenvolvimento de Interfaces Modernas: Responsável pela implementação de Dashboards complexos e sistemas de relatórios utilizando Next.js, TypeScript e Chakra UI.',
    'experience.ideedutec.desc2': 'Análise e Refatoração de Sistemas Legados: Atuação proativa na identificação de gargalos de performance em rotas legadas, propondo migrações de processamento de dados do Client-side para o Server-side para otimizar o tempo de carregamento e a experiência do usuário.',
    'experience.ideedutec.desc3': 'Colaboração Técnica: Interface direta com a equipe de Backend para definição de novos contratos de API e arquitetura de dados voltada para Analytics.',
    'experience.ideedutec.tech': 'Stack Tecnológica: React, Next.js, TypeScript, Chakra UI, Git/GitHub, APIs REST, Nest.js, PostgreSQL, PrismaORM e Docker.',

    'experience.monitor.role': 'Monitor de Desenvolvimento de Software (Web e Mobile)',
    'experience.monitor.company': 'Universidade Federal do Ceará – UFC',
    'experience.monitor.period': 'Março 2026 - Presente',
    'experience.monitor.desc1': 'Apoiei boas práticas de desenvolvimento (Clean Code), liderando sessões de Code Review e exigindo a implementação de testes unitários em projetos acadêmicos complexos.',
    'experience.monitor.desc2': 'Apoiei iniciativas com IA no desenvolvimento, instruindo turmas no uso de LLMs para refatoração e estruturação de arquiteturas modernas.',
    'experience.monitor.tech': 'Tecnologias: JavaScript, TypeScript, React.js, Node.js, Testes Unitários, Clean Code, LLMs',

    'experience.switchpay.role': 'Desenvolvedor Full Stack Júnior (Temporário)',
    'experience.switchpay.company': 'Switch Pay',
    'experience.switchpay.period': 'Outubro 2025 - Dezembro 2025',
    'experience.switchpay.desc1': 'Desenvolvi funcionalidades e corrigi bugs em aplicações web utilizando o ecossistema JavaScript e integrações em Java.',
    'experience.switchpay.desc2': 'Participei de cerimônias ágeis (Scrum), otimizando o fluxo de integração contínua (CI/CD) e aplicando rigorosamente boas práticas de versionamento.',
    'experience.switchpay.tech': 'Tecnologias: Node.js, React.js, Express.js, MySQL, TypeORM, TypeScript, Docker, Java, CI/CD',
    
    'experience.brazil.role': 'Desenvolvedor Front-End Júnior',
    'experience.brazil.company': 'Brasil Cursinhos',
    'experience.brazil.period': 'Fevereiro 2025 - Fevereiro 2026',
    'experience.brazil.desc1': 'Atuei na construção de interfaces (front-end) modulares utilizando JavaScript, HTML e CSS, aplicando conceitos de componentização essenciais para frameworks modernos.',
    'experience.brazil.desc2': 'Desenvolvi rotinas para consumir APIs REST de forma eficiente e estruturada.',
    'experience.brazil.tech': 'Tecnologias: HTML, CSS, JavaScript, React.js, Next.js, TypeScript, TailwindCSS.',

    'experience.lucrei.role': 'Estagiário de T.I.',
    'experience.lucrei.company': 'Lucrei Cash Back',
    'experience.lucrei.period': 'Setembro 2021 - Dezembro 2021',
    'experience.lucrei.desc1': 'Criei e executei testes rigorosos em serviços web e contribuí ativamente com a documentação técnica das soluções da empresa.',
    
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
    'projects.chainmed.desc': 'O ChainMed revoluciona a forma como médicos prescrevem e pacientes gerenciam seus medicamentos, tudo com a segurança e imutabilidade da tecnologia blockchain.',

    'projects.monemiitec.title': 'Monemii Tec',
    'projects.monemiitec.desc': 'Uma plataforma digital para o setor Agrotech, que apresenta soluções de agrocomputação para o setor público e conecta tecnologia de ponta ao campo.',

    'projects.convit3-digital.title': 'Convit3-digital',
    'projects.convit3-digital.desc': 'Uma plataforma intuitiva para criar e gerenciar eventos digitais. Com ela, você pode acompanhar as confirmações de presença dos participantes, ver quem confirmou ou recusou convites e organizar todos os detalhes do evento em um só lugar.',

    'projects.innovateacademytech.title': 'InnovateAcademyTech',
    'projects.innovateacademytech.desc': 'API REST para gerenciamento de cursos.',

    'projects.todolist.title': 'Todo List',
    'projects.todolist.desc': 'API REST para gerenciamento de tarefas (CRUD) que faz parte do desafio para desenvolvedores backend juniores que se candidatam ao Simplify.',

    'projects.investtrackapi.title': 'Invest Track API',
    'projects.investtrackapi.desc': 'API RESTful para agregar e gerenciar portfólios de investimentos, desenvolvida com .NET 8 e C#.',

    'projects.bookfinderapi.title': 'Book Finder API',
    'projects.bookfinderapi.desc': 'Uma API Web .NET 8 que busca livros por autor usando a Open Library API. Ela processa os resultados e os armazena em um banco de dados SQL Server local. Este projeto foi desenvolvido como parte de uma avaliação técnica para a vaga de Desenvolvedor Backend Júnior.',

    'projects.candidatesapi.title': 'Candidates API',
    'projects.candidatesapi.desc': 'Uma API REST desenvolvida para fornecer acesso a dados relacionados a candidaturas, eleições, partidos e análise visual dessas informações.',

    'projects.teste.title': 'Teste de Processo Seletivo para Estágio Backend',
    'projects.teste.desc': 'Resolução de uma série de desafios relacionados a diferentes áreas da engenharia de dados e desenvolvimento de software. Os desafios incluem web scraping em Java, transformação de dados em Java e manipulação de banco de dados em PostgreSQL, além do desenvolvimento de uma API com Vue.js e Python.',

    'projects.ponte-pecem-ia-ret.title': 'Ponte do Pecém: IA-RET (Auditoria e Governança de Seleção)',
    'projects.ponte-pecem-ia-ret.desc': 'A IA-RET (Inteligência Artificial Regenerativa) atua como um agente de auditoria imparcial. Ao contrário de uma IA convencional (LLM), ela utiliza Pesquisa Operacional (Programação Linear Inteira) para selecionar candidatos. O algoritmo maximiza a pontuação técnica (mérito) das equipes, respeitando uma restrição de governança rigorosa: o Bloqueio Anti-Nomeação, que limita a porcentagem de cargos que podem ser preenchidos por indicação política, forçando a priorização da competência técnica.',

    'projects.sylopay.title': 'Sylopay',
    'projects.sylopay.desc': 'Uma plataforma Buy Now, Pay Later (BNPL) construída na blockchain Stellar, permitindo liquidações instantâneas para comerciantes. Construí a infraestrutura Back-End principal usando NestJS, Stellar SDK, PostgreSQL e Docker.',
    
    'projects.kyra.title': 'Kyra Finance',
    'projects.kyra.desc': 'Um agente de IA que analisa estratégias DeFi e recomenda combinações ideais dentro do ecossistema SUI. Projetei e implementei a lógica Back-End para análise de dados e integrações on-chain.',
    
    'projects.heather.title': 'Heather AI Finance',
    'projects.heather.desc': 'Um assistente educacional alimentado por IA para o XRP Ledger, orientando usuários não técnicos através das ferramentas XRPL. Projetei o esquema do banco de dados e o modelo de dados para interações IA-usuário.',
    
    'projects.btg.title': 'Desafio BTG Pactual',
    'projects.btg.desc': 'Desenvolvimento de um microsserviço com Java e Spring Boot para processamento assíncrono de pedidos via RabbitMQ. Implementação de API RESTful para consulta de relatórios e persistência de dados em MongoDB.',
    
    'projects.sysagua.title': 'Sys Água',
    'projects.sysagua.desc': 'Desenvolvimento de um sistema desktop para controle de estoque e vendas, utilizando Spring Boot para gerenciar a lógica de negócios e a persistência de dados em PostgreSQL.',

    'projects.contratobiblia.title': 'Contrato Bíblia',
    'projects.contratobiblia.desc': 'Uma biblioteca Rust para um contrato inteligente no blockchain Stellar (Soroban) focada em uma aplicação social e de estudo bíblico.',

    // Hackathons
    'hackathons.badge': 'Competições & Inovação',
    'hackathons.title': 'Hackathons',
    'hackathons.subtitle': 'Projetos desenvolvidos sob pressão e focados em soluções reais durante maratonas de programação e Web3.',
    'hackathons.meridian.desc': 'Plataforma moderna de BNPL (Buy Now, Pay Later) construída na blockchain Stellar. Permite liquidação instantânea para comerciantes e planos de parcelamento transparentes sem juros.',
    'hackathons.meridian.award': 'Competidor (Prize Pool: US$50k)',
    'hackathons.sui.desc': 'Agente de IA especializado em estratégias DeFi, atuando como analista on-chain. Identifica e simula combinações eficientes de lending, staking e swaps na rede SUI.',
    'hackathons.xrpl.desc': 'Tutor digital personalizado integrado a um chatbot LLM projetado para guiar usuários intuitivamente dentro do ecossistema XRP Ledger.',
    'hackathons.xrpl.award': '3º Lugar - Trilha Web 3',

    // Education
    'education.title': 'Formação & Idiomas',
    'education.degree': 'Bacharelado em Engenharia de Software',
    'education.university': 'Universidade Federal do Ceará - UFC',
    'education.graduation': '2022 - Previsão: Dezembro de 2027',
    'education.technical': 'Curso Técnico em Informática',
    'education.school': 'EEEP Dr. Salomão Alves de Moura',
    'education.completed': '2019 - 2021',
    'education.languages': 'Idiomas',
    'education.portuguese': 'Português: Nativo',
    'education.english': 'Inglês: Intermediário',
    'education.spanish': 'Espanhol: Intermediário',
    
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
    'contact.form.error.message': 'A mensagem deve ter pelo menos {count} caracteres.',
    'contact.form.error.submit': 'Erro ao enviar a mensagem. Tente novamente.',

    // Footer
    'footer.tagline': 'Desenvolvedor Full Stack & entusiasta Web3 construindo soluções robustas e escaláveis.',
    'footer.nav': 'Links Rápidos',
    'footer.social': 'Redes',
    'footer.contact.label': 'Contato',
    'footer.rights': 'Todos os direitos reservados.',
    'footer.open': 'Disponível para trabalho',
    'footer.backToTop': 'Voltar ao topo',
    'footer.madeWith': 'Feito com',

    // Experience (inline labels)
    'experience.badge.current': 'Atual',
    'experience.tech.label': 'Tecnologias Utilizadas',

    // Hackathons
    'hackathons.project.label': 'Projeto',

    // Contact
    'contact.direct.title': 'Entre em contato direto',

    // Projects count
    'projects.count.one': 'projeto',
    'projects.count.many': 'projetos',
  },
  es: {
    // Navigation
    'nav.about': 'Sobre mí',
    'nav.skills': 'Habilidades',
    'nav.experience': 'Experiencia',
    'nav.projects': 'Proyectos',
    'nav.hackathons': 'Hackatones',
    'nav.education': 'Educación',
    'nav.contact': 'Contacto',

    // Hero
    'hero.greeting': 'Hola, soy',
    'hero.title': 'Desarrollador Full Stack',
    'hero.subtitle': 'Desarrollo Backend e Integración con Ecosistemas Web3',
    'hero.location': 'Quixadá - Ceará, Brasil',
    'hero.cta': 'Ver Proyectos',
    'hero.contact': 'Contáctame',
    'hero.downloadCV': 'Descargar CV',

    // About
    'about.title': 'Sobre mí',
    'about.summary': 'Nacido en el interior de Passagem Funda, Ceará (Brasil), mi viaje en la tecnología comenzó temprano. Di mis primeros pasos como desarrollador en mi curso técnico en Aracoiaba, creando sitios web con HTML, PHP y Java. Hoy, estudio Ingeniería de Software en la Universidad Federal de Ceará (UFC) en Quixadá. Soy cristiano de la Assembleia de Deus Templo Central, un apasionado por los juegos y motivado por el desafío de construir soluciones reales. Valoro las raíces fuertes y el código limpio.',
    'about.bento.backend': 'Backend & APIs',
    'about.bento.backend_desc': 'Arquitecturas escalables con Java, Spring Boot y Node.js.',
    'about.bento.web3': 'Web3 & Blockchain',
    'about.bento.web3_desc': 'Smart Contracts e integraciones en Stellar y SUI.',
    'about.bento.frontend': 'Frontend Moderno',
    'about.bento.frontend_desc': 'Interfaces interactivas con React, Next.js y Tailwind CSS.',
    'about.bento.database': 'Datos y Arquitectura',
    'about.bento.database_desc': 'Diseño de bases de datos, modelado y pipelines CI/CD.',

    // GitHub Stats
    'github.title': 'Actividad en GitHub',
    'github.subtitle': 'Datos en tiempo real desde la API de GitHub.',
    'github.repos': 'Repositorios',
    'github.stars': 'Total de Stars',
    'github.followers': 'Seguidores',
    'github.following': 'Siguiendo',
    'github.languages': 'Principales Lenguajes',
    'github.viewProfile': 'Ver perfil en GitHub',

    // Skills
    'skills.title': 'Habilidades Técnicas',
    'skills.web3': 'Web3 & Blockchain',
    'skills.backend': 'Back-End',
    'skills.frontend': 'Front-End',
    'skills.databases': 'Bases de Datos',
    'skills.devops': 'DevOps & Cloud',
    'skills.additional': 'Habilidades Adicionales',

    // Experience
    'experience.title': 'Experiencia Profesional',
    'experience.current': 'Presente',

    'experience.ideedutec.role': 'Desarrollador Full Stack',
    'experience.ideedutec.company': 'IDEEDUTEC',
    'experience.ideedutec.period': 'Abril 2026 - Presente',
    'experience.ideedutec.desc1': 'Desarrollo de interfaces modernas: Responsable de la implementación de paneles de control y sistemas de informes complejos utilizando Next.js, TypeScript y Chakra UI.',
    'experience.ideedutec.desc2': 'Análisis y refactorización de sistemas heredados: Actuación proactiva en la identificación de cuellos de botella de rendimiento en rutas heredadas, proponiendo migraciones de procesamiento de datos del lado del cliente al lado del servidor para optimizar el tiempo de carga y la experiencia del usuario.',
    'experience.ideedutec.desc3': 'Colaboración técnica: Interfaz directa con el equipo de backend para definir nuevos contratos de API y arquitectura de datos centrada en análisis.',
    'experience.ideedutec.tech': 'Tecnologías utilizadas: React, Next.js, TypeScript, Chakra UI, Git/GitHub, APIs REST, Nest.js, PostgreSQL, PrismaORM y Docker.',

    'experience.monitor.role': 'Monitor de Desarrollo de Software (Web y Mobile)',
    'experience.monitor.company': 'Universidad Federal de Ceará – UFC',
    'experience.monitor.period': 'Marzo 2026 - Presente',
    'experience.monitor.desc1': 'Apoyé buenas prácticas de desarrollo (Clean Code), liderando sesiones de Code Review y exigiendo la implementación de pruebas unitarias en proyectos académicos complejos.',
    'experience.monitor.desc2': 'Apoyé iniciativas con IA en el desarrollo, instruyendo clases sobre el uso de LLMs para refactorización y estructuración de arquitecturas modernas.',
    'experience.monitor.tech': 'Tecnologías: JavaScript, TypeScript, React.js, Node.js, Pruebas Unitarias, Clean Code, LLMs',

    'experience.switchpay.role': 'Desarrollador Full Stack Junior (Temporal)',
    'experience.switchpay.company': 'Switch Pay',
    'experience.switchpay.period': 'Octubre 2025 - Diciembre 2025',
    'experience.switchpay.desc1': 'Desarrollé funcionalidades y corregí bugs en aplicaciones web utilizando el ecosistema JavaScript e integraciones en Java.',
    'experience.switchpay.desc2': 'Participé en ceremonias ágiles (Scrum), optimizando el flujo de integración continua (CI/CD) y aplicando rigurosamente buenas prácticas de versionado.',
    'experience.switchpay.tech': 'Tecnologías: Node.js, React.js, Express.js, MySQL, TypeORM, TypeScript, Docker, Java, CI/CD',

    'experience.brazil.role': 'Desarrollador Front-End Junior',
    'experience.brazil.company': 'Brasil Cursinhos',
    'experience.brazil.period': 'Febrero 2025 - Febrero 2026',
    'experience.brazil.desc1': 'Construí interfaces front-end modulares usando JavaScript, HTML y CSS, aplicando conceptos de componentización esenciales para frameworks modernos.',
    'experience.brazil.desc2': 'Desarrollé rutinas para consumir APIs REST de forma eficiente y estructurada.',
    'experience.brazil.tech': 'Tecnologías: HTML, CSS, JavaScript, React.js, Next.js, TypeScript, TailwindCSS.',

    'experience.lucrei.role': 'Pasante de T.I',
    'experience.lucrei.company': 'Lucrei Cash Back',
    'experience.lucrei.period': 'Septiembre 2021 - Diciembre 2021',
    'experience.lucrei.desc1': 'Creé y ejecuté pruebas rigurosas en servicios web y contribuí activamente con la documentación técnica de las soluciones de la empresa.',

    // Projects
    'projects.title': 'Proyectos Destacados',
    'projects.viewCode': 'Ver Código',
    'projects.viewDemo': 'Demo en Vivo',

    'projects.filters.all': 'Todos',
    'projects.filters.fullstack': 'Full Stack',
    'projects.filters.backend': 'Back-End',
    'projects.filters.web3': 'Web3',
    'projects.filters.java': 'Java',
    'projects.filters.python': 'Python',
    'projects.filters.rust': 'Rust',
    'projects.filters.dotnet': '.NET',

    'projects.chainmed.title': 'ChainMed',
    'projects.chainmed.desc': 'ChainMed revoluciona la forma en que los médicos prescriben y los pacientes gestionan sus medicamentos, con la seguridad e inmutabilidad de la tecnología blockchain.',

    'projects.monemiitec.title': 'Monemii Tec',
    'projects.monemiitec.desc': 'Una plataforma digital para el sector Agrotech, que ofrece soluciones de agrocomputación para el sector público y conecta tecnología de punta con el campo.',

    'projects.convit3-digital.title': 'Convit3-digital',
    'projects.convit3-digital.desc': 'Una plataforma intuitiva para crear y gestionar eventos digitales. Con ella, puedes rastrear confirmaciones de asistencia, ver quién confirmó o rechazó invitaciones y organizar todos los detalles del evento en un solo lugar.',

    'projects.sysagua.title': 'Sys Água',
    'projects.sysagua.desc': 'Desarrollo de un sistema de escritorio para control de inventario y ventas, utilizando Spring Boot para gestionar la lógica de negocio y persistencia de datos en PostgreSQL.',

    'projects.innovateacademytech.title': 'InnovateAcademyTech',
    'projects.innovateacademytech.desc': 'API REST para gestión de cursos.',

    'projects.ponte-pecem-ia-ret.title': 'Puente Pecém: IA-RET (Gobernanza de Auditoría y Selección)',
    'projects.ponte-pecem-ia-ret.desc': 'La IA-RET actúa como agente de auditoría imparcial, usando Investigación Operativa (Programación Lineal Entera) para seleccionar candidatos maximizando el mérito técnico del equipo bajo restricciones de gobernanza.',

    'projects.todolist.title': 'Todo List',
    'projects.todolist.desc': 'API REST para gestión de tareas (CRUD), parte del desafío para desarrolladores backend junior que aplican en Simplify.',

    'projects.investtrackapi.title': 'Invest Track API',
    'projects.investtrackapi.desc': 'API RESTful para agregar y gestionar portafolios de inversión, desarrollada con .NET 8 y C#.',

    'projects.bookfinderapi.title': 'Book Finder API',
    'projects.bookfinderapi.desc': 'API Web .NET 8 que busca libros por autor usando la Open Library API. Procesa resultados y los almacena en una base de datos SQL Server local.',

    'projects.candidatesapi.title': 'Candidates API',
    'projects.candidatesapi.desc': 'Una API REST desarrollada para proveer acceso a datos relacionados con candidaturas, elecciones, partidos y análisis visual de esa información.',

    'projects.teste.title': 'Prueba de Proceso de Selección para Pasante Backend',
    'projects.teste.desc': 'Resolución de desafíos de ingeniería de datos y desarrollo de software: web scraping en Java, transformación de datos en Java, manipulación de base de datos en PostgreSQL, y desarrollo de una API con Vue.js y Python.',

    'projects.sylopay.title': 'Sylopay',
    'projects.sylopay.desc': 'Plataforma Buy Now, Pay Later (BNPL) construida en la blockchain Stellar, permitiendo liquidaciones instantáneas para comerciantes. Construí la infraestructura Back-End principal con NestJS, Stellar SDK, PostgreSQL y Docker.',

    'projects.kyra.title': 'Kyra Finance',
    'projects.kyra.desc': 'Agente de IA que analiza estrategias DeFi y recomienda combinaciones óptimas dentro del ecosistema SUI. Diseñé e implementé la lógica Back-End para análisis de datos e integraciones on-chain.',

    'projects.heather.title': 'Heather AI Finance',
    'projects.heather.desc': 'Asistente educativo impulsado por IA para XRP Ledger, guiando usuarios no técnicos a través de las herramientas XRPL. Diseñé el esquema de base de datos y modelo de datos para interacciones IA-usuario.',

    'projects.btg.title': 'Desafío BTG Pactual',
    'projects.btg.desc': 'Desarrollo de un microservicio con Java y Spring Boot para procesamiento asíncrono de pedidos vía RabbitMQ. Implementación de API RESTful para consulta de reportes y persistencia de datos en MongoDB.',

    'projects.contratobiblia.title': 'Contrato Biblia',
    'projects.contratobiblia.desc': 'Biblioteca Rust para un contrato inteligente en la blockchain Stellar (Soroban), enfocada en una aplicación social y de estudio bíblico.',

    // Hackathons
    'hackathons.badge': 'Competiciones e Innovación',
    'hackathons.title': 'Hackathons',
    'hackathons.subtitle': 'Proyectos desarrollados bajo presión y enfocados en soluciones reales durante maratones de programación y Web3.',
    'hackathons.meridian.desc': 'Moderna plataforma BNPL (Buy Now, Pay Later) construida en la blockchain de Stellar. Permite liquidación instantánea para comerciantes y planes de pago a plazos transparentes y sin intereses.',
    'hackathons.meridian.award': 'Competidor (Prize Pool: US$50k)',
    'hackathons.sui.desc': 'Agente de IA especializado en estrategias DeFi, actuando como analista on-chain. Identifica y simula combinaciones eficientes de préstamos, staking y swaps en la red SUI.',
    'hackathons.xrpl.desc': 'Tutor digital personalizado integrado a un chatbot LLM diseñado para guiar a los usuarios intuitivamente dentro del ecosistema XRP Ledger.',
    'hackathons.xrpl.award': '3er Lugar - Pista Web 3',

    // Education
    'education.title': 'Formación e Idiomas',
    'education.degree': 'Licenciatura en Ingeniería de Software',
    'education.university': 'Universidad Federal de Ceará - UFC',
    'education.graduation': '2022 - Previsto: Diciembre 2027',
    'education.technical': 'Curso Técnico en Informática',
    'education.school': 'EEEP Dr. Salomão Alves de Moura',
    'education.completed': '2019 - 2021',
    'education.languages': 'Idiomas',
    'education.portuguese': 'Portugués: Nativo',
    'education.english': 'Inglés: Intermedio',
    'education.spanish': 'Español: Intermedio',

    // Contact
    'contact.title': 'Contáctame',
    'contact.description': 'Siempre estoy abierto a discutir nuevos proyectos, ideas creativas u oportunidades para ser parte de tus visiones.',
    'contact.email': 'Correo',
    'contact.phone': 'Teléfono',
    'contact.form.name': 'Nombre',
    'contact.form.name.placeholder': 'Tu nombre completo',
    'contact.form.email': 'Email',
    'contact.form.email.placeholder': 'tu.email@ejemplo.com',
    'contact.form.subject': 'Asunto',
    'contact.form.subject.placeholder': 'Selecciona el motivo de contacto',
    'contact.form.subject.general': 'Consulta General',
    'contact.form.subject.project': 'Propuesta de Proyecto',
    'contact.form.subject.feedback': 'Feedback',
    'contact.form.subject.other': 'Otro',
    'contact.form.message': 'Mensaje',
    'contact.form.message.placeholder': 'Escribe tu mensaje aquí...',
    'contact.form.submit': 'Enviar Mensaje',
    'contact.form.submitting': 'Enviando...',
    'contact.form.success': '¡Mensaje enviado con éxito!',
    'contact.form.error.min': 'Debe tener al menos {count} caracteres.',
    'contact.form.error.email': 'Correo electrónico inválido.',
    'contact.form.error.subject': 'Por favor, selecciona un asunto.',
    'contact.form.error.message': 'El mensaje debe tener al menos {count} caracteres.',
    'contact.form.error.submit': 'Error al enviar el mensaje. Inténtalo de nuevo.',

    // Footer
    'footer.tagline': 'Desarrollador Full Stack & entusiasta Web3 construyendo soluciones robustas y escalables.',
    'footer.nav': 'Accesos Rápidos',
    'footer.social': 'Conectar',
    'footer.contact.label': 'Contacto',
    'footer.rights': 'Todos los derechos reservados.',
    'footer.open': 'Disponible para trabajar',
    'footer.backToTop': 'Volver arriba',
    'footer.madeWith': 'Hecho con',

    // Experience (inline labels)
    'experience.badge.current': 'Actual',
    'experience.tech.label': 'Tecnologías Utilizadas',

    // Hackathons
    'hackathons.project.label': 'Proyecto',

    // Contact
    'contact.direct.title': 'Contáctame directamente',

    // Projects count
    'projects.count.one': 'proyecto',
    'projects.count.many': 'proyectos',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (
    key: string,
    options?: { [key: string]: string | number }
  ): string => {
    const langTranslations = translations[language] as Record<string, string>;
    const fallback = translations['en'] as Record<string, string>;
    let translation = langTranslations[key] || fallback[key] || key;

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
