import { useEffect, useRef, useState } from 'react';

export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState('');
  const [hidden, setHidden] = useState(true);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouch(true);
      return;
    }

    let rx = window.innerWidth / 2;
    let ry = window.innerHeight / 2;
    let tx = rx;
    let ty = ry;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      setHidden(false);
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${tx}px, ${ty}px) translate(-50%, -50%)`;
      }
      const target = (e.target as HTMLElement)?.closest('[data-cursor]') as HTMLElement | null;
      setLabel(target?.dataset.cursor || '');
    };

    const onLeave = () => setHidden(true);

    const loop = () => {
      rx += (tx - rx) * 0.18;
      ry += (ty - ry) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseleave', onLeave);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  // Get theme colors
  const getThemeColors = () => {
    const isDark = document.documentElement.classList.contains('dark');
    return {
      dot: isDark ? '#FF4D24' : '#E84A25',
      ring: isDark ? 'rgba(245,245,242,0.2)' : 'rgba(0,0,0,0.1)',
      labelBg: isDark ? 'rgba(255,77,36,0.92)' : 'rgba(232,74,37,0.92)',
      labelColor: isDark ? '#080808' : '#F5F3EF'
    };
  };

  if (isTouch) return null;

  const colors = getThemeColors();

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-1.5 w-1.5 rounded-full transition-opacity duration-300"
        style={{ 
          backgroundColor: colors.dot,
          opacity: hidden ? 0 : 1 
        }}
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[9998] flex items-center justify-center rounded-full border transition-[width,height,opacity,background-color,border-color] duration-300 ease-smooth"
        style={{
          width: label ? 96 : 32,
          height: label ? 96 : 32,
          opacity: hidden ? 0 : 1,
          backgroundColor: label ? colors.labelBg : 'transparent',
          borderColor: label ? 'transparent' : colors.ring,
        }}
      >
        {label && (
          <span className="font-mono text-[10px] font-medium uppercase tracking-micro" style={{ color: colors.labelColor }}>
            {label}
          </span>
        )}
      </div>
    </>
  );
}
