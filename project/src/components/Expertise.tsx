import { ArrowUpRight } from 'lucide-react';
import { EXPERTISE } from '@/data/content';
import { Reveal } from '@/components/Reveal';

export function Expertise() {
  return (
    <section id="expertise" className="relative py-20 md:py-32">
      <div className="shell">
        <Reveal className="mb-16 flex flex-col gap-4 md:mb-24 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="label mb-5 block">03 — Capabilities</span>
            <h2 className="text-section font-bold" style={{ color: 'var(--text-primary)' }}>What I Build</h2>
          </div>
          <p className="max-w-sm text-pretty" style={{ color: 'var(--text-secondary)' }}>
            A focused set of capabilities across full stack engineering, AI
            integration and modern frontend experiences.
          </p>
        </Reveal>

        <div className="border-t" style={{ borderColor: 'var(--border)' }}>
          {EXPERTISE.map((item) => (
            <ExpertiseRow key={item.num} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExpertiseRow({
  num,
  title,
  desc,
  tech,
}: {
  num: string;
  title: string;
  desc: string;
  tech: string[];
}) {
  return (
    <div className="group border-b transition-colors duration-500 hover:bg-[var(--surface-hover)]" style={{ borderColor: 'var(--border)' }}>
      <div className="shell flex cursor-pointer items-center gap-6 py-8 md:py-10">
        <span className="font-mono text-sm transition-colors duration-500" style={{ color: 'var(--text-muted)' }}>
          {num}
        </span>
        <div className="flex flex-1 flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <h3 className="text-[clamp(1.5rem,3.5vw,2.5rem)] font-semibold tracking-tight transition-colors duration-500" style={{ color: 'var(--text-primary)' }}>
            {title}
          </h3>
          <p className="max-w-xs text-pretty text-sm transition-colors duration-500" style={{ color: 'var(--text-secondary)' }}>
            {desc}
          </p>
        </div>
        <div className="hidden items-center gap-2 md:flex">
          {tech.map((t) => (
            <span
              key={t}
              className="rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-micro"
              style={{ 
                borderColor: 'var(--border)',
                color: 'var(--text-muted)'
              }}
            >
              {t}
            </span>
          ))}
        </div>
        <ArrowUpRight className="h-5 w-5 transition-all duration-500" style={{ color: 'var(--text-muted)' }} />
      </div>
    </div>
  );
}
