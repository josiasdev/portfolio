import { ReactNode, useRef, useEffect, HTMLAttributes } from 'react';

interface MagneticProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  power?: number;
}

export const Magnetic = ({ children, power = 0.4, className = '', ...props }: MagneticProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Detect if device supports hover
    const isHoverableDevice = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!isHoverableDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = el.getBoundingClientRect();
      
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      
      const deltaX = clientX - centerX;
      const deltaY = clientY - centerY;
      
      el.style.transform = `translate(${deltaX * power}px, ${deltaY * power}px)`;
    };

    const handleMouseLeave = () => {
      el.style.transform = 'translate(0px, 0px)';
    };

    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [power]);

  return (
    <div 
      ref={ref} 
      className={`inline-block transition-transform duration-300 ease-out hover:duration-100 ${className}`} 
      {...props}
    >
      {children}
    </div>
  );
};
