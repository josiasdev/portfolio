# Contexto do Projeto: Portfólio Josias Batista

## Objetivo

Portfólio profissional de Francisco Josias da Silva Batista — Desenvolvedor Blockchain, Engenheiro de Protocolos e Especialista em Backend Java/Spring Boot. O site apresenta trajetória profissional, projetos Web3 e backend, conquistas em hackathons globais, certificações verificáveis, formação acadêmica, idiomas e canais de contato.

## Identidade Visual & Design System

O projeto adota uma estética Senior Minimalist inspirada em engenheiros de software de referência (brittanychiang.com, leerob.io, markodenic.com):

- Paleta Enxuta & Alto Contraste:
  - Dark Mode (padrão): Fundo Slate 900 (`#0f172a` / `hsl(222 47% 11%)`), cards em Slate 800 (`#1e293b` / `hsl(217 33% 15%)`), texto em Slate 50 (`hsl(210 40% 98%)`) e acento primário em Teal 500 (`#14b8a6` / `hsl(173 80% 40%)`).
  - Light Mode: Fundo claro Slate 50 (`#f8fafc` / `hsl(210 40% 98%)`), cards brancos, texto Slate 900 e acento Teal 600 (`#0d9488` / `hsl(173 80% 36%)`).
- Tipografia:
  - Inter (sans-serif) para texto de corpo e títulos principais.
  - Fira Code (monospaced) para identificadores de seção (01. SOBRE), datas, badges de linguagem, tags de tecnologia e botões CTA.
- Bordas & Elementos: Bordas finas de 1px (`border-border/60`), cantos levemente arredondados (`rounded` / 8px radius) e ausência de efeitos 3D ou sombras neon pesadas.

Todas as cores são configuradas como variáveis HSL em `src/index.css` e consumidas via tokens semânticos em `tailwind.config.ts`.

## Layout & Arquitetura de Navegação

- Desktop (lg+ Split-Screen Layout):
  - Coluna Esquerda Fixa (`lg:sticky lg:top-0 lg:w-[42%] lg:max-h-screen lg:py-24`): Contém o topo com seletores de idioma e tema (`LanguageToggle` e `ThemeToggle`), foto de perfil ampliada, nome, título profissional, resumo de atuação, badges de status, botões CTA (Ver Projetos, Entre em Contato, Download CV), links sociais e menu de navegação lateral com 9 seções.
  - Indicador Dinâmico de Seção Ativa: O menu lateral exibe todas as 9 seções (01 a 09) com linhas horizontais dinâmicas (`w-8` inativo vs `w-16 bg-primary` ativo) em `font-mono` atualizadas via `IntersectionObserver`.
  - Coluna Direita de Conteúdo (`lg:w-[54%] lg:py-24 space-y-20`): Rolagem contínua através das seções 01 a 09.
- Mobile (<lg):
  - Top Bar Fixa: Título do desenvolvedor + `LanguageToggle` (`direction="down" align="right"`) + `ThemeToggle`.
  - Bottom Navigation Bar Fixa: 5 ícones principais (`User`, `GraduationCap`, `Code`, `Trophy`, `Mail`) com área de toque segura (`env(safe-area-inset-bottom)`).

## Stack Tecnológica

- Framework Core: React 18 + Vite 5 + TypeScript 5 (strict mode).
- Estilização: Tailwind CSS 3.4 com tokens semânticos HSL, componentes shadcn/ui e Radix UI Primitives.
- Ícones: `lucide-react` (SVG otimizados).
- Formulário e Validação: `react-hook-form` + `zod` para validação client-side e server-side.
- Roteamento: React Router v6 com lazy loading das seções abaixo da viewport.
- SEO: `react-helmet-async` para meta tags dinâmicas por idioma.
- Gerenciamento de Estado: `ThemeContext` para sincronização global de tema e `LanguageContext` para internacionalização.
- Backend Serverless: Endpoint `POST /api/send-email` (Vercel Serverless Function) + Resend para envio de e-mails transacionais.

## Seções do Portfólio (ordem de renderização)

