# Design System & Especificação Visual do Portfólio

Este documento detalha o sistema de design, arquitetura de layout, paleta de cores, tipografia, componentes e decisões de experiência do usuário (UX) adotadas no portfólio profissional de Francisco Josias da Silva Batista.

---

## 1. Filosofia Estética: Senior Minimalist

O design do portfólio é fundamentado na estética **Senior Minimalist** (inspirada por referências internacionais de engenharia de software como Brittany Chiang, Lee Robinson e Marko Denic).

### Diretrizes Fundamentais
- **Engenharia em Primeiro Lugar**: Foco em clareza, legibilidade, alta densidade de informação e zero poluição visual.
- **Hierarquia Visual Clara**: Uso estratégico de contrastes, tamanhos de fonte semânticos e espaçamentos simétricos.
- **Tipografia Técnica Dual**: Combinação de fontes sans-serif modernas para textos corporativos e fontes monoespaçadas para termos técnicos, números de seções, badges e datas.
- **Interatividade Discreta**: Transições suaves em hover (150ms a 300ms) que transmitem sofisticação sem poluir a experiência.

---

## 2. Arquitetura de Layout & Responsividade

O portfólio utiliza uma estrutura responsiva adaptável que muda de comportamento entre dispositivos desktop e mobile.

### A. Desktop: Split-Screen Assíncrono (lg / 1024px+)
- **Painel Esquerdo Fixo (`lg:sticky lg:top-0 lg:w-[42%] lg:max-h-screen`)**:
  - Permanece visível durante toda a navegação na página.
  - Contém os seletores superiores de idioma (`LanguageToggle`) e tema (`ThemeToggle`).
  - Apresenta a foto de perfil em avatar arredondado, nome completo, cargo principal, resumo profissional, status de disponibilidade, botões de ação (Ver Projetos, Contato, Download de CV) e links sociais.
  - Inclui o menu de navegação lateral com indicador de linha ativa estilo régua (`w-8` no estado inativo crescendo para `w-16` no estado ativo/hover).
- **Coluna Direita Rolável (`lg:w-[54%] lg:py-24`)**:
  - Contém o fluxo contínuo das 9 seções editoriais ordenadas numericamente.

### B. Dispositivos Móveis & Tablets (< 1024px)
- **Barra Superior Fixa (`Header.tsx`)**: Exibe o logotipo/nome e os seletores de tema e idioma.
- **Fluxo Vertical Unificado**: O conteúdo do perfil e as seções fluem em uma única coluna vertical com espaçamento otimizado para telas sensíveis ao toque.
- **Barra Inferior Estilo Dock App**: Menu suspenso fixo na parte inferior da tela para alternância rápida entre seções com alcance ideal para o polegar.

---

## 3. Sistema de Cores & Tokens HSL

O sistema de cores utiliza variáveis CSS nativas com suporte automático e imediato a Modo Escuro (`Dark Mode`) e Modo Claro (`Light Mode`).

### A. Modo Escuro (Dark Mode - Padrão)
- **Background Principal (`--background`)**: Slate Escuro Profundo (`hsl(222.2 84% 4.9%)` / `#0f172a`).
- **Superfície dos Cartões (`--card`)**: Dark Slate Translucido (`hsl(217.2 32.6% 17.5% / 30%)`).
- **Acento Primário (`--primary`)**: Emerald / Teal Descentralizado (`hsl(173 80% 40%)` / `#14b8a6`).
- **Texto Principal (`--foreground`)**: Slate Claro (`hsl(210 40% 98%)`).
- **Texto Secundário (`--muted-foreground`)**: Slate Neutro (`hsl(215.4 16.3% 56.9%)`).
- **Bordas (`--border`)**: Slate Suave (`hsl(217.2 32.6% 17.5% / 60%)`).

