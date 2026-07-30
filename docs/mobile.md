# Mobile Documentation

Estratégias e padrões utilizados para garantir a melhor experiência mobile (responsividade app-like).

## Navegação Mobile: Bottom Navigation Bar

Substituímos o clássico Side Menu (Hamburger) por uma **Navbar inferior fixa** com ícones, imitando a navegação de aplicativos nativos:

- **Localização:** `Header.tsx` — seção `bottomNavItems` renderizada apenas em `<lg` (telas menores que 1024px).
- **7 ícones com labels:** Home, Projetos, Hackathons, Formação, Certificações, Idiomas, Contato.
- **Ícones:** Lucide React (`Home`, `Code`, `Trophy`, `GraduationCap`, `Award`, `Languages`, `Mail`).
- **Estado ativo:** Ícone ativo recebe `bg-primary/15 text-primary scale-110` e label em `text-primary`.
- **Scroll spy:** Compartilha o mesmo `IntersectionObserver` do header desktop (`rootMargin: '-30% 0px -50% 0px'`).
- **Scroll suave:** Função `scrollToSection` com offset de 80px para compensar o header fixo.

## Dynamic Viewports (`dvh`)

Uso de `min-h-[100dvh]` no Root (`Index.tsx`) e no Hero para evitar bugs onde barras nativas de endereço de navegadores móveis (Safari, Chrome) escondem conteúdo inferior.

## Touch Targets

Todos os botões críticos possuem tamanho mínimo de `min-h-[44px]`, seguindo diretrizes WCAG de acessibilidade:
- Filtros de categoria em Projetos
- Botões GitHub/Demo nos cards de projetos e hackathons
- Links de contato
- Botões CTA do Hero (h-12 = 48px)

## Safe Area (iPhone)

A Bottom Navigation Bar usa `pb-[env(safe-area-inset-bottom)]` para evitar colisão com a barra do Face ID / Home Indicator nos iPhones.

## Scroll Horizontal (Cards)

Seções com múltiplos cards (Projetos e Hackathons) usam **scroll horizontal snap** em mobile:

```
flex overflow-x-auto snap-x snap-mandatory
[&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]
```

- **Projetos:** Cards de `w-[85vw] sm:w-[350px]` com `snap-center`, convertendo para grid 3 colunas em `md:`.
- **Hackathons:** Cards de `w-[85vw] sm:w-[400px]` com `snap-center`, convertendo para grid 3 colunas em `lg:`.
- Scrollbar oculta em ambos para aparência nativa.

## Breakpoints

| Breakpoint | Tailwind | Uso principal |
|-----------|----------|---------------|
| < 640px | default | Telas de celular — layout em coluna única, cards full-width |
| ≥ 640px | `sm:` | Cards de scroll horizontal com largura fixa, grid 2 cols em Certificações |
| ≥ 768px | `md:` | Grid de projetos em 2 colunas, tipografia maior, padding expandido |
| ≥ 1024px | `lg:` | Header desktop ativo (Bottom Nav escondida), grids em 3+ colunas |

## LanguageToggle Mobile

- No header, o botão mostra apenas a bandeira emoji (flag) em `<sm`, e flag + código do idioma (`PT`, `EN`, `ES`) em `sm:` acima.
- Dropdown posicionado com `absolute right-0 top-full mt-2 w-44 z-[100]`.
- Fecha ao clicar fora (`mousedown` listener) ou pressionar `Escape`.

## ThemeToggle

- Dropdown menu via Radix UI (`DropdownMenu`).
- 3 opções: Light, Dark, System.
- Ícone Sun/Moon com rotação CSS animada entre temas.
- Persistência via `localStorage` key `"theme"`.

## Efeito Magnetic (desabilitado em touch)

O componente `Magnetic` (`src/components/ui/magnetic.tsx`) detecta se o dispositivo suporta hover via `window.matchMedia('(hover: hover) and (pointer: fine)')`. Em dispositivos touch, o efeito magnético é automaticamente desativado para evitar comportamento indesejado.

## Considerações de Performance Mobile

- **Lazy loading:** Todas as seções abaixo do Hero são importadas via `React.lazy` + `<Suspense>` com fallback spinner.
- **Imagem de perfil:** `fetchPriority="high"` e `decoding="async"` no `<img>` do Hero.
- **Grain texture:** SVG inline no `body::before` com `opacity: 0.03` e `pointer-events: none`.
- **Transições globais desabilitadas:** `* { transition: none !important; }` no `index.css` — animações Framer Motion continuam funcionando normalmente.
- **Smooth scroll:** Lenis (biblioteca leve) ativado via hook `useSmoothScroll` em `Index.tsx`.

## Footer em Mobile

O Footer recebe `pb-20 md:pb-0` no wrapper (`Index.tsx`) para evitar que o conteúdo final fique escondido pela Bottom Navigation Bar fixa.
