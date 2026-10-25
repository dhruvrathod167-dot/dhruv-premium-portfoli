import { useEffect, useState } from 'react';

export function Loader({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    let p = 0;
    const tick = () => {
      p += Math.random() * 18 + 6;
      if (p >= 100) {
        p = 100;
        setProgress(100);
        setTimeout(() => setExiting(true), 300);
        setTimeout(onDone, 1100);
        return;
      }
      setProgress(p);
      setTimeout(tick, 80 + Math.random() * 60);
    };
    tick();
  }, [onDone]);

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center transition-transform duration-700 ease-expo"
      style={{ 
        transform: exiting ? 'translateY(-100%)' : 'translateY(0)',
        backgroundColor: 'var(--background)'
      }}
    >
      <div className="bg-noise pointer-events-none absolute inset-0 opacity-[0.04]" />
      <div className="relative flex flex-col items-center">
        <span className="font-mono text-[11px] uppercase tracking-label" style={{ color: 'var(--text-muted)' }}>
          Portfolio
        </span>
        <span className="mt-4 text-[clamp(3rem,10vw,7rem)] font-extrabold leading-none tracking-tight" style={{ color: 'var(--text-primary)' }}>
          DR
        </span>
        <div className="mt-8 h-px w-48 overflow-hidden" style={{ backgroundColor: 'var(--border)' }}>
          <div
            className="h-full transition-[width] duration-200 ease-smooth"
            style={{ 
              width: `${progress}%`,
              backgroundColor: 'var(--accent)'
            }}
          />
        </div>
        <span className="mt-3 font-mono text-[11px] tracking-micro" style={{ color: 'var(--text-muted)' }}>
          {Math.round(progress)}%
        </span>
      </div>
    </div>
  );
}