### B. Modo Claro (Light Mode)
- **Background Principal (`--background`)**: Clean White / Off-White (`hsl(0 0% 100%)`).
- **Superfície dos Cartões (`--card`)**: Slate Claro Translucido (`hsl(210 40% 98% / 60%)`).
- **Acento Primário (`--primary`)**: Emerald Escuro Legível (`hsl(173 80% 32%)`).
- **Texto Principal (`--foreground`)**: Deep Slate (`hsl(222.2 84% 4.9%)`).
- **Texto Secundário (`--muted-foreground`)**: Slate Médio (`hsl(215.4 16.3% 46.9%)`).
- **Bordas (`--border`)**: Slate Suave (`hsl(214.3 31.8% 91.4%)`).

---

## 4. Tipografia & Escala de Fontes

A tipografia é dividida estritamente em duas famílias de fontes do Google Fonts:

1. **Sans-Serif (Inter)**: Utilizada em títulos principais, nomes de projetos, descrições de experiências e textos corridos.
2. **Monospaced (Fira Code)**: Utilizada na numeração ordinal das seções (`01.` a `09.`), tags de tecnologias, datas de períodos, IDs de credenciais e indicadores de navegação.

### Escala Tipográfica
- **Títulos de Seção**: `text-xs font-mono font-bold tracking-widest uppercase` (ex: `01. SOBRE MIM`).
- **Títulos de Cartões**: `text-base font-semibold text-foreground` ou `text-sm font-semibold`.
- **Textos Corridos**: `text-xs text-muted-foreground leading-relaxed` ou `text-sm leading-relaxed`.
- **Badges Tecnológicas**: `font-mono text-[11px] text-primary bg-primary/10 border border-primary/20 px-2 py-0.5 rounded`.

---

## 5. Estrutura Editorial das 9 Seções

1. **01. Sobre Mim (`About.tsx`)**: Apresentação da trajetória acadêmica em Engenharia de Software na UFC Quixadá e formação técnica com média 9,67/10,0.
2. **02. Habilidades (`Skills.tsx`)**: Grid categorizado de tecnologias (Web3 & Blockchain, Back-End Java/TypeScript, Bancos de Dados, DevOps & Ferramentas, Metodologias Ágeis e Habilidades Adicionais).
3. **03. Experiência (`Experience.tsx`)**: Timeline vertical organizada por empresas e papéis profissionais com resumos técnicos e tags de tecnologias.
4. **04. Projetos (`Projects.tsx`)**: Lista interativa com filtro por linguagem/categoria, estatísticas em tempo real do GitHub, links para código/demo e botão expansível "Ver Todos os Projetos".
5. **05. Hackathons (`Hackathons.tsx`)**: Destaque para maratonas de programação globais (Stellar Network, UNICEF, SUI, XRPL) com badges de premiação em tom âmbar.
6. **06. Formação Acadêmica (`Education.tsx`)**: Detalhamento do Bacharelado na UFC e Curso Técnico em Informática.
7. **07. Certificações (`Certifications.tsx`)**: Grid responsivo em 2 colunas com IDs de credenciais verificáveis e links externos de autenticidade.
8. **08. Idiomas (`Languages.tsx`)**: Cartões de proficiência em Português (Nativo), Inglês (Intermediário B1) e Espanhol (Intermediário B1).
9. **09. Contato (`Contact.tsx`)**: Formulário de mensagem integrado à API serverless e cartões de acesso direto (E-mail, LinkedIn, GitHub, Telefone).

---

## 6. Acessibilidade (a11y) & UX Internacional

- **Modo Daltônico & Alto Contraste**: As combinações de cores HSL atendem às diretrizes WCAG 2.1 AA de contraste.
- **Navegação por Teclado**: Elementos interativos possuem estados `:focus-visible` bem definidos com anéis de foco (`ring-2 ring-primary`).
- **Internacionalização Fluida (i18n)**: Alternância instantânea de idioma entre Português (PT), Inglês (EN) e Espanhol (ES) gerenciada pelo `LanguageContext`.
- **Download Dinâmico de Currículo**: O botão de download no Hero identifica o idioma ativo e entrega automaticamente o arquivo PDF correspondente (`Curriculo_Josias_Batista.pdf`, `Resume_Josias_Batista.pdf` ou `Currículum_Josias_Batista.pdf`).
