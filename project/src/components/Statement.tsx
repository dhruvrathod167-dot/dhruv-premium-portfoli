import { useEffect, useRef, useState } from 'react';

export function Statement() {
  const ref = useRef<HTMLParagraphElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = rect.height + vh * 0.6;
      const scrolled = vh - rect.top;
      setProgress(Math.max(0, Math.min(1, scrolled / total)));
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const text =
    'I build modern web applications where robust backend engineering meets thoughtful interface design and practical AI.';
  const words = text.split(' ');

  return (
    <section className="relative py-28 md:py-48">
      <div className="shell">
        <span className="label mb-10 block">02 — Positioning</span>
        <p
          ref={ref}
          className="max-w-5xl text-balance text-[clamp(1.6rem,4.5vw,3.5rem)] font-semibold leading-[1.15] tracking-tight"
        >
          {words.map((word, i) => (
            <span
              key={i}
              className="transition-colors duration-300"
              style={{
                color: 'var(--text-primary)',
              }}
            >
              {word}{' '}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
