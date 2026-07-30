# Contexto do Projeto: Portfólio Josias Batista

## Objetivo

Portfólio profissional de Francisco Josias da Silva Batista — Desenvolvedor Blockchain, Engenheiro de Protocolos e Especialista em Backend Java/Spring Boot. O site apresenta trajetória profissional, projetos Web3 e backend, conquistas em hackathons globais, certificações verificáveis, formação acadêmica, idiomas e canais de contato.

## Identidade Visual

A paleta de cores é inspirada no programa **Web 3.0 iRede** (`web3.irede.org.br`):

- **Dark Mode (padrão):** Fundo em azul marinho profundo (`hsl(218 52% 9%)`), cards em `hsl(218 45% 13%)`, cor primária verde esmeralda/mint (`hsl(158 75% 48%)`) e accent verde-limão (`hsl(84 81% 52%)`).
- **Light Mode:** Fundo claro (`hsl(210 40% 98%)`), cards brancos, primária mais escura (`hsl(158 85% 36%)`) e accent (`hsl(84 81% 38%)`).
- **Gradientes:** `--gradient-primary` (de primary a accent) e `--gradient-hero` usados em destaques, hero frame e divisores.
- **Sombras customizadas:** `--shadow-glow`, `--shadow-card`, `--shadow-subtle` definidas por tema.

Todas as cores são definidas como variáveis HSL em `src/index.css` e consumidas via tokens Tailwind em `tailwind.config.ts`.

## Stack Tecnológica

- **Framework Core:** React 18 + Vite 5 + TypeScript 5 (strict mode).
- **Estilização:** Tailwind CSS 3.4 com tokens de design customizados (variáveis HSL semânticas em `index.css`), componentes **shadcn/ui** e **Radix UI Primitives**.
- **Animações:**
  - **Framer Motion** para animações de entrada no Hero (stagger, spring physics, containerVariants/itemVariants).
  - **Lenis** para smooth scroll global (hook `useSmoothScroll`).
  - **Magnetic** (`src/components/ui/magnetic.tsx`) — efeito magnético em botões e ícones (mouse follow com power configurável, desativado automaticamente em touch devices).
  - CSS keyframes em `tailwind.config.ts`: `fade-in`, `scale-in`, `float`, `orbit`, `pulse-glow`, etc.
- **Ícones:** `lucide-react` (SVG otimizados).
- **Formulário e Validação:** `react-hook-form` + `zod` para validação client-side e server-side.
- **Roteamento:** React Router v6 com lazy loading e `useSmoothScroll` hook.
- **SEO:** `react-helmet-async` para meta tags dinâmicas por idioma.
- **Analytics:** `@vercel/analytics` integrado.

## Seções do Portfólio (ordem de renderização)

1. **Hero** (`#hero`) — Foto de perfil, nome com gradiente, Typewriter animado (roles rotativas), 3 cards de pilares técnicos (Blockchain & Web3, Engenharia de Protocolos, Backend de Alta Performance), localização, telefone, CTAs (Ver Projetos, Entre em Contato, Download CV) e ícones sociais com efeito Magnetic.
2. **Sobre Mim** (`#about`) — Layout Bento Grid (5+7 cols): bloco narrativo + 4 cards de competência (Backend & APIs, Web3 & Blockchain, Frontend Moderno, Dados & Arquitetura).
3. **Habilidades** (`#skills`) — Grid 3 colunas com 7 categorias de skill (Web3 & Blockchain, Back-End, Front-End, Databases, DevOps & Cloud, IDEs & Tools, Habilidades Adicionais). Cada categoria mostra contagem de skills e tags com hover interativo.
4. **Experiência** (`#experience`) — Timeline vertical com 6 experiências profissionais. Card do cargo atual (`isCurrent`) tem destaque especial (glow, badge "Atual/Present", borda primária). Tecnologias listadas como tags separadas por vírgula.
5. **Projetos** (`#projects`) — Grid responsivo com 20 projetos. Filtro por categoria (All, Full Stack, Backend, Web3, Java, Python, Rust, .NET). Fetch dinâmico de stars do GitHub via API. Scroll horizontal snap em mobile, grid 3 colunas em desktop.
6. **Hackathons** (`#hackathons`) — Grid 3 colunas com 5 hackathons. Cards com nome do evento, nome do projeto, premiação (badge dourado), data, localização, descrição, tags e botões GitHub/Demo.
7. **Formação** (`#education`) — 2 cards (Bacharelado em Engenharia de Software na UFC Quixadá + Curso Técnico em Informática na EEEP).
8. **Certificações & Licenças** (`#certifications`) — Grid 3 colunas com 13 certificações verificáveis. Cada card mostra badge de categoria, título, emissor, data, credential ID (quando disponível) e link "Ver credencial".
9. **Idiomas** (`#languages`) — Grid 3 colunas com 3 idiomas (PT Nativo, EN B2+, ES Professional Working). Cards com bandeira emoji, nível, descrição e indicador "Pronto para times remotos".
10. **Contato** (`#contact`) — Layout 2 colunas: cards de contato direto (Email, LinkedIn, Phone) + formulário (nome, email, assunto via select, mensagem). Envio via `/api/send-email` (Vercel Serverless + Resend).
11. **Footer** — Grid 4 colunas: Brand + "Open to work" badge, Quick Links (todas as 9 seções), Social (GitHub, LinkedIn, Email), copyright e botão "Back to top".

