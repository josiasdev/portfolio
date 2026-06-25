# Mobile Documentation

Este documento descreve as estratégias e padrões utilizados para garantir a melhor experiência mobile (Responsividade App-Like).

## Estratégias

- **Breakpoints:** Tailwind `md:`, `lg:`, `sm:` utilities para layouts responsivos.
- **Bottom Navigation Bar:** Substituímos o clássico Side Menu (Hamburguer) de tela cheia por uma Navbar inferior fixa com ícones (Lucide React), aumentando muito a ergonomia e imitando a navegação de aplicativos nativos.
- **Dynamic Viewports (`dvh`):** Uso da classe `min-h-[100dvh]` no Root e no Hero para evitar os bugs onde as barras nativas de endereço de navegadores móveis (Safari, Chrome) escondem o conteúdo da interface inferior.
- **Touch Targets Seguros:** Todos os botões críticos (ex: Filtros de Projetos, Links Github/Demo) possuem tamanho mínimo de `min-h-[44px]`, obedecendo diretrizes restritas de acessibilidade e prevenindo "miss clicks" no celular.
- **Safe Area Bottom:** Uso da variável CSS `env(safe-area-inset-bottom)` na Navbar inferior para evitar colisão visual com a "linha do Face ID" nos iPhones.
- **Remoção de Obstruções:** 
  - Cursor modificado desativado em telas sensíveis ao toque.
  - O antigo `WhatsAppButton` flutuante foi apagado do projeto definitivamente para evitar que colidisse visualmente e fisicamente com a nova Bottom Navigation Bar.
