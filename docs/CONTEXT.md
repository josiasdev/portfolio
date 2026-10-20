# Contexto do Projeto: Portfólio Josias Batista

## Objetivo

Portfólio profissional de Francisco Josias da Silva Batista - Desenvolvedor Blockchain, Engenheiro de Protocolos e Especialista em Backend Java/Spring Boot. O site apresenta trajetória profissional, projetos Web3 e backend, conquistas em hackathons globais, certificações verificáveis, formação acadêmica, idiomas e canais de contato.

---

## Identidade Visual & Design System

O projeto adota uma estética Senior Minimalist inspirada em engenheiros de software de referência (brittanychiang.com, leerob.io, markodenic.com):

- Paleta Enxuta & Alto Contraste:
  - Dark Mode (padrão): Fundo Slate 900 (`#0f172a` / `hsl(222.2 84% 4.9%)`), cards em Slate 800 (`hsl(217.2 32.6% 17.5% / 30%)`), texto em Slate 50 (`hsl(210 40% 98%)`) e acento primário em Teal 500 (`#14b8a6` / `hsl(173 80% 40%)`).
  - Light Mode: Fundo claro Slate 50 (`hsl(0 0% 100%)`), cards brancos translucidos, texto Slate 900 e acento Teal 600 (`hsl(173 80% 32%)`).
- Tipografia Dual:
  - Inter (sans-serif) para texto de corpo e títulos principais.
  - Fira Code (monospaced) para identificadores de seção (01. a 09.), datas, badges de linguagem, tags de tecnologia e botões CTA.
- Bordas & Elementos: Bordas finas de 1px (`border-border/60`), cantos levemente arredondados (`rounded` / 8px radius) e ausência de sombras neon pesadas.

Todas as cores são configuradas como variáveis HSL em `src/index.css` e consumidas via tokens semânticos em `tailwind.config.ts`.

---

## Layout & Arquitetura de Navegação

- Desktop (lg+ Split-Screen Layout):
  - Coluna Esquerda Fixa (`lg:sticky lg:top-0 lg:w-[42%] lg:max-h-screen lg:py-10`): Contém o topo com seletores de idioma e tema (`LanguageToggle` e `ThemeToggle`), foto de perfil ampliada, nome, título profissional, resumo de atuação (Web 3.0 Resident Developer @ iRede), badges de status, botões CTA (Ver Projetos, Entre em Contato, Download CV dinâmico por idioma), links sociais e menu de navegação lateral com 9 seções.
  - Indicador Dinâmico de Seção Ativa: O menu lateral exibe todas as 9 seções (01 a 09) com linhas horizontais dinâmicas (`w-8` inativo vs `w-16 bg-primary` ativo) em `font-mono` atualizadas via escuta ativa de rolagem (`window.addEventListener("scroll")`) com detecção de final de página (`isAtBottom`) para ativar a seção 09.
  - Coluna Direita de Conteúdo (`lg:w-[54%] lg:py-24 space-y-20`): Rolagem contínua através das seções 01 a 09.
- Mobile (<lg):
  - Top Bar Fixa: Título do desenvolvedor + `LanguageToggle` (`direction="down" align="right"`) + `ThemeToggle`.
  - Bottom Navigation Bar Fixa: Acesso rápido às seções principais com área de toque segura (`env(safe-area-inset-bottom)`).

---

## Stack Tecnológica

- Framework Core: React 18 + Vite 5 + TypeScript 5 (strict mode).
- Estilização: Tailwind CSS 3.4 com tokens semânticos HSL, componentes essenciais shadcn/ui e Radix UI Primitives.
- Ícones: `lucide-react` (SVG otimizados).
- Formulário e Validação: `react-hook-form` + `zod` para validação client-side e server-side.
- Roteamento: React Router v6 com lazy loading das seções.
- SEO: `react-helmet-async` para meta tags dinâmicas por idioma.
- Gerenciamento de Estado & I18n: `ThemeContext` para sincronização global de tema (Dark/Light/System) e `LanguageContext` para internacionalização completa nos 3 idiomas (PT, EN, ES).
- Backend Serverless: Endpoint `POST /api/send-email` (Vercel Serverless Function) + Resend para envio de e-mails transacionais.

---

## Seções do Portfólio (ordem de renderização)

