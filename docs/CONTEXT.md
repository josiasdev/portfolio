# Contexto do Projeto: Portfólio Josias Batista

## 🎯 Objetivo
Este repositório contém o código-fonte do portfólio pessoal de Josias Batista, um desenvolvedor Full Stack com foco em Web3, Blockchain, TypeScript e ecossistema Node.js. O objetivo é apresentar habilidades, experiências, projetos (incluindo Hackathons) e métricas dinâmicas de maneira performática, acessível e com alto apelo visual (UI/UX premium).

## 🏗️ Arquitetura e Stack Tecnológica

O projeto foi construído utilizando as melhores práticas do ecossistema front-end moderno:

- **Framework Core:** React.js 18 rodando em cima do Vite (extremamente rápido para build e HMR).
- **Linguagem:** TypeScript puro, com tipagem estrita (`strict: true`).
- **Estilização:** Tailwind CSS combinado com componentes isolados e tokens CSS (`index.css`) definidos em variáveis HSL para facilitar a troca de temas (Light/Dark mode).
- **Animações:** CSS Vanilla integrado ao Tailwind (ex: `@keyframes`) e Intersection Observer nativo via hooks customizados (`useScrollReveal`) para garantir que animações de entrada sejam ativadas sob demanda (ao fazer scroll vertical), otimizando a performance.
- **Formulário e Validação:** `react-hook-form` integrado com a biblioteca `zod` para validação estrita de dados tanto no lado do cliente (React) quanto no lado do servidor (Serverless).
- **Ícones:** `lucide-react` (ícones SVG extremamente leves e limpos).

## ⚙️ Backend e Integrações (Serverless)

Embora seja majoritariamente uma Single Page Application (SPA) estática, o portfólio possui recursos dinâmicos robustos:

1. **GitHub Stats:**
   - Componente que se comunica com a API REST pública do GitHub (`api.github.com`).
   - Puxa dados em tempo real sobre repositórios, seguidores, stars e processa as linguagens de programação mais utilizadas no perfil do desenvolvedor.
   - Possui sistema de *fallback* embutido (`FALLBACK`) que garante a renderização da seção (com dados reais previamente colhidos) mesmo em caso de indisponibilidade da API ou bloqueio de rede (Rate Limit excedido).

2. **Formulário de Contato (Vercel Functions):**
   - Utiliza a infraestrutura de Serverless Functions da nuvem Vercel.
   - A pasta `/api/` contém endpoints Node.js. O arquivo principal `api/send-email.ts` é acionado via requisição `POST`.
   - A integração para o envio transacional real de e-mails para a caixa de entrada do dono do portfólio é feita através do serviço **Resend**.

3. **Internacionalização (i18n) Customizada:**
   - Sistema multi-idioma criado do zero sem depender de bibliotecas massivas (como `i18next`).
   - Totalmente baseado na Context API nativa do React (`src/contexts/LanguageContext.tsx`).
   - Suporta troca de contexto e tradução em tempo de execução para três idiomas: Português, Inglês e Espanhol.

## 📂 Estrutura de Diretórios Principal

- `/api/` - Funções Serverless (Node.js) implantadas automaticamente na infraestrutura de backend do Vercel.
- `/src/components/` - Diretório dos blocos de construção da UI. Organizado por seções do portfólio (Hero, About, Contact, GitHubStats, etc).
- `/src/contexts/` - Provedores de estado global do React (ex: Contexto de Idioma).
- `/src/hooks/` - Hooks customizados do React (ex: `useScrollReveal`).
- `/src/lib/` - Funções utilitárias e injeção de dados (ex: estrutura de dados base em `portfolio-context.ts`).
- `/public/` - Arquivos estáticos estáticos, como os currículos (`cv-pt.pdf`, etc.) e favicons, servidos na raiz.

## 🚀 Como Executar Localmente

1. Crie um arquivo `.env.local` na raiz copiando a estrutura do `.env.example` e preencha as chaves:
   - `VITE_GITHUB_TOKEN` (opcional): Útil caso esteja batendo no rate-limit do GitHub na rede local.
   - `RESEND_API_KEY` (obrigatório se for debugar formulário): Token do Resend.
2. Para rodar e testar apenas o Front-end: `npm run dev`
3. Para testar todo o ecossistema integrado (Front-end + API Vercel rodando em sintonia localmente), recomenda-se a Vercel CLI: `vercel dev`

## 📝 Boas Práticas Adotadas

- **Acessibilidade e SEO:** Otimizado com tags HTML5 e uso contínuo de suporte a leitores de tela em ícones.
- **Performance (Code Splitting):** O componente principal (`Index.tsx`) importa as sub-seções da página de maneira preguiçosa utilizando o `React.lazy` e o `<Suspense>`. Isso assegura que a tela principal "Above the Fold" carregue de imediato.
