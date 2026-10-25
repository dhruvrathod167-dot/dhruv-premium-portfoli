import { AI_CAPS, TECH } from '@/data/content';
import { Reveal } from '@/components/Reveal';

export function CodeAI() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-40" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[60vh] w-[60vh] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px]" style={{ backgroundColor: 'var(--accent)', opacity: 0.1 }} />

      <div className="shell relative">
        <Reveal className="mb-16 text-center">
          <span className="label mb-5 block">04 — Differentiator</span>
          <h2 className="text-display font-bold">
            Code <span style={{ color: 'var(--accent)' }}>×</span> AI
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-pretty" style={{ color: 'var(--text-secondary)' }}>
            Integrating modern AI capabilities into useful applications — from
            conversation interfaces to automation workflows.
          </p>
        </Reveal>

        <Reveal delay={100} className="mx-auto flex max-w-3xl flex-wrap justify-center gap-3">
          {AI_CAPS.map((cap, i) => (
            <span
              key={cap}
              className="group rounded-full border px-5 py-2.5 font-mono text-sm transition-all duration-300"
              style={{ 
                borderColor: 'var(--border)',
                backgroundColor: 'var(--surface)',
                color: 'var(--text-secondary)',
                transitionDelay: `${i * 20}ms`
              }}
            >
              {cap}
            </span>
          ))}
        </Reveal>

        {/* Tech wall */}
        <Reveal delay={200} className="mt-20 border-t pt-12" style={{ borderColor: 'var(--border)' }}>
          <span className="label mb-6 block text-center">Technology Stack</span>
          <div className="mask-fade-x flex flex-wrap justify-center gap-x-8 gap-y-4 md:flex-nowrap md:overflow-hidden">
            {TECH.map((t) => (
              <span
                key={t}
                className="font-mono text-sm uppercase tracking-micro transition-colors duration-300 md:text-base"
                style={{ color: 'var(--text-secondary)' }}
              >
                {t}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
