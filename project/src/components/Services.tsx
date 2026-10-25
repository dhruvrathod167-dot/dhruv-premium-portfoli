import { SERVICES, PROCESS, WHY } from '@/data/content';
import { Reveal } from '@/components/Reveal';
import { ArrowUpRight } from 'lucide-react';

export function Services() {
  return (
    <section id="services" className="relative py-20 md:py-32">
      <div className="shell">
        <Reveal className="mb-16 flex flex-col gap-4 md:mb-24 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="label mb-5 block">06 — Services</span>
            <h2 className="text-section font-bold" style={{ color: 'var(--text-primary)' }}>How I Can Help</h2>
          </div>
          <p className="max-w-sm text-pretty" style={{ color: 'var(--text-secondary)' }}>
            From complete full stack applications to focused API and AI integration
            work.
          </p>
        </Reveal>

        <div 
          className="grid gap-px overflow-hidden rounded-lg border md:grid-cols-2"
          style={{ borderColor: 'var(--border)' }}
        >
          {SERVICES.map((s) => (
            <div
              key={s.num}
              className="group flex items-start gap-5 p-6 transition-colors duration-500 hover:bg-[var(--surface-hover)] md:p-8"
              style={{ backgroundColor: 'var(--surface)' }}
            >
              <span className="font-mono text-sm transition-colors duration-500" style={{ color: 'var(--text-muted)' }}>
                {s.num}
              </span>
              <div className="flex flex-1 flex-col gap-1.5">
                <h3 className="text-lg font-semibold transition-transform duration-500 group-hover:translate-x-1 md:text-xl" style={{ color: 'var(--text-primary)' }}>
                  {s.title}
                </h3>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{s.desc}</p>
              </div>
              <ArrowUpRight className="h-4 w-4 transition-all duration-500" style={{ color: 'var(--text-muted)' }} />
            </div>
          ))}
        </div>
      </div>

      {/* Process */}
      <div className="shell mt-28 md:mt-40">
        <Reveal className="mb-12">
          <span className="label mb-5 block">07 — Process</span>
          <h2 className="text-section font-bold" style={{ color: 'var(--text-primary)' }}>How I Work</h2>
        </Reveal>

        <div className="grid gap-px overflow-hidden border-t" style={{ borderColor: 'var(--border)' }} md:grid-cols-6>
          {PROCESS.map((p, i) => (
            <Reveal
              key={p.num}
              delay={i * 80}
              className="border-b p-6 md:border-r md:p-8" style={{ borderColor: 'var(--border)' }}
            >
              <span className="font-mono text-2xl font-bold transition-colors duration-500" style={{ color: 'var(--text-secondary)' }}>
                {p.num}
              </span>
              <h3 className="mt-3 text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>{p.title}</h3>
              <p className="mt-1 text-sm" style={{ color: 'var(--text-secondary)' }}>{p.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Why */}
      <div className="shell mt-28 md:mt-40">
        <Reveal className="mb-12">
          <span className="label mb-5 block">08 — Positioning</span>
          <h2 className="text-section font-bold" style={{ color: 'var(--text-primary)' }}>Why Work With Me</h2>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {WHY.map((w, i) => (
            <Reveal
              key={w.num}
              delay={i * 80}
              className="flex gap-6 border-t pt-8" style={{ borderColor: 'var(--border)' }}
            >
              <span className="font-mono text-sm" style={{ color: 'var(--accent)' }}>{w.num}</span>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold" style={{ color: 'var(--text-primary)' }}>{w.title}</h3>
                <p className="text-pretty" style={{ color: 'var(--text-secondary)' }}>{w.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}