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
    'nav.certifications': 'Certifications',
    'nav.languages': 'Languages',
    'nav.contact': 'Contact',
    
    // SEO
    'seo.title': 'Josias Batista | Blockchain Developer & Protocol Engineer',
    'seo.description': 'Portfolio of Josias Batista — Blockchain Developer & Protocol Engineer specializing in Solidity, Rust, Smart Contracts, Stellar (Soroban), Ethereum (EVM), Foundry, TypeScript, and DeFi.',
    
    // Hero
    'hero.roleBadge': 'Web 3.0 Resident Developer @ iRede',
    'hero.title': 'Blockchain Developer & Protocol Engineer',
    'hero.subtitle': 'Blockchain Developer | Protocol Engineer | Solidity | Rust | Smart Contracts | Stellar | Ethereum | EVM | Foundry | TypeScript | DeFi',
    'hero.location': 'Quixadá - Ceará, Brazil',
    'hero.cta': 'View Projects',
    'hero.contact': 'Contact Me',
    'hero.downloadCV': 'Download CV',
    
    // About
    'about.title': 'About Me',
    'about.summary': 'My technical journey began between 2019 and 2021 with the IT Technical Course at EEEP Dr. Salomão Alves de Moura (Aracoiaba - Ceará, Brazil), graduating with a 9.67/10.0 GPA in technical subjects. I built strong foundations in programming logic, web development (HTML/CSS, JS, PHP, MySQL), OOP with Java, networking infrastructure, computer architecture, and robotics.\n\nIn 2022, I entered the Software Engineering Bachelor\'s program at the Federal University of Ceará (UFC Quixadá Campus). My academic training covers the complete software development lifecycle for complex systems, focusing on requirements engineering, system architecture, software testing (QA), configuration management, academic tutoring, and active hackathon participation.\n\nCurrently, I combine event-driven microservices (Java/Spring Boot) with deterministic EVM smart contracts (Solidity/Foundry) and Stellar (Soroban/Rust). I serve as a Web 3.0 Resident Developer at iRede and am open to high-performance backend and blockchain protocol engineering roles.',
    'about.bento.backend': 'Backend & APIs',
    'about.bento.backend_desc': 'Scalable architectures with Java, Spring Boot, Node.js, and NestJS.',
    'about.bento.web3': 'Web3 & Blockchain',
    'about.bento.web3_desc': 'Smart Contracts (Solidity/EVM), DeFi primitives, and Oracles.',
    'about.bento.frontend': 'Modern Frontend',
    'about.bento.frontend_desc': 'Interactive UIs using React, Next.js, and TypeScript.',
    'about.bento.database': 'Data & Architecture',
    'about.bento.database_desc': 'PostgreSQL, Prisma ORM, database modeling, and CI/CD pipelines.',

    // GitHub Stats
    'github.title': 'GitHub Activity',
    'github.subtitle': 'Real-time data from the GitHub API.',
    'github.fallback': 'Estimated data — live data loading...',
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

    'experience.irede.role': 'Web 3.0 Resident Developer',
    'experience.irede.company': 'iRede',
    'experience.irede.period': 'July 2026 - Present',
    'experience.irede.desc1': 'Designed and implemented secure smart contracts in Solidity (EVM compatible), developing tokens in ERC-20, ERC-721, and ERC-1155 standards for real-world traceability scenarios.',
    'experience.irede.desc2': 'Structured on-chain and off-chain integrations using oracles and external APIs, ensuring data integrity in communication with decentralized applications.',
    'experience.irede.desc3': 'Selected in the National Top 8 (among 70 vacancies) to integrate this innovation hub, working directly on cryptography and decentralized network architecture challenges.',
    'experience.irede.tech': 'Solidity, EVM, Foundry, Ethereum, ERC-20, ERC-721, ERC-1155, Smart Contracts, Oracles, Web3, Metaverse',

    'experience.ideedutec.role': 'Software Developer',
    'experience.ideedutec.company': 'iDEEDUTEC',
    'experience.ideedutec.period': 'April 2026 - July 2026',
    'experience.ideedutec.desc1': 'Remodeled API contracts and data architecture using PostgreSQL and Prisma ORM, optimizing queries and ensuring transactional consistency in the backend.',
    'experience.ideedutec.desc2': 'Led the refactoring of critical application routes, migrating complex processing logic to the server-side (Nest.js), drastically reducing API latency.',
    'experience.ideedutec.desc3': 'Implemented containerized development workflows with Docker, standardizing environments and reducing integration failures in the CI/CD cycle.',
    'experience.ideedutec.tech': 'PostgreSQL, Prisma ORM, Nest.js, Docker, CI/CD, REST APIs, TypeScript',

    'experience.monitor.role': 'Software Development Academic Monitor (Web & Mobile)',
    'experience.monitor.company': 'Federal University of Ceará (UFC)',
    'experience.monitor.period': 'March 2026 - July 2026',
    'experience.monitor.desc1': 'Technical support for undergraduate students in Full Stack and Mobile application development, including software architecture best practices, SOLID principles, and code organization.',
    'experience.monitor.desc2': 'Conducted Code Reviews and debugging support, reinforcing code quality and maintainability—competencies applicable to any stack, including Java backend and smart contract development (where rigorous code review is critical).',
    'experience.monitor.desc3': 'Disseminated version control best practices with Git/GitHub and collaborative workflows, as well as developing educational materials and technical workshops.',
    'experience.monitor.tech': 'Java, SOLID, Code Review, Debugging, Git/GitHub, React, Node.js, Mobile',

    'experience.brazil.role': 'Junior Front-End Developer',
    'experience.brazil.company': 'Brasil Cursinhos',
    'experience.brazil.period': 'February 2025 - February 2026',
    'experience.brazil.desc1': 'Implemented reusable components with React and TypeScript, with structured consumption of RESTful APIs—direct practice with API contracts, error handling, and client-server integration.',
    'experience.brazil.desc2': 'Developed interfaces focused on UX and loading performance.',
    'experience.brazil.desc3': 'Collaborated in defining technical solutions for platform scalability, including discussions on data structures and endpoint organization.',
    'experience.brazil.tech': 'React, TypeScript, REST APIs, HTML, CSS, Next.js, UX',

    'experience.switchpay.role': 'Junior Full Stack Developer',
    'experience.switchpay.company': 'SwitchPay',
    'experience.switchpay.period': 'October 2025 - December 2025',
    'experience.switchpay.desc1': 'Developed and integrated RESTful APIs to support high-criticality financial dashboards, ensuring millimeter precision in sensitive data traffic.',
    'experience.switchpay.desc2': 'Worked on sustaining and evolving backend infrastructure, applying Clean Code principles and layered architecture for platform scalability.',
    'experience.switchpay.tech': 'Node.js, React.js, Express.js, MySQL, TypeORM, TypeScript, Docker, Java',

    'experience.lucrei.role': 'IT Intern',
    'experience.lucrei.company': 'Lucrei',
    'experience.lucrei.period': 'September 2021 - December 2021',
    'experience.lucrei.desc1': 'Execution of rigorous manual testing in a production environment with structured documentation of non-conformities—initial QA baseline and detail orientation for technical rigor.',
    'experience.lucrei.desc2': 'Technical mentoring of students in programming logic and web tools.',
    'experience.lucrei.tech': 'QA, Manual Testing, Web Tools, Technical Mentoring',
    
    // Projects
    'projects.title': 'Featured Projects',
    'projects.viewCode': 'View Code',
    'projects.viewDemo': 'Live Demo',
    'projects.showAll': 'View All Projects ({count})',
    'projects.showLess': 'Show Featured Projects',

    'projects.filters.all': 'All',
    'projects.filters.backend': 'Back-End',
    'projects.filters.web3': 'Web3',
    'projects.filters.java': 'Java',
    'projects.filters.python': 'Python',
    'projects.filters.rust': 'Rust',
    'projects.filters.dotnet': '.NET',

    'projects.coinconut.title': 'COINCONUT — ImpactLedger on Stellar',
    'projects.coinconut.desc': 'Decentralized impact ledger on Stellar (Soroban smart contracts in Rust) certifying coconut husk reverse logistics into ESG Soulbound NFTs, Zero-Knowledge Privacy proofs (Noir), and automated PIX off-ramp via Stellar Anchors.',

    'projects.elociv.title': 'EloCiv — Youth Civic Engagement',
    'projects.elociv.desc': 'Decentralized Web3 platform for UNICEF Youth Challenge 2026 anchoring W3C Verifiable Credentials for youth civic engagement onto Stellar Soroban smart contracts (elociv-registry), featuring a portable civic wallet and geolocalized SDG mapping.',

    'projects.tutorcrypto.title': 'Crypto & Web3 AI Tutor Agent',
    'projects.tutorcrypto.desc': 'Adaptive AI Tutor Agent for Web3, DeFi, and Blockchain using RAG (Retrieval-Augmented Generation) with local LLMs (Llama 3.1 & Ollama) for complete data privacy. Research thesis project at UFC.',

    'projects.relatorioaniversariantes.title': 'Automated Birthday Reports Scraper',
    'projects.relatorioaniversariantes.desc': 'Automated web scraping and reporting API built with Java 17, Spring Boot, Headless Selenium, and OpenPDF to extract ERP member data, format consolidated PDF reports, and automatically dispatch via WhatsApp (Evolution API).',

    'projects.chainmed.title': 'ChainMed',
    'projects.chainmed.desc': 'ChainMed revolutionizes the way doctors prescribe and patients manage their medications, all with the security and immutability of blockchain technology.',


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
    'hackathons.pulso.desc': 'Decentralized impact ledger for reverse logistics of coconut waste built on Stellar Soroban with Zero-Knowledge proofs (Noir), ESG Soulbound NFTs, and PIX off-ramp.',
    'hackathons.pulso.award': 'PULSO Hackathon (Stellar Network)',
    'hackathons.unicef.desc': 'Decentralized W3C Verifiable Credentials platform on Stellar Soroban (UNICEF Youth Challenge 2026 by UNICEF Brasil, Blockchain for Children Coalition, and Blockchain.RIO) for anchoring youth civic engagement history with Privacy-by-Design and SDG mapping.',
    'hackathons.unicef.award': 'UNICEF Youth Challenge 2026 (UNICEF Brasil)',
    'hackathons.meridian.desc': 'Modern BNPL (Buy Now, Pay Later) platform built on the Stellar blockchain. Enables instant settlement for merchants and transparent interest-free installment plans.',
    'hackathons.meridian.award': 'Competitor (Prize Pool: US$50k)',
    'hackathons.sui.desc': 'AI agent specialized in DeFi strategies, acting as an on-chain analyst. Identifies and simulates efficient combinations of lending, staking, and swaps on the SUI network.',
    'hackathons.xrpl.desc': 'Personalized digital tutor integrated with an LLM chatbot designed to guide users intuitively within the XRP Ledger ecosystem.',
    'hackathons.xrpl.award': '3rd Place - Web 3 Track',
    
    // Education
    'education.badge': 'Engineering & Technology',
    'education.title': 'Academic Education',
    'education.subtitle': 'Solid background in Software Engineering at the Federal University of Ceará and technical IT foundation.',
    'education.degree': 'Bachelor\'s Degree in Software Engineering',
    'education.degree.period': '2022 — 2027',
    'education.degree.location': 'Quixadá, Ceará, Brazil',
    'education.degree.shortDesc': 'Bachelor\'s degree focused on requirements engineering, microservices architecture, software quality (QA), testing, and high-performance computing systems development.',
    'education.university': 'Federal University of Ceará - UFC',
    'education.graduation': '2022 - Expected: December 2027',
    'education.university.desc': 'Bachelor\'s in Software Engineering focusing on the entire lifecycle of complex, reliable, and high-quality computational systems. Preparing professionals for local and global tech markets.',
    'education.technical': 'Intermediate Level Technical Course in Computer Science',
    'education.technical.period': '2019 — 2021',
    'education.technical.location': 'Aracoiaba, Ceará, Brazil',
    'education.technical.shortDesc': 'Solid technical background in programming logic, web development (HTML/CSS, JS, PHP, Java), databases (MySQL), and computer networking. Technical GPA: 9.67/10.0.',
    'education.cyfrin.title': 'Cyfrin Updraft - Smart Contract Development',
    'education.cyfrin.type': 'Free Course',
    'education.cyfrin.date': 'July 2026 – Present',
    'education.cyfrin.desc': 'Complete training on the Cyfrin Updraft Web3 education platform, focused on Blockchain and Smart Contract development.',
    'education.certifications.title': 'Certifications & Credentials',
    'education.languages': 'Languages',
    'education.portuguese': 'Portuguese',
    'education.english': 'English',
    'education.spanish': 'Spanish',

    // Certifications Section
    'certifications.viewCredential': 'View Credential',
    'certifications.irede.title': 'Web 3.0 Technology Training',
    'certifications.agentic.title': 'Founding Partner Certificate — Agentic Space',
    'certifications.agentic.issuer': 'Raport Tecnologia Inova Simples',
    'certifications.cyfrin.title': 'Cyfrin Updraft - Smart Contract Development',
    'certifications.awsrestart.title': 'AWS re/Start Graduate',
    'certifications.sui.title': 'Sui Developer Workshop Certificate',
    'certifications.awsacademy.title': 'AWS Academy Graduate - AWS Academy Cloud Foundations',
    'certifications.microsoft.title': 'Hack Together: AI Agents Hackathon',
    'certifications.web3edu.title': 'Masterclass: Getting Started in Web3',
    'certifications.web3edu.issuer': 'Web3EduBrasil Institute',
    'certifications.alura.title': 'Back-End Dev Immersion',
    'certifications.utah.title': 'STRONGER 8.0 - Linux LPI Battalion - 010-160',

    // Languages Section
    'languages.badge': 'Global Communication',
    'languages.title': 'Languages & Proficiencies',
    'languages.subtitle': 'Language proficiency for international teams, global Web3 ecosystems, and distributed software engineering.',
    'languages.pt.level': 'Native',
    'languages.pt.desc': 'Native written and verbal communication for technical leadership, documentation, and collaboration.',
    'languages.en.level': 'Intermediate (B1)',
    'languages.en.desc': 'Technical reading of whitepapers, smart contract authoring, global meetings, and documentation in English.',
    'languages.es.level': 'Intermediate (B1)',
    'languages.es.desc': 'Fluent communication for technical collaboration and projects with Latin American and Spanish teams.',
    'languages.card.ready': 'Ready for remote and international teams',
    
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
    'footer.rights': 'All rights reserved.',
    'footer.backToTop': 'Back to top',
  },
  pt: {
    // Navigation
    'nav.about': 'Sobre',
    'nav.skills': 'Habilidades',
    'nav.experience': 'Experiência',
    'nav.projects': 'Projetos',
    'nav.hackathons': 'Hackathons',
    'nav.education': 'Formação',
    'nav.certifications': 'Certificações',
    'nav.languages': 'Idiomas',
    'nav.contact': 'Contato',
    
    // Web3
    'web3.connect': 'Conectar Web3',
    'web3.disconnect': 'Desconectar',
    'web3.secret.title': 'Acesso Concedido',
    'web3.secret.desc': 'Bem-vindo ao setor descentralizado. Sua identidade foi verificada na blockchain.',
    'web3.secret.install': 'Por favor, instale a MetaMask para conectar.',
    
    // SEO
    'seo.title': 'Josias Batista | Desenvolvedor Blockchain & Engenheiro de Protocolos',
    'seo.description': 'Portfólio de Josias Batista — Desenvolvedor Blockchain & Engenheiro de Protocolos especializado em Solidity, Rust, Smart Contracts, Stellar (Soroban), Ethereum (EVM), Foundry, TypeScript e DeFi.',

    // Hero
    'hero.roleBadge': 'Desenvolvedor Residente em Web 3.0 no iRede',
    'hero.title': 'Desenvolvedor Blockchain & Engenheiro de Protocolos',
    'hero.subtitle': 'Desenvolvedor Blockchain | Engenheiro de Protocolos | Solidity | Rust | Smart Contracts | Stellar | Ethereum | EVM | Foundry | TypeScript | DeFi',
    'hero.location': 'Quixadá - Ceará, Brasil',
    'hero.cta': 'Ver Projetos',
    'hero.contact': 'Entre em Contato',
    'hero.downloadCV': 'Baixar Currículo',
    
    // About
    'about.title': 'Sobre Mim',
    'about.summary': 'Minha jornada técnica começou entre 2019 e 2021 no Curso Técnico em Informática integrado ao Ensino Médio da EEEP Dr. Salomão Alves de Moura (Aracoiaba - Ceará), onde conquistei média de 9,67/10,0 nas disciplinas técnicas. Desenvolvi bases sólidas em lógica de programação, desenvolvimento web (HTML/CSS, JS, PHP, MySQL), POO em Java, infraestrutura de redes, arquitetura de computadores e robótica.\n\nEm 2022, ingressei no Bacharelado em Engenharia de Software na Universidade Federal do Ceará (UFC - Campus Quixadá). Minha formação acadêmica abrange todo o ciclo de vida de sistemas computacionais complexos, com foco em engenharia e arquitetura de requisitos, testes de software (QA), gerência de configuração e atuação como Monitor Acadêmico, além da participação ativa em hackathons e comunidades de tecnologia.\n\nAtualmente, uno a robustez de microsserviços e sistemas orientados a eventos (Java/Spring Boot) à criação de Smart Contracts determinísticos na EVM (Solidity/Foundry) e Stellar (Soroban/Rust). Atuo como Desenvolvedor Residente em Web 3.0 no Instituto iRede e estou aberto a oportunidades em backend de alta performance e engenharia de protocolos blockchain.',
    'about.bento.backend': 'Backend & APIs',
    'about.bento.backend_desc': 'Arquiteturas escaláveis com Java, Spring Boot, Node.js e NestJS.',
    'about.bento.web3': 'Web3 & Blockchain',
    'about.bento.web3_desc': 'Smart Contracts (Solidity/EVM), primitivas DeFi e Oráculos.',
    'about.bento.frontend': 'Frontend Moderno',
    'about.bento.frontend_desc': 'Interfaces interativas com React, Next.js e TypeScript.',
    'about.bento.database': 'Dados & Arquitetura',
    'about.bento.database_desc': 'PostgreSQL, Prisma ORM, modelagem de dados e pipelines CI/CD.',

    // GitHub Stats
    'github.title': 'Atividade no GitHub',
    'github.subtitle': 'Dados em tempo real via API do GitHub.',
    'github.fallback': 'Dados estimados — carregando dados ao vivo...',
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

    'experience.irede.role': 'Desenvolvedor Residente em Web 3.0',
    'experience.irede.company': 'iRede',
    'experience.irede.period': 'Julho 2026 - Presente',
    'experience.irede.desc1': 'Projetei e implementei smart contracts seguros em Solidity (compatíveis com EVM), desenvolvendo tokens nos padrões ERC-20, ERC-721 e ERC-1155 para cenários reais de rastreabilidade.',
    'experience.irede.desc2': 'Estruturei integrações on-chain e off-chain utilizando oráculos e APIs externas, garantindo a integridade dos dados na comunicação com aplicações descentralizadas.',
    'experience.irede.desc3': 'Fui selecionado no Top 8 nacional (entre 70 vagas) para integrar este hub de inovação, atuando diretamente em desafios de criptografia e arquitetura de redes descentralizadas.',
    'experience.irede.tech': 'Solidity, EVM, Foundry, Ethereum, ERC-20, ERC-721, ERC-1155, Smart Contracts, Oráculos, Web3, Metaverso',

    'experience.ideedutec.role': 'Desenvolvedor de Software',
    'experience.ideedutec.company': 'iDEEDUTEC',
    'experience.ideedutec.period': 'Abril 2026 - Julho 2026',
    'experience.ideedutec.desc1': 'Remodelei contratos de API e a arquitetura de dados utilizando PostgreSQL e Prisma ORM, otimizando queries e garantindo consistência transacional no backend.',
    'experience.ideedutec.desc2': 'Liderei a refatoração de rotas críticas da aplicação, migrando lógicas complexas de processamento para o server-side (Nest.js), reduzindo drasticamente a latência da API.',
    'experience.ideedutec.desc3': 'Implementei fluxos de desenvolvimento conteinerizados com Docker, padronizando os ambientes e reduzindo falhas de integração no ciclo de CI/CD.',
    'experience.ideedutec.tech': 'PostgreSQL, Prisma ORM, Nest.js, Docker, CI/CD, APIs REST, TypeScript',

    'experience.monitor.role': 'Monitor de Desenvolvimento de Software (Web e Mobile)',
    'experience.monitor.company': 'Universidade Federal do Ceará (UFC)',
    'experience.monitor.period': 'Março 2026 - Julho 2026',
    'experience.monitor.desc1': 'Suporte técnico a alunos de graduação no desenvolvimento de aplicações Full Stack e Mobile, incluindo boas práticas de arquitetura de software, princípios SOLID e organização de código.',
    'experience.monitor.desc2': 'Realização de Code Reviews e apoio na depuração (debugging), reforçando qualidade de código e manutenibilidade competências aplicáveis a qualquer stack, incluindo backend Java e desenvolvimento de smart contracts (onde revisão criteriosa de código é crítica).',
    'experience.monitor.desc3': 'Disseminação de boas práticas de versionamento com Git/GitHub e fluxos colaborativos, bem como elaboração de materiais didáticos e oficinas técnicas.',
    'experience.monitor.tech': 'Java, SOLID, Code Review, Debugging, Git/GitHub, React, Node.js, Mobile',

    'experience.brazil.role': 'Desenvolvedor Front-End Júnior',
    'experience.brazil.company': 'Brasil Cursinhos',
    'experience.brazil.period': 'Fevereiro 2025 - Fevereiro 2026',
    'experience.brazil.desc1': 'Implementação de componentes reutilizáveis com React e TypeScript, com consumo estruturado de APIs RESTful - prática direta com contratos de API, tratamento de erros e integração cliente-servidor.',
    'experience.brazil.desc2': 'Desenvolvimento de interfaces com foco em UX e performance de carregamento.',
    'experience.brazil.desc3': 'Colaboração na definição de soluções técnicas para escalabilidade da plataforma, incluindo discussões sobre estrutura de dados e organização de endpoints.',
    'experience.brazil.tech': 'React, TypeScript, APIs REST, HTML, CSS, Next.js, UX',

    'experience.switchpay.role': 'Desenvolvedor Full Stack Júnior',
    'experience.switchpay.company': 'SwitchPay',
    'experience.switchpay.period': 'Outubro 2025 - Dezembro 2025',
    'experience.switchpay.desc1': 'Desenvolvi e integrei APIs RESTful para dar suporte a dashboards financeiros de alta criticidade, garantindo precisão milimétrica no tráfego de dados sensíveis.',
    'experience.switchpay.desc2': 'Atuei na sustentação e evolução da infraestrutura backend, aplicando princípios de Clean Code e arquitetura em camadas para facilitar a escalabilidade da plataforma.',
    'experience.switchpay.tech': 'Node.js, React.js, Express.js, MySQL, TypeORM, TypeScript, Docker, Java',

    'experience.lucrei.role': 'Estagiário de TI',
    'experience.lucrei.company': 'Lucrei',
    'experience.lucrei.period': 'Setembro 2021 - Dezembro 2021',
    'experience.lucrei.desc1': 'Execução de testes manuais rigorosos em ambiente de produção, com documentação estruturada de inconformidades - base inicial em processos de QA e atenção a detalhes, relevante para qualquer área que exija rigor técnico (incluindo auditoria de contratos inteligentes).',
    'experience.lucrei.desc2': 'Mentoria técnica de alunos em lógica de programação e ferramentas web.',
    'experience.lucrei.tech': 'QA, Testes Manuais, Ferramentas Web, Mentoria Técnica',
    
    // Projects
    'projects.title': 'Projetos em Destaque',
    'projects.viewCode': 'Ver Código',
    'projects.viewDemo': 'Demo ao Vivo',
    'projects.showAll': 'Ver Todos os Projetos ({count})',
    'projects.showLess': 'Mostrar Apenas Destaques',

    'projects.filters.all': 'Todos',
    'projects.filters.fullstack': 'Full Stack',
    'projects.filters.backend': 'Back-End',
    'projects.filters.web3': 'Web3',
    'projects.filters.java': 'Java',
    'projects.filters.python': 'Python',
    'projects.filters.rust': 'Rust',
    'projects.filters.dotnet': '.NET',

    'projects.coinconut.title': 'COINCONUT — ImpactLedger na Stellar',
    'projects.coinconut.desc': 'Plataforma de ledger de impacto descentralizada na Stellar (Smart Contracts Soroban em Rust) certificando a logística reversa e reciclagem de cascas de coco em NFTs ESG Soulbound, provas ZK (Noir) e liquidação PIX via Stellar Anchors.',

    'projects.elociv.title': 'EloCiv — O Elo da Cidadania Jovem',
    'projects.elociv.desc': 'Solução descentralizada Web3 criada para o UNICEF Youth Challenge 2026 para ancoragem de Credenciais Verificáveis W3C do engajamento cívico jovem em Smart Contracts Soroban (Stellar), carteira cívica portátil e mapeamento de ODS.',

    'projects.tutorcrypto.title': 'Agente de IA: Tutor Web3 & Blockchain',
    'projects.tutorcrypto.desc': 'Agente de Inteligência Artificial para tutoria educacional adaptativa em Web3, DeFi e Blockchain utilizando RAG com LLMs locais (Llama 3.1 & Ollama) e FastAPI/Streamlit. Fruto da pesquisa de TCC na UFC.',

    'projects.relatorioaniversariantes.title': 'Relatório de Aniversariantes Automatizado',
    'projects.relatorioaniversariantes.desc': 'Ferramenta de automação e Web Scraping em Java 17 e Spring Boot (Selenium Headless e OpenPDF) para extração de dados de ERP de gestão de membros e geração/disparo automático de relatórios em PDF via WhatsApp API.',

    'projects.chainmed.title': 'ChainMed',
    'projects.chainmed.desc': 'O ChainMed revoluciona a forma como médicos prescrevem e pacientes gerenciam seus medicamentos, tudo com a segurança e imutabilidade da tecnologia blockchain.',


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
    'hackathons.pulso.desc': 'Plataforma de ledger de impacto descentralizada na Stellar (Smart Contracts Soroban em Rust) certificando a logística reversa de cascas de coco em NFTs ESG Soulbound, provas ZK (Noir) e liquidação PIX.',
    'hackathons.pulso.award': 'PULSO Hackathon (Stellar Network)',
    'hackathons.unicef.desc': 'Plataforma descentralizada de Credenciais Verificáveis W3C na Stellar Soroban (UNICEF Youth Challenge 2026 realizado por UNICEF Brasil, Coalizão Blockchain for Children e Blockchain.RIO) para ancoragem da trajetória cívica jovem com Privacy-by-Design e mapa de ODS.',
    'hackathons.unicef.award': 'UNICEF Youth Challenge 2026 (UNICEF Brasil)',
    'hackathons.meridian.desc': 'Plataforma moderna de BNPL (Buy Now, Pay Later) construída na blockchain Stellar. Permite liquidação instantânea para comerciantes e planos de parcelamento transparentes sem juros.',
    'hackathons.meridian.award': 'Competidor (Prize Pool: US$50k)',
    'hackathons.sui.desc': 'Agente de IA especializado em estratégias DeFi, atuando como analista on-chain. Identifica e simula combinações eficientes de lending, staking e swaps na rede SUI.',
    'hackathons.xrpl.desc': 'Tutor digital personalizado integrado a um chatbot LLM projetado para guiar usuários intuitivamente dentro do ecossistema XRP Ledger.',
    'hackathons.xrpl.award': '3º Lugar - Trilha Web 3',

    // Education
    'education.badge': 'Engenharia & Tecnologia',
    'education.title': 'Formação Acadêmica',
    'education.subtitle': 'Formação sólida em Engenharia de Software na Universidade Federal do Ceará e base técnica em TI.',
    'education.degree': 'Bacharelado em Engenharia de Software',
    'education.degree.period': '2022 — 2027',
    'education.degree.location': 'Quixadá, Ceará, Brasil',
    'education.degree.shortDesc': 'Bacharelado focado em engenharia de requisitos, arquitetura de microsserviços, qualidade de software (QA), testes e desenvolvimento de sistemas computacionais de alta performance.',
    'education.university': 'Universidade Federal do Ceará - UFC',
    'education.graduation': 'mar de 2022 - dez de 2027',
    'education.university.desc': 'Bacharelado em Engenharia de Software pela Universidade Federal do Ceará (UFC) - Campus Quixadá. Formação focada em todo o ciclo de vida do desenvolvimento de sistemas computacionais complexos, confiáveis e de alta qualidade.',
    'education.technical': 'Curso Técnico em Informática',
    'education.technical.period': '2019 — 2021',
    'education.technical.location': 'Aracoiaba, Ceará, Brasil',
    'education.technical.shortDesc': 'Formação técnica sólida em lógica de programação, desenvolvimento web (HTML/CSS, JS, PHP, Java), banco de dados (MySQL) e redes de computadores. Média técnica: 9.67/10.0.',
    'education.cyfrin.title': 'Cyfrin Updraft - Smart Contract Development',
    'education.cyfrin.type': 'Curso Livre',
    'education.cyfrin.date': 'Julho de 2026 – o momento',
    'education.cyfrin.desc': 'Formação completa na plataforma de educação Web3 da Cyfrin Updraft, com foco em desenvolvimento de Blockchain e Smart Contracts.',
    'education.certifications.title': 'Certificações & Licenças',

    // Certifications Section
    'certifications.viewCredential': 'Ver Credencial',
    'certifications.irede.title': 'Capacitação Tecnológica em Web 3.0',
    'certifications.agentic.title': 'Certificado de Sócio Fundador — Agentic Space',
    'certifications.agentic.issuer': 'Raport Tecnologia Inova Simples',
    'certifications.cyfrin.title': 'Cyfrin Updraft - Smart Contract Development',
    'certifications.awsrestart.title': 'AWS re/Start Graduate',
    'certifications.sui.title': 'Workshop Certificate como Sui Developer',
    'certifications.awsacademy.title': 'AWS Academy Graduate - AWS Academy Cloud Foundations',
    'certifications.microsoft.title': 'Hack Together: AI Agents Hackathon',
    'certifications.web3edu.title': 'Aulão: Comece na Web3',
    'certifications.web3edu.issuer': 'Instituto Web3EduBrasil',
    'certifications.alura.title': 'Imersão Dev Back-End',
    'certifications.utah.title': 'STRONGER 8.0 - Batalhão Linux LPI - 010-160',
    'education.languages': 'Idiomas',
    'education.portuguese': 'Português',
    'education.english': 'Inglês',
    'education.spanish': 'Espanhol',

    // Languages Section
    'languages.badge': 'Comunicação Global',
    'languages.title': 'Idiomas & Proficiência',
    'languages.subtitle': 'Proficiência idiomática para atuação em equipes internacionais, ecossistemas Web3 globais e engenharia de software distribuída.',
    'languages.pt.level': 'Nativo',
    'languages.pt.desc': 'Comunicação escrita e verbal nativa para liderança técnica, redação de documentações e colaboração.',
    'languages.en.level': 'Intermediário (B1)',
    'languages.en.desc': 'Leitura técnica de whitepapers, escrita de smart contracts, reuniões globais e documentações em inglês.',
    'languages.es.level': 'Intermediário (B1)',
    'languages.es.desc': 'Comunicação fluida para colaboração técnica e projetos com equipes da América Latina e Espanha.',
    'languages.card.ready': 'Pronto para times remotos e internacionais',
    
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
    'footer.rights': 'Todos os direitos reservados.',
    'footer.backToTop': 'Voltar ao topo',
  },
  es: {
    // Navigation
    'nav.about': 'Sobre mí',
    'nav.skills': 'Habilidades',
    'nav.experience': 'Experiencia',
    'nav.projects': 'Proyectos',
    'nav.hackathons': 'Hackatones',
    'nav.education': 'Formación',
    'nav.certifications': 'Certificaciones',
    'nav.languages': 'Idiomas',
    'nav.contact': 'Contacto',

    // Web3
    'web3.connect': 'Conectar Web3',
    'web3.disconnect': 'Desconectar',
    'web3.secret.title': 'Acceso Concedido',
    'web3.secret.install': 'Por favor, instale MetaMask para conectarse.',

    // SEO
    'seo.title': 'Josias Batista | Desarrollador Blockchain & Ingeniero de Protocolos',
    'seo.description': 'Portafolio de Josias Batista — Desarrollador Blockchain & Ingeniero de Protocolos especializado en Solidity, Rust, Smart Contracts, Stellar (Soroban), Ethereum (EVM), Foundry, TypeScript y DeFi.',

    // Hero
    'hero.roleBadge': 'Desarrollador Residente Web 3.0 en iRede',
    'hero.title': 'Desarrollador Blockchain e Ingeniero de Protocolos',
    'hero.subtitle': 'Desarrollador Blockchain | Ingeniero de Protocolos | Solidity | Rust | Smart Contracts | Stellar | Ethereum | EVM | Foundry | TypeScript | DeFi',
    'hero.location': 'Quixadá - Ceará, Brasil',
    'hero.cta': 'Ver Proyectos',
    'hero.contact': 'Contáctame',
    'hero.downloadCV': 'Descargar CV',

    // About
    'about.summary': 'Mi trayectoria técnica comenzó entre 2019 y 2021 con el Curso Técnico en Informática en EEEP Dr. Salomão Alves de Moura (Aracoiaba - Ceará, Brasil), obteniendo un promedio de 9.67/10.0 en materias técnicas. Construí bases sólidas en lógica de programación, desarrollo web (HTML/CSS, JS, PHP, MySQL), POO en Java, infraestructura de redes y robótica.\n\nEn 2022, ingresé a la Licenciatura en Ingeniería de Software en la Universidad Federal de Ceará (UFC - Campus Quixadá). Mi formación abarca todo el ciclo de vida de sistemas computacionales complejos, con foco en arquitectura de requisitos, pruebas de software (QA), gestión de proyectos y tutoría académica.\n\nActualmente, combino la solidez de microservicios (Java/Spring Boot) con el desarrollo de Smart Contracts deterministas en EVM (Solidity/Foundry) y Stellar (Soroban/Rust). Me desempeño como Desarrollador Residente en Web 3.0 en iRede y estoy abierto a oportunidades en backend y protocolos blockchain.',
    'about.bento.backend': 'Backend & APIs',
    'about.bento.backend_desc': 'Arquitecturas escalables con Java, Spring Boot, Node.js y NestJS.',
    'about.bento.web3': 'Web3 & Blockchain',
    'about.bento.web3_desc': 'Smart Contracts (Solidity/EVM), primitivas DeFi y Oráculos.',
    'about.bento.frontend': 'Frontend Moderno',
    'about.bento.frontend_desc': 'Interfaces interactivas con React, Next.js y TypeScript.',
    'about.bento.database': 'Datos y Arquitectura',
    'about.bento.database_desc': 'PostgreSQL, Prisma ORM, modelado de datos y pipelines CI/CD.',

    // GitHub Stats
    'github.title': 'Actividad en GitHub',
    'github.subtitle': 'Datos en tiempo real desde la API de GitHub.',
    'github.fallback': 'Datos estimados — cargando datos en vivo...',
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

    'experience.irede.role': 'Desarrollador Residente en Web 3.0',
    'experience.irede.company': 'iRede',
    'experience.irede.period': 'Julio 2026 - Presente',
    'experience.irede.desc1': 'Diseñé e implementé smart contracts seguros en Solidity (compatibles con EVM), desarrollando tokens en los estándares ERC-20, ERC-721 y ERC-1155 para escenarios reales de trazabilidad.',
    'experience.irede.desc2': 'Estructuré integraciones on-chain y off-chain utilizando oráculos y APIs externas, garantizando la integridad de los datos en la comunicación con aplicaciones descentralizadas.',
    'experience.irede.desc3': 'Seleccionado en el Top 8 nacional (entre 70 vacantes) para integrar este hub de innovación, trabajando directamente en desafíos de criptografía y arquitectura de redes descentralizadas.',
    'experience.irede.tech': 'Solidity, EVM, Foundry, Ethereum, ERC-20, ERC-721, ERC-1155, Smart Contracts, Oráculos, Web3, Metaverso',

    'experience.ideedutec.role': 'Desarrollador de Software',
    'experience.ideedutec.company': 'iDEEDUTEC',
    'experience.ideedutec.period': 'Abril 2026 - Julio 2026',
    'experience.ideedutec.desc1': 'Remodelé contratos de API y la arquitectura de datos utilizando PostgreSQL y Prisma ORM, optimizando consultas y garantizando consistencia transaccional en el backend.',
    'experience.ideedutec.desc2': 'Lideré la refactorización de rutas críticas de la aplicación, migrando lógicas complejas de procesamiento al server-side (Nest.js), reduciendo drásticamente la latencia de la API.',
    'experience.ideedutec.desc3': 'Implementé flujos de desarrollo contenedorizados con Docker, estandarizando ambientes y reduciendo fallas de integración en el ciclo de CI/CD.',
    'experience.ideedutec.tech': 'PostgreSQL, Prisma ORM, Nest.js, Docker, CI/CD, APIs REST, TypeScript',

    'experience.monitor.role': 'Monitor de Desarrollo de Software (Web y Mobile)',
    'experience.monitor.company': 'Universidad Federal de Ceará (UFC)',
    'experience.monitor.period': 'Marzo 2026 - Julio 2026',
    'experience.monitor.desc1': 'Soporte técnico a estudiantes de grado en el desarrollo de aplicaciones Full Stack y Mobile, incluyendo buenas prácticas de arquitectura de software, principios SOLID y organización de código.',
    'experience.monitor.desc2': 'Realización de Code Reviews y apoyo en depuración (debugging), reforzando calidad de código y mantenibilidad, competencias aplicables a cualquier stack.',
    'experience.monitor.desc3': 'Diseminación de buenas prácticas de versionado con Git/GitHub y flujos colaborativos, así como elaboración de materiales didácticos y talleres técnicos.',
    'experience.monitor.tech': 'Java, SOLID, Code Review, Debugging, Git/GitHub, React, Node.js, Mobile',

    'experience.brazil.role': 'Desarrollador Front-End Junior',
    'experience.brazil.company': 'Brasil Cursinhos',
    'experience.brazil.period': 'Febrero 2025 - Febrero 2026',
    'experience.brazil.desc1': 'Implementación de componentes reutilizables con React y TypeScript, con consumo estructurado de APIs RESTful.',
    'experience.brazil.desc2': 'Desarrollo de interfaces con foco en UX y rendimiento de carga.',
    'experience.brazil.desc3': 'Colaboración en la definición de soluciones técnicas para escalabilidad de la plataforma.',
    'experience.brazil.tech': 'React, TypeScript, APIs REST, HTML, CSS, Next.js, UX',

    'experience.switchpay.role': 'Desarrollador Full Stack Junior',
    'experience.switchpay.company': 'SwitchPay',
    'experience.switchpay.period': 'Octubre 2025 - Diciembre 2025',
    'experience.switchpay.desc1': 'Desarrollé e integré APIs RESTful para dar soporte a tableros financieros de alta criticidad.',
    'experience.switchpay.desc2': 'Trabajé en la sustentación y evolución de la infraestructura backend, aplicando principios de Clean Code.',
    'experience.switchpay.tech': 'Node.js, React.js, Express.js, MySQL, TypeORM, TypeScript, Docker, Java',

    'experience.lucrei.role': 'Pasante de TI',
    'experience.lucrei.company': 'Lucrei',
    'experience.lucrei.period': 'Septiembre 2021 - Diciembre 2021',
    'experience.lucrei.desc1': 'Ejecución de pruebas manuales rigurosas en ambiente de producción con documentación estructurada de inconformidades.',
    'experience.lucrei.desc2': 'Mentoría técnica de estudiantes en lógica de programación y herramientas web.',
    'experience.lucrei.tech': 'QA, Pruebas Manuales, Herramientas Web, Mentoría Técnica',

    // Projects
    'projects.title': 'Proyectos Destacados',
    'projects.viewCode': 'Ver Código',
    'projects.viewDemo': 'Demo en Vivo',
    'projects.showAll': 'Ver Todos los Proyectos ({count})',
    'projects.showLess': 'Mostrar Solo Destacados',

    'projects.filters.all': 'Todos',
    'projects.filters.fullstack': 'Full Stack',
    'projects.filters.backend': 'Back-End',
    'projects.filters.web3': 'Web3',
    'projects.filters.java': 'Java',
    'projects.filters.python': 'Python',
    'projects.filters.rust': 'Rust',
    'projects.filters.dotnet': '.NET',

    'projects.coinconut.title': 'COINCONUT — ImpactLedger en Stellar',
    'projects.coinconut.desc': 'Plataforma de libro de impacto descentralizado en Stellar (Smart Contracts Soroban en Rust) que certifica la logística inversa de cáscaras de coco en NFTs ESG Soulbound y pruebas ZK (Noir).',

    'projects.elociv.title': 'EloCiv — Ciudadanía Juvenil Web3',
    'projects.elociv.desc': 'Plataforma Web3 para el UNICEF Youth Challenge 2026 que ancla Credenciales Verificables W3C del compromiso cívico juvenil en contratos inteligentes Soroban (Stellar).',

    'projects.tutorcrypto.title': 'Agente de IA: Tutor Web3 & Blockchain',
    'projects.tutorcrypto.desc': 'Agente de Inteligencia Artificial para tutoría educativa adaptativa en Web3, DeFi y Blockchain mediante RAG con LLMs locales (Llama 3.1 y Ollama) para privacidad total. Proyecto de tesis en UFC.',

    'projects.relatorioaniversariantes.title': 'Reportes de Cumpleaños Automatizados',
    'projects.relatorioaniversariantes.desc': 'Herramienta de automatización y Web Scraping en Java 17 y Spring Boot (Selenium Headless y OpenPDF) para extracción de datos de ERP y generación/envío de reportes PDF por WhatsApp.',

    'projects.chainmed.title': 'ChainMed',
    'projects.chainmed.desc': 'ChainMed revoluciona la forma en que los médicos prescriben y los pacientes gestionan sus medicamentos, con la seguridad e inmutabilidad de la tecnología blockchain.',


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
    'hackathons.pulso.desc': 'Plataforma de libro de impacto descentralizado en Stellar (Smart Contracts Soroban en Rust) que certifica la logística inversa de residuos de coco con pruebas Zero-Knowledge (Noir).',
    'hackathons.pulso.award': 'PULSO Hackathon (Stellar Network)',
    'hackathons.unicef.desc': 'Plataforma descentralizada de Credenciales Verificables W3C en Stellar Soroban (UNICEF Youth Challenge 2026 por UNICEF Brasil, Coalición Blockchain for Children y Blockchain.RIO) para anclar la trayectoria cívica juvenil con Privacy-by-Design.',
    'hackathons.unicef.award': 'UNICEF Youth Challenge 2026 (UNICEF Brasil)',
    'hackathons.meridian.desc': 'Moderna plataforma BNPL (Buy Now, Pay Later) construida en la blockchain de Stellar. Permite liquidación instantánea para comerciantes y planes de pago a plazos transparentes y sin intereses.',
    'hackathons.meridian.award': 'Competidor (Prize Pool: US$50k)',
    'hackathons.sui.desc': 'Agente de IA especializado en estrategias DeFi, actuando como analista on-chain. Identifica y simula combinaciones eficientes de préstamos, staking y swaps en la red SUI.',
    'hackathons.xrpl.desc': 'Tutor digital personalizado integrado a un chatbot LLM diseñado para guiar a los usuarios intuitivamente dentro del ecosistema XRP Ledger.',
    'hackathons.xrpl.award': '3er Lugar - Pista Web 3',

    // Education
    'education.badge': 'Ingeniería y Tecnología',
    'education.title': 'Formación Académica',
    'education.subtitle': 'Formación sólida en Ingeniería de Software en la Universidad Federal de Ceará y base técnica en TI.',
    'education.degree': 'Licenciatura en Ingeniería de Software',
    'education.degree.period': '2022 — 2027',
    'education.degree.location': 'Quixadá, Ceará, Brasil',
    'education.degree.shortDesc': 'Licenciatura enfocada en ingeniería de requisitos, arquitectura de microservicios, calidad de software (QA), pruebas y desarrollo de sistemas computacionales de alto rendimiento.',
    'education.university': 'Universidad Federal de Ceará - UFC',
    'education.graduation': '2022 - Previsto: Diciembre 2027',
    'education.university.desc': 'Licenciatura en Ingeniería de Software enfocada en todo el ciclo de vida del desarrollo de sistemas computacionales complejos, confiables y de alta calidad.',
    'education.technical': 'Curso Técnico en Informática',
    'education.technical.period': '2019 — 2021',
    'education.technical.location': 'Aracoiaba, Ceará, Brasil',
    'education.technical.shortDesc': 'Formación técnica sólida en lógica de programación, desarrollo web (HTML/CSS, JS, PHP, Java), bases de datos (MySQL) y redes de computadoras. Promedio técnico: 9.67/10.0.',
    'education.cyfrin.title': 'Cyfrin Updraft - Smart Contract Development',
    'education.cyfrin.type': 'Curso Libre',
    'education.cyfrin.date': 'Julio 2026 – Presente',
    'education.cyfrin.desc': 'Formación completa en la plataforma de educación Web3 de Cyfrin Updraft, enfocada en el desarrollo de Blockchain y Smart Contracts.',
    'education.certifications.title': 'Certificaciones y Licencias',

    // Certifications Section
    'certifications.viewCredential': 'Ver Credencial',
    'certifications.irede.title': 'Capacitación Tecnológica en Web 3.0',
    'certifications.agentic.title': 'Certificado de Socio Fundador — Agentic Space',
    'certifications.agentic.issuer': 'Raport Tecnologia Inova Simples',
    'certifications.cyfrin.title': 'Cyfrin Updraft - Smart Contract Development',
    'certifications.awsrestart.title': 'AWS re/Start Graduate',
    'certifications.sui.title': 'Certificado de Taller como Sui Developer',
    'certifications.awsacademy.title': 'AWS Academy Graduate - AWS Academy Cloud Foundations',
    'certifications.microsoft.title': 'Hack Together: AI Agents Hackathon',
    'certifications.web3edu.title': 'Clase Maestra: Comienza en Web3',
    'certifications.web3edu.issuer': 'Instituto Web3EduBrasil',
    'certifications.alura.title': 'Inmersión Dev Back-End',
    'certifications.utah.title': 'STRONGER 8.0 - Batallón Linux LPI - 010-160',
    'education.languages': 'Idiomas',
    'education.portuguese': 'Portugués',
    'education.english': 'Inglés',
    'education.spanish': 'Español',

    // Languages Section
    'languages.badge': 'Comunicación Global',
    'languages.title': 'Idiomas y Competencias',
    'languages.subtitle': 'Competencia lingüística para equipos internacionales, ecosistemas Web3 globales e ingeniería de software distribuida.',
    'languages.pt.level': 'Nativo',
    'languages.pt.desc': 'Comunicación escrita y verbal nativa para liderazgo técnico, documentación y colaboración.',
    'languages.en.level': 'Intermedio (B1)',
    'languages.en.desc': 'Lectura técnica de whitepapers, escritura de smart contracts, reuniones globales y documentación en inglés.',
    'languages.es.level': 'Intermedio (B1)',
    'languages.es.desc': 'Comunicación fluida para colaboración técnica y proyectos con equipos de Latinoamérica y España.',
    'languages.card.ready': 'Listo para equipos remotos e internacionales',

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
    'footer.rights': 'Todos los derechos reservados.',
    'footer.backToTop': 'Volver arriba',
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
