import { useEffect } from 'react';
import Lenis from 'lenis';

export const useSmoothScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // O efeito "amanteigado"
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Adiciona uma classe ao body enquanto estiver fazendo scroll (útil para pausar pointer-events)
    lenis.on('scroll', () => {
      // Opcional: lógicas no scroll
    });

    return () => {
      lenis.destroy();
    };
  }, []);
};
