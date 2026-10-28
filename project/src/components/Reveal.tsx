import { useEffect, useRef, useState } from 'react';

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
}; 

export function Reveal({ children, className = '', delay = 0, y = 24, once = true }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) obs.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [once]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform: visible ? 'translateY(0)' : `translateY(${y}px)`,
        opacity: visible ? 1 : 0,
        transition: `transform 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}ms, opacity 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
        willChange: 'transform, opacity',
      }}
    >
      {children}
    </div>
  );
}

export function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? h.scrollTop / max : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return progress;
}