1. Hero & Painel Lateral - Seletores superiores de idioma/tema, foto ampliada, nome, badge de status traduzido, título profissional, botões CTA (Ver Projetos, Entre em Contato, Download CV dinâmico por idioma) e redes sociais.
2. 01. Sobre Mim (`#about`) - Narrativa editorial estruturada abrangendo formação técnica em Aracoiaba (média 9,67/10,0), Engenharia de Software na UFC Quixadá e atuação atual em backend Java e Web3 no iRede.
3. 02. Habilidades (`#skills`) - 6 categorias organizadas com badges monospaced (Web3 & Blockchain, Back-End Java/TypeScript, Bancos de Dados, DevOps & Ferramentas, Metodologias Ágeis, Habilidades Adicionais).
4. 03. Experiência (`#experience`) - Timeline em formato grid com anos monoespaçados à esquerda, cargo/empresa à direita e tags de tecnologias aplicadas.
5. 04. Projetos (`#projects`) - 4 projetos Web3/Solidity/Rust em destaque por padrão (COINCONUT, EloCiv, ChainMed, SyloPay), filtros por categoria, estatísticas em tempo real do GitHub via API, links para repositórios/demos e botão expansível "Ver Todos os Projetos".
6. 05. Hackathons (`#hackathons`) - Cards com maratonas globais (PULSO Hackathon Stellar, UNICEF Youth Challenge 2026, Hack Meridian, SUI, XRPL).
7. 06. Formação Acadêmica (`#education`) - Bacharelado em Engenharia de Software (UFC Campus Quixadá, 2022-2027) + Curso Técnico em Informática (EEEP Dr. Salomão Alves de Moura em Aracoiaba - Ceará, 2019-2021).
8. 07. Certificações & Licenças (`#certifications`) - Grid de credenciais verificáveis (iRede Web 3.0, Agentic Space Founder, Cyfrin Updraft, AWS re/Start, AWS Academy Cloud Foundations, Microsoft AI Agents, Sui Developer, Alura, Utah Linux LPI).
9. 08. Idiomas & Proficiência (`#languages`) - Português (Nativo), Inglês (Intermediário B1) e Espanhol (Intermediário B1).
10. 09. Contato & Rodapé (`#contact`) - Formulário transacional, links diretos de comunicação, copyright e botão de retorno ao topo.

---

## Internacionalização (i18n) e PDFs de CV

- Gerido via `src/contexts/LanguageContext.tsx`.
- Suporte a 3 idiomas: Português (PT-BR), Inglês (EN), Espanhol (ES).
- 100% de cobertura das 147 chaves ativas em todas as seções.
- Mapeamento dinâmico de download de currículo conforme o idioma selecionado:
  - Português (`pt`): `Curriculo_Josias_Batista.pdf`
  - Inglês (`en`): `Resume_Josias_Batista.pdf`
  - Espanhol (`es`): `Currículum_Josias_Batista.pdf`
- `LanguageToggle` configurado com fundo 100% opaco (`bg-card opacity-100 shadow-2xl z-[100]`), prop `direction` e `align` para evitar sobreposição ou vazamento de texto.

---

## Gerenciamento de Tema (Theme Management)

- Gerido via `src/contexts/ThemeContext.tsx`.
- Provedor global `ThemeProvider` inserido na raiz (`App.tsx`), sincronizando os seletores de tema da versão web e mobile.
- Suporte a 3 modos: Light, Dark e System.

---

## Estrutura de Diretórios Otimizada

```
/api/                    -> Vercel Serverless Functions (send-email.ts)
/docs/                   -> Documentação do projeto (CONTEXT.md, mobile.md, DESIGN.md)
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
    /Projects/           -> Seção Projetos (4 destaques + expansor + GitHub stars)
    /Skills/             -> Seção Habilidades Técnicas
    /ThemeToggle/        -> Toggle Dark/Light/System integrado ao ThemeContext
    /ui/                 -> Componentes essenciais shadcn/ui (button, dropdown-menu, form, input, label, select, textarea, sonner, tooltip)
  /contexts/             -> LanguageContext (i18n), ThemeContext (tema global)
  /lib/                  -> utils.ts (helper cn para Tailwind)
  /pages/                -> Index.tsx (layout split-screen desktop com 9 seções nav), NotFound.tsx
  index.css              -> Tokens de cor HSL, Fira Code font stack, scrollbar customizada
  App.tsx                -> Providers globais (Helmet, Query, Theme, Language, Router, Analytics)
tailwind.config.ts       -> Tokens de cores semânticas e família monospaced
```