1. Hero & Painel Lateral — Seletores superiores de idioma/tema, foto ampliada, nome, badge de status traduzido, título profissional, botões CTA (Ver Projetos, Entre em Contato, Download CV dinâmico por idioma) e redes sociais.
2. 01. Sobre Mim (`#about`) — Narrativa editorial estruturada abrangendo formação técnica em Aracoiaba (média 9,67/10,0), Engenharia de Software na UFC Quixadá e atuação atual em backend Java e Web3 no iRede.
3. 02. Habilidades (`#skills`) — 6 categorias organizadas com badges monospaced (Web3 & Blockchain, Back-End, Front-End, Bancos de Dados, DevOps & Cloud, Habilidades Adicionais).
4. 03. Experiência (`#experience`) — Timeline em formato grid com anos monoespaçados à esquerda, cargo/empresa à direita e tags de tecnologias aplicadas.
5. 04. Projetos (`#projects`) — Cards minimalistas com bordas de 1px, filtros por categoria, contagem ao vivo de stars do GitHub via API e links diretos para repositórios e demos.
6. 05. Hackathons (`#hackathons`) — Cards com maratonas globais (PULSO Stellar, UNICEF Youth Challenge 2026, Hack Meridian, SUI, XRPL).
7. 06. Formação Acadêmica (`#education`) — Bacharelado em Engenharia de Software (UFC Campus Quixadá, 2022–2027) + Curso Técnico em Informática (EEEP Dr. Salomão Alves de Moura em Aracoiaba - Ceará, 2019–2021).
8. 07. Certificações & Licenças (`#certifications`) — Grid de credenciais verificáveis (iRede Web 3.0, Agentic Space Founder, Cyfrin Updraft, AWS re/Start, AWS Academy Cloud Foundations, Microsoft AI Agents, Sui Developer, Alura, Utah Linux LPI).
9. 08. Idiomas & Proficiência (`#languages`) — Português (Nativo), Inglês (Intermediário B1) e Espanhol (Intermediário B1).
10. 09. Contato & Rodapé (`#contact`) — Formulário transacional, links diretos de comunicação, copyright e botão de retorno ao topo.

## Internacionalização (i18n) e PDFs de CV

- Gerido via `src/contexts/LanguageContext.tsx`.
- Suporte a 3 idiomas: Português (PT-BR), Inglês (EN), Espanhol (ES).
- Mapeamento dinâmico de download de currículo conforme o idioma selecionado:
  - Português (`pt`): `Curriculo_Josias_Batista.pdf`
  - Inglês (`en`): `Resume_Josias_Batista.pdf`
  - Espanhol (`es`): `Currículum_Josias_Batista.pdf`
- `LanguageToggle` configurado com fundo 100% opaco (`bg-card opacity-100 shadow-2xl z-[100]`), prop `direction` e `align` para evitar sobreposição ou vazamento de texto.

## Gerenciamento de Tema (Theme Management)

- Gerido via `src/contexts/ThemeContext.tsx`.
- Provedor global `ThemeProvider` inserido na raiz (`App.tsx`), sincronizando os seletores de tema da versão web e mobile.
- Suporte a 3 modos: Light, Dark e System.

## Estrutura de Diretórios

```
/api/                    -> Vercel Serverless Functions (send-email.ts)
/docs/                   -> Documentação do projeto (CONTEXT.md, mobile.md)
/public/                 -> Arquivos estáticos (Curriculo_Josias_Batista.pdf, Resume_Josias_Batista.pdf, Currículum_Josias_Batista.pdf, favicons)
/src/
  /assets/               -> Imagens (profile.webp)
  /components/
    /About/              -> Seção Sobre Mim (narrativa editorial)
    /Certifications/     -> Seção Certificações & Licenças
    /Contact/            -> Seção Contato (formulário + links)
    /Education/          -> Seção Formação Acadêmica
    /Experience/         -> Seção Experiência (timeline grid)
    /Footer/             -> Rodapé minimalista
    /Hackathons/         -> Seção Hackathons
    /Header/             -> Top Header + Bottom Nav mobile
    /Hero/               -> Painel de apresentação e foto de perfil
    /LanguageToggle/     -> Toggle de idiomas com direção e alinhamento flexíveis
    /Languages/          -> Seção Idiomas & Proficiência
    /Projects/           -> Seção Projetos (filtros + GitHub stars)
    /Skills/             -> Seção Habilidades Técnicas
    /ThemeToggle/        -> Toggle Dark/Light/System integrado ao ThemeContext
    /ui/                 -> Componentes shadcn/ui
  /contexts/             -> LanguageContext (i18n), ThemeContext (tema global)
  /pages/                -> Index.tsx (layout split-screen desktop com 9 seções nav), NotFound.tsx
  index.css              -> Tokens de cor HSL, Fira Code font stack, scrollbar customizada
  App.tsx                -> Providers globais (Helmet, Query, Theme, Language, Router, Analytics)
tailwind.config.ts       -> Tokens de cores semânticas e família monospaced
```

## Como Executar

```bash
git clone https://github.com/josiasdev/portfolio.git
cd portfolio
npm install
npm run dev          # Dev server com HMR
npm run build        # Build de produção
```
