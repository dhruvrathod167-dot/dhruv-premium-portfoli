import { useEffect, useRef } from 'react';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';

export function Hero({ ready }: { ready: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let raf = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    type Node = { x: number; y: number; vx: number; vy: number };
    let nodes: Node[] = [];

    const resize = () => {
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(50, Math.floor((w * h) / 22000));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
      }));
    };
    resize();
    window.addEventListener('resize', resize);

    const mouse = { x: -999, y: -999 };
    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    canvas.addEventListener('mousemove', onMove);

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;

        const dxm = n.x - mouse.x;
        const dym = n.y - mouse.y;
        const dm = Math.hypot(dxm, dym);
        if (dm < 140) {
          n.x += (dxm / dm) * 0.4;
          n.y += (dym / dm) * 0.4;
        }

        for (let j = i + 1; j < nodes.length; j++) {
          const m = nodes[j];
          const d = Math.hypot(n.x - m.x, n.y - m.y);
          if (d < 130) {
            const a = (1 - d / 130) * 0.18;
            const accentColor = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim();
            ctx.strokeStyle = accentColor.replace('rgb', 'rgba').replace(')', `, ${a})`);
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(m.x, m.y);
            ctx.stroke();
          }
        }

        const dmr = Math.hypot(n.x - mouse.x, n.y - mouse.y);
        if (dmr < 130) {
          const a = (1 - dmr / 130) * 0.4;
          const textColor = getComputedStyle(document.documentElement).getPropertyValue('--text-primary').trim();
          ctx.strokeStyle = textColor.replace('rgb', 'rgba').replace(')', `, ${a})`);
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(n.x, n.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }

        const nodeColor = getComputedStyle(document.documentElement).getPropertyValue('--text-primary').trim();
        ctx.fillStyle = nodeColor.replace('rgb', 'rgba').replace(')', ', 0.35)');
        ctx.beginPath();
        ctx.arc(n.x, n.y, 1, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', onMove);
    };
  }, []);

  const revealStyle = (i: number): React.CSSProperties => ({
    transform: ready ? 'translateY(0)' : 'translateY(110%)',
    transition: `transform 1s cubic-bezier(0.16,1,0.3,1) ${0.4 + i * 0.12}s`,
  });

  return (
    <section id="top" className="relative flex min-h-screen flex-col justify-end overflow-hidden pb-16 pt-32 md:pb-24">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full opacity-60"
        aria-hidden="true"
      />
      <div className="bg-noise pointer-events-none absolute inset-0 opacity-[0.03]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[var(--background)]/40 via-transparent to-[var(--background)]" />

      <div className="shell relative z-10">
        {/* Eyebrow */}
        <div
          className="mb-8 flex flex-wrap items-center gap-3 md:mb-10"
          style={{
            opacity: ready ? 1 : 0,
            transform: ready ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.8s cubic-bezier(0.16,1,0.3,1) 0.3s',
          }}
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full" style={{ backgroundColor: 'var(--accent)' }} />
          <span className="font-mono text-[12px] uppercase tracking-micro" style={{ color: 'var(--text-muted)' }}>
            Python Full Stack Developer
          </span>
          <span className="h-3 w-px" style={{ backgroundColor: 'var(--border)' }} />
          <span className="font-mono text-[12px] uppercase tracking-micro" style={{ color: 'var(--text-muted)' }}>
            AI Application Developer
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-hero font-extrabold" style={{ color: 'var(--text-primary)' }}>
          <span className="block overflow-hidden">
            <span className="block" style={revealStyle(0)}>
              Crafting
            </span>
          </span>
          <span className="block overflow-hidden">
            <span className="block" style={revealStyle(1)}>
              Digital
            </span>
          </span>
          <span className="block overflow-hidden">
              <span className="block" style={revealStyle(2)}>
                <span style={{ color: 'var(--accent)' }}>Realities.</span>
              </span>
          </span>
        </h1>

        {/* Bottom row */}
        <div className="mt-10 flex flex-col gap-8 md:mt-14 md:flex-row md:items-end md:justify-between">
          <p
            className="max-w-md text-pretty text-lg leading-relaxed md:text-xl"
            style={{
              color: 'var(--text-secondary)',
              opacity: ready ? 1 : 0,
              transform: ready ? 'translateY(0)' : 'translateY(16px)',
              transition: 'all 0.8s cubic-bezier(0.16,1,0.3,1) 0.9s',
            }}
          >
            Python Full Stack Developer focused on building modern web applications,
            APIs and AI-powered products.
          </p>

          <div
            className="flex flex-wrap items-center gap-3"
            style={{
              opacity: ready ? 1 : 0,
              transform: ready ? 'translateY(0)' : 'translateY(16px)',
              transition: 'all 0.8s cubic-bezier(0.16,1,0.3,1) 1.05s',
            }}
          >
            <a
              href="#work"
              data-cursor="View"
              className="group inline-flex items-center gap-2 rounded-full px-6 py-3.5 font-mono text-[13px] uppercase tracking-micro transition-colors duration-300"
              style={{ 
                backgroundColor: 'var(--surface)',
                color: 'var(--text-primary)'
              }}
            >
              View Selected Work
              <ArrowDownRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </a>
            <a
              href="#contact"
              data-cursor=""
              className="group inline-flex items-center gap-2 rounded-full border px-6 py-3.5 font-mono text-[13px] uppercase tracking-micro transition-colors duration-300"
              style={{ 
                color: 'var(--text-primary)',
                borderColor: 'var(--border)'
              }}
            >
              Let's Connect
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
        style={{
          opacity: ready ? 1 : 0,
          transition: 'opacity 0.8s ease 1.3s',
        }}
      >
        <span className="font-mono text-[10px] uppercase tracking-label" style={{ color: 'var(--text-muted)' }}>Scroll</span>
        <div className="h-10 w-px overflow-hidden" style={{ backgroundColor: 'var(--border)' }}>
          <div className="h-1/2 w-full animate-[slide_2s_ease-in-out_infinite]" style={{ backgroundColor: 'var(--accent)' }} />
        </div>
      </div>

      <style>{`@keyframes slide{0%{transform:translateY(-100%)}100%{transform:translateY(200%)}}`}</style>
    </section>
  );
}
