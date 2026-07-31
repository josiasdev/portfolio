# Mobile Documentation

Estratégias e padrões utilizados para garantir a melhor experiência mobile (responsividade app-like).

## Navegação Mobile: Top Bar & Bottom Navigation Bar

No mobile (<lg), a navegação é dividida em duas áreas funcionais para máxima ergonomia:

1. Top Header Bar Fixa (`lg:hidden sticky top-0`):
   - Título do desenvolvedor com scroll suave até o topo.
   - `LanguageToggle` com `direction="down" align="right"`: O menu dropdown abre para baixo (`top-full mt-2`), alinhado à direita com fundo 100% opaco (`bg-card opacity-100 shadow-2xl z-[100]`), garantindo que não vaze ou sobreponha textos.
   - `ThemeToggle`: Alternância imediata entre Dark, Light e System, sincronizado via `ThemeContext`.

2. Bottom Navigation Bar Fixa (`lg:hidden fixed bottom-0`):
   - 5 ícones fundamentais de acesso rápido: Sobre, Experiência, Projetos, Hackathons e Contato.
   - Ícones Lucide React (`User`, `GraduationCap`, `Code`, `Trophy`, `Mail`).
   - Estado ativo destacado em `text-primary` com ícone em traço mais espesso (`strokeWidth={2.5}`).
   - Suporte a `pb-[env(safe-area-inset-bottom)]` para evitar colisão com a barra do Face ID / Home Indicator nos iPhones.

## Touch Targets (Acessibilidade WCAG)

Todos os elementos interativos no mobile possuem dimensões adequadas (mínimo de 44px de altura/largura útil):
- Filtros de categoria em Projetos
- Botões "Entre em Contato" e "Baixar Currículo" no Hero (h-10 com padding generoso)
- Links diretos no formulário de contato e redes sociais

## LanguageToggle & ThemeToggle Mobile

- O botão acionador do idioma mostra a bandeira e a sigla em texto monoespaçado (PT, EN, ES).
- O menu dropdown do idioma possui opacidade total (100% sólida em `bg-card`), evitando transparências ou colisão visual com textos ao fundo.
- O alternador de tema é gerenciado centralmente por `ThemeContext`, mantendo mobile e desktop 100% sincronizados.
- Fechamento automático do menu de idioma ao clicar fora (`mousedown`) ou pressionar `Escape`.

## Performance Mobile & Viewport

- Dynamic Viewports (`dvh`): Uso de `min-h-screen` com containers flexíveis para evitar que barras nativas de navegadores (Safari, Chrome iOS/Android) ocultem conteúdos inferiores.
- Lazy Loading: Seções do conteúdo principal importadas via `React.lazy` + `<Suspense>` com indicador sutil.
- Imagem de Perfil Ampliada: `fetchPriority="high"`, `decoding="async"` e dimensões responsivas garantindo nitidez sem re-layouts.
- Scroll NATIVO Suave: Scroll nativo otimizado do navegador (`scroll-behavior: smooth` em CSS), eliminando bibliotecas pesadas de loop JS no thread principal mobile.

## Padding de Compensação no Footer Mobile

O wrapper principal em `Index.tsx` aplica `pb-20 md:pb-0` ao final do conteúdo para garantir que a Bottom Navigation Bar fixa não sobreponha as informações de copyright e botão de retorno ao topo.
