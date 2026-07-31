# Francisco Josias da Silva Batista — Portfólio Pessoal

## Visão Geral

Este repositório contém o código-fonte do portfólio profissional de Francisco Josias da Silva Batista, Desenvolvedor Blockchain, Engenheiro de Protocolos e Especialista em Backend Java/Spring Boot.

A aplicação apresenta trajetórias profissionais, projetos em destaque na Web3 e backend tradicional, conquistas em hackathons globais, certificações técnicas verificáveis, formação acadêmica, idiomas e formulário transacional de contato.

O projeto adota a arquitetura visual Senior Minimalist (inspirada em brittanychiang.com, leerob.io e markodenic.com): layout split-screen no desktop com barra lateral fixa e indicador dinâmico de seção ativa (seções 01 a 09), paleta enxuta em Slate escuro (`#0f172a`) com acento em Teal/Emerald (`#14b8a6`), tipografia técnica monoespaçada (Fira Code), suporte a Modo Escuro e Claro via ThemeContext, e internacionalização completa nos idiomas Português, Inglês e Espanhol com download dinâmico do currículo correspondente em PDF.

---

## Estrutura do Portfólio

O site é organizado nas seguintes seções editoriais navegáveis:

1. **Hero & Painel Lateral Fixo (Desktop)**: Seletores superiores de idioma e tema (`LanguageToggle` e `ThemeToggle`), foto de perfil ampliada, nome, cargo, resumo de atuação (Web 3.0 Resident Developer @ iRede), badges de status, botões de ação de alto contraste (Ver Projetos, Entre em Contato e Download do Currículo em PDF adaptado por idioma), links sociais e menu de navegação lateral com as 9 seções.
2. **01. Sobre Mim**: Narrativa dividida em três parágrafos cobrindo o ensino técnico com média 9,67/10,0 em Aracoiaba, o bacharelado em Engenharia de Software na UFC Quixadá e a atuação atual com microsserviços Java e Smart Contracts em Solidity (EVM) e Soroban (Stellar).
3. **02. Habilidades**: Grade com 6 categorias técnicas organizadas (Web3 & Blockchain, Back-End, Front-End, Bancos de Dados, DevOps & Cloud, Habilidades Adicionais) com badges monoespaçados.
4. **03. Experiência**: Timeline em formato grid com períodos monoespaçados à esquerda, cargo e empresa destacados, descrições objetivas e tags de tecnologias aplicadas.
5. **04. Projetos**: Cards minimalistas com bordas finas de 1px, filtros de categoria (Web3, Backend, Java, Python, Rust, .NET), contagem ao vivo de stars da API do GitHub, tags em `font-mono` e links diretos para código e demonstrações.
6. **05. Hackathons**: Registro de participações e premiações em maratonas globais (PULSO Hackathon Stellar, UNICEF Youth Challenge Blockchain 2026, Hack Meridian, SUI Hackathon, HackaLedger XRPL).
7. **06. Formação Acadêmica**: Detalhes do Bacharelado em Engenharia de Software (Universidade Federal do Ceará - UFC Campus Quixadá, 2022–2027) e do Curso Técnico em Informática (EEEP Dr. Salomão Alves de Moura em Aracoiaba - Ceará, 2019–2021).
8. **07. Certificações & Licenças**: Grade com credenciais verificáveis (iRede Web 3.0, Agentic Space Founder, Cyfrin Updraft, AWS re/Start, AWS Academy Cloud Foundations, Microsoft AI Agents, Sui Developer, Alura, Utah Linux LPI).
9. **08. Idiomas & Proficiência**: Níveis de proficiência em Português (Nativo), Inglês (Intermediário B1) e Espanhol (Intermediário B1).
10. **09. Contato & Rodapé**: Formulário transacional de mensagem, links de acesso direto (Email, LinkedIn, Telefone), copyright e atalho de retorno ao topo.

---

## Tecnologias e Arquitetura

- **Core**: React 18, Vite 5, TypeScript 5 (strict mode).
- **Estilização & Design System**: Tailwind CSS com tokens de design customizados, variáveis HSL semânticas e tipografia com Inter (sans-serif) e Fira Code (monospaced).
- **UI & Componentes**: Componentes base shadcn/ui, Radix UI Primitives, Lucide React Icons.
- **Gerenciamento de Estado & I18n**: Context API com `LanguageContext` para alternância de idiomas (PT, EN, ES) com download de PDF correspondente (`Curriculo_Josias_Batista.pdf`, `Resume_Josias_Batista.pdf`, `Currículum_Josias_Batista.pdf`), e `ThemeContext` para sincronização global de tema (Dark/Light/System).
- **Formulário & Serverless**: React Hook Form, Zod e Vercel Serverless Functions (`/api/send-email`) integradas ao Resend.
- **Roteamento & Qualidade**: React Router v6, TanStack Query v5, Helmet Async e ESLint.

---

## Como Executar Localmente

### Pré-requisitos
- Node.js (versão 18 ou superior)
- npm ou yarn

### Passo a Passo

1. **Clonar o repositório:**
```bash
git clone https://github.com/josiasdev/portfolio.git
cd portfolio
```

2. **Instalar dependências:**
```bash
npm install
```

3. **Iniciar o servidor de desenvolvimento:**
```bash
npm run dev
```

4. **Acessar a aplicação:**
Abra o navegador no endereço `http://localhost:8080` (ou a porta informada pelo Vite no terminal).

---

## Comandos Disponíveis

- `npm run dev`: Executa a aplicação em modo de desenvolvimento com Hot Module Replacement (HMR).
- `npm run build`: Compila e otimiza a aplicação para produção no diretório `/dist`.
- `npm run preview`: Serve a build de produção localmente para verificação.
- `npm run lint`: Executa a checagem de código com ESLint e verificação de tipos com o compilador do TypeScript (`npx tsc --noEmit`).

---

## Contato e Links Profissionais

- **Portfolio**: [josias-batista-portfolio.vercel.app](https://josias-batista-portfolio.vercel.app)
- **LinkedIn**: [linkedin.com/in/josias-batista](https://www.linkedin.com/in/josias-batista)
- **GitHub**: [github.com/josiasdev](https://github.com/josiasdev)
- **Email**: [josiasmartins098@gmail.com](mailto:josiasmartins098@gmail.com)
- **Localização**: Quixadá, Ceará, Brasil