import { ReactNode, useRef, useEffect, useState } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  threshold?: number;
  rootMargin?: string;
}

const ScrollReveal = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  threshold = 0.08,
  rootMargin = '0px 0px -50px 0px',
}: ScrollRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const directionMap = {
    up:    'translate-y-8',
    down:  '-translate-y-8',
    left:  'translate-x-8',
    right: '-translate-x-8',
    none:  '',
  };

  const initialClass = `opacity-0 ${directionMap[direction]}`;
  const visibleClass = 'opacity-100 translate-y-0 translate-x-0';

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? visibleClass : initialClass
      } ${className}`}
      style={{ transitionDelay: isVisible ? `${delay}ms` : '0ms' }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
