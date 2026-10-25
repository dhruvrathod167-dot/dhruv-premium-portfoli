import { ArrowUpRight } from 'lucide-react';
import { CLIENTS } from '@/data/content';
import { Reveal } from '@/components/Reveal';

export function Clients() {
  return (
    <section id="clients" className="relative py-20 md:py-32">
      <div className="shell">
        <Reveal className="mb-16 flex flex-col gap-4 md:mb-24 md:flex-row md:items-start md:justify-between">
          <div className="md:max-w-md">
            <span className="label mb-5 block">07 / CLIENT EXPERIENCE</span>
            <div>
              <h2 className="text-section font-bold leading-tight">
                CLIENTS
                <br />
                <span className="font-light">&amp;</span>
                <br />
                COLLABORATIONS
              </h2>
            </div>
          </div>
          <p className="max-w-sm text-pretty" style={{ color: 'var(--text-secondary)' }}>
            A selection of projects, collaborations and professional work delivered with a focus on thoughtful design, reliable engineering and practical digital solutions.
          </p>
        </Reveal>

        <div className="border-t" style={{ borderColor: 'var(--border)' }}>
          {CLIENTS.map((client, i) => (
            <ClientRow key={client.num} client={client} index={i} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="font-mono text-sm uppercase tracking-micro" style={{ color: 'var(--text-muted)' }}>
            AVAILABLE FOR FREELANCE / REMOTE / INTERNATIONAL PROJECTS
          </p>
        </div>
      </div>
    </section>
  );
}

function ClientRow({ client, index }: { client: typeof CLIENTS[0]; index: number }) {
  return (
    <Reveal delay={index * 100}>
      <div className="group border-b transition-colors duration-500 hover:bg-[var(--surface-hover)]" style={{ borderColor: 'var(--border)' }}>
        <div className="shell flex cursor-pointer items-center gap-8 py-12 md:py-16">
          <div className="flex flex-col items-center gap-1">
            <span className="font-mono text-2xl font-bold transition-colors duration-500" style={{ color: 'var(--text-secondary)' }}>
              {client.num}
            </span>
            <div className="h-px w-12" style={{ backgroundColor: 'var(--border)' }} />
          </div>

          <div className="flex-1">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-[clamp(1.5rem,3vw,2.25rem)] font-bold tracking-tight transition-colors duration-500" style={{ color: 'var(--text-primary)' }}>
                  {client.name}
                </h3>
                <div className="flex flex-wrap gap-4 mt-2">
                  <span className="font-mono text-sm uppercase tracking-micro" style={{ color: 'var(--accent)' }}>
                    {client.service}
                  </span>
                  <span className="font-mono text-sm uppercase tracking-micro" style={{ color: 'var(--text-muted)' }}>
                    {client.year}
                  </span>
                </div>
              </div>
              <a
                href={client.link}
                data-cursor="View"
                className="group inline-flex items-center gap-1.5 font-mono text-sm uppercase tracking-micro transition-all duration-300"
                style={{ color: 'var(--text-primary)' }}
              >
                VIEW PROJECT
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </div>
            <p className="mt-4 max-w-2xl text-pretty" style={{ color: 'var(--text-secondary)' }}>
              {client.description}
            </p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}