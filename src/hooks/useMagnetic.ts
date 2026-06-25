import { useEffect, useRef } from 'react';

export const useMagnetic = (power = 0.5) => {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement | HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Detect if device supports hover (ignores touch devices to avoid layout jumps)
    const isHoverableDevice = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!isHoverableDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = el.getBoundingClientRect();
      
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      
      const deltaX = clientX - centerX;
      const deltaY = clientY - centerY;
      
      // Mover o elemento levemente em direção ao mouse
      el.style.transform = `translate(${deltaX * power}px, ${deltaY * power}px)`;
    };

    const handleMouseLeave = () => {
      // Retornar suavemente ao centro usando CSS transition
      el.style.transform = 'translate(0px, 0px)';
    };

    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [power]);

  return ref;
};
