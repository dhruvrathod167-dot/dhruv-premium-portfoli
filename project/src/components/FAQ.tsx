import { useState } from 'react';
import { Plus } from 'lucide-react';
import { FAQS } from '@/data/content';
import { Reveal } from '@/components/Reveal';

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative py-20 md:py-32">
      <div className="shell">
        <Reveal className="mb-16 flex flex-col gap-4 md:mb-20 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="label mb-5 block">09 — Questions</span>
            <h2 className="text-section font-bold" style={{ color: 'var(--text-primary)' }}>FAQ</h2>
          </div>
          <p className="max-w-sm text-pretty" style={{ color: 'var(--text-secondary)' }}>
            Common questions about how I work and what I build.
          </p>
        </Reveal>

        <div className="border-t" style={{ borderColor: 'var(--border)' }}>
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="border-b" style={{ borderColor: 'var(--border)' }}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="group flex w-full items-center justify-between gap-6 py-6 text-left md:py-8"
                  aria-expanded={isOpen}
                >
                  <span
                    className="text-pretty text-[clamp(1.1rem,2.5vw,1.6rem)] font-semibold tracking-tight transition-colors duration-300 md:text-2xl"
                    style={{ color: isOpen ? 'var(--text-primary)' : 'var(--text-muted)' }}
                  >
                    {f.q}
                  </span>
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-500"
                    style={{
                      transform: isOpen ? 'rotate(45deg)' : 'rotate(0)',
                      borderColor: isOpen ? 'var(--accent)' : 'var(--border)',
                      backgroundColor: isOpen ? 'var(--accent)' + '20' : 'transparent',
                    }}
                  >
                    <Plus className="h-4 w-4" style={{ color: isOpen ? 'var(--background)' : 'var(--text-muted)' }} />
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-all duration-500 ease-smooth"
                  style={{ maxHeight: isOpen ? 200 : 0, opacity: isOpen ? 1 : 0 }}
                >
                  <p className="max-w-2xl pb-6 text-pretty md:pb-8 md:text-lg" style={{ color: 'var(--text-secondary)' }}>
                    {f.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