## Navegação

- **Desktop (lg+):** Header fixo com 9 links de seção, indicador de seção ativa (underline animado) via IntersectionObserver, + LanguageToggle e ThemeToggle.
- **Mobile (<lg):** Bottom Navigation Bar fixa com 7 ícones (Home, Projetos, Hackathons, Formação, Certificações, Idiomas, Contato). Ícone ativo com background e scale. Safe area padding para iPhones.
- **Scroll Spy:** IntersectionObserver com `rootMargin: '-30% 0px -50% 0px'` para detecção de seção ativa.

## Internacionalização (i18n)

- Sistema customizado via Context API (`src/contexts/LanguageContext.tsx`).
- 3 idiomas: Português (PT-BR), Inglês (EN), Espanhol (ES).
- ~300 chaves de tradução por idioma, cobrindo todas as seções.
- `LanguageToggle` customizado com dropdown, flags emoji e suporte a teclado (Escape para fechar, click outside).
- Alternância persiste na sessão via state React.

## Temas (Dark/Light)

- `ThemeToggle` com 3 opções: Light, Dark, System.
- Persiste via `localStorage` com chave `"theme"`.
- Classe `dark` aplicada no `<html>` via `documentElement.classList`.
- Variáveis CSS em `index.css` cobrem ambos os temas com tokens HSL completos.

## Backend e Integrações (Serverless)

1. **Formulário de Contato (Vercel Functions):**
   - Endpoint `POST /api/send-email` via Vercel Serverless Functions.
   - Integração com **Resend** para envio transacional de e-mail.

2. **GitHub Stars (Client-side):**
   - Fetch direto da API pública do GitHub (`api.github.com/repos/{owner}/{repo}`) dentro de cada `ProjectCard`.
   - Mostra contagem real de stars com ícone dourado.

## Estrutura de Diretórios

```
/api/                    → Vercel Serverless Functions (send-email.ts)
/docs/                   → Documentação do projeto (CONTEXT.md, mobile.md)
/public/                 → Arquivos estáticos (CVs em PDF, favicons)
/src/
  /assets/               → Imagens (profile.webp)
  /components/
    /About/              → Seção Sobre Mim (Bento Grid)
    /Certifications/     → Seção Certificações & Licenças
    /Contact/            → Seção Contato (formulário + cards)
    /Education/          → Seção Formação Acadêmica
    /Experience/         → Seção Experiência (timeline)
    /Footer/             → Rodapé
    /Hackathons/         → Seção Hackathons
    /Header/             → Header fixo + Bottom Nav mobile
    /Hero/               → Hero com Typewriter e Magnetic buttons
    /LanguageToggle/     → Dropdown de idiomas customizado
    /Languages/          → Seção Idiomas & Proficiência
    /Projects/           → Seção Projetos (filtros + grid)
    /Skills/             → Seção Habilidades Técnicas
    /ThemeToggle/        → Toggle Dark/Light/System
    /ui/                 → 52 componentes shadcn/ui + magnetic.tsx + scroll-reveal.tsx
  /contexts/             → LanguageContext (i18n com ~900 linhas de traduções)
  /hooks/                → useSmoothScroll, useMagnetic, useScrollReveal, useWeb3, use-mobile, use-toast
  /pages/                → Index.tsx (lazy loading de todas as seções), NotFound.tsx
  index.css              → Design tokens HSL, textura grain, scrollbar custom, selection colors
  App.tsx                → Providers (Helmet, QueryClient, Language, Tooltip, Router, Analytics)
tailwind.config.ts       → Tokens de cor, gradientes, sombras, keyframes, animações
```

## Como Executar

```bash
git clone https://github.com/josiasdev/portfolio.git
cd portfolio
npm install
npm run dev          # Dev server com HMR
npm run build        # Build de produção
npm run preview      # Servir build localmente
```

Para testar o formulário de contato localmente: `vercel dev` (requer Vercel CLI e `RESEND_API_KEY` em `.env.local`).

## Boas Práticas

- **Code Splitting:** Todas as seções abaixo do Hero são importadas via `React.lazy` + `<Suspense>` em `Index.tsx`.
- **Acessibilidade:** Tags semânticas HTML5, `aria-label`, `aria-expanded`, `aria-selected`, `role="listbox"/"option"` no LanguageToggle.
- **SEO:** `react-helmet-async` com `<title>`, `<meta description>`, Open Graph e Twitter Cards dinâmicos por idioma.
- **Performance:** Font `Inter` via system stack, `fetchPriority="high"` na foto de perfil, scrollbar customizada, grain texture sutil via SVG inline.
- **Transições desabilitadas globalmente** (`* { transition: none !important; }`) — regra atual no `index.css` que elimina todas as transições CSS. As animações de entrada (Framer Motion) continuam funcionando.
