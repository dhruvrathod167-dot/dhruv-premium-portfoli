import { ArrowUpRight } from 'lucide-react';
import { PROJECTS, type Project } from '@/data/content';
import { Reveal } from '@/components/Reveal';

export function Work({ onOpen }: { onOpen: (id: string) => void }) {
  return (
    <section id="work" className="relative py-20 md:py-32">
      <div className="shell">
        <Reveal className="mb-16 flex flex-col gap-4 md:mb-24 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="label mb-5 block">01 / Selected Projects</span>
            <h2 className="text-section font-bold" style={{ color: 'var(--text-primary)' }}>Selected Work</h2>
          </div>
          <p className="max-w-sm text-pretty" style={{ color: 'var(--text-secondary)' }}>
            A carefully selected collection of digital products, web applications
            and AI-powered experiences.
          </p>
        </Reveal>

        <div className="flex flex-col">
          {PROJECTS.map((p, i) => (
            <ProjectRow key={p.id} project={p} flipped={i % 2 === 1} onOpen={onOpen} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectRow({
  project,
  flipped,
  onOpen,
}: {
  project: Project;
  flipped: boolean;
  onOpen: (id: string) => void;
}) {
  return (
    <Reveal>
      <div id={`work-${project.id}`} className="scroll-mt-24">
        <button
          onClick={() => project.external ? window.open(project.link, '_blank', 'noopener noreferrer') : onOpen(project.id)}
          data-cursor="View"
          className="group block w-full border-t py-8 text-left transition-colors duration-500 last:border-b hover:bg-[var(--surface-hover)] md:py-12"
          style={{ 
            borderColor: 'var(--border)',
            backgroundColor: 'var(--surface)'
          }}
        >
          <div className={`flex flex-col gap-8 md:flex-row md:items-center ${flipped ? 'md:flex-row-reverse' : ''}`}>
            {/* Image */}
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg md:w-[52%]">
                {project.external ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full w-full"
                  >
                    <img
                      src={project.image}
                      alt={`${project.name} — ${project.tagline}`}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1.2s] ease-smooth group-hover:scale-[1.04] cursor-pointer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)]/60 to-transparent opacity-60" />
                    <span className="absolute left-4 top-4 font-mono text-[11px] uppercase tracking-label" style={{ color: 'var(--text-primary)', opacity: 0.8 }}>
                      {project.index}
                    </span>
                    <div className="absolute top-4 right-4 flex items-center gap-1.5 rounded-full bg-black/20 backdrop-blur-sm px-2.5 py-1.5">
                      <span className="font-mono text-[9px] uppercase tracking-micro" style={{ color: 'var(--background)' }}>
                        VIEW LIVE ↗
                      </span>
                    </div>
                  </a>
                ) : (
                  <>
                    <img
                      src={project.image}
                      alt={`${project.name} — ${project.tagline}`}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1.2s] ease-smooth group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)]/60 to-transparent opacity-60" />
                    <span className="absolute left-4 top-4 font-mono text-[11px] uppercase tracking-label" style={{ color: 'var(--text-primary)', opacity: 0.8 }}>
                      {project.index}
                    </span>
                  </>
                )}
              </div>

            {/* Info */}
            <div className="flex-1 flex-col gap-4">
              <div className="flex items-center gap-3">
                {project.external && (
                  <span className="font-mono text-[11px] uppercase tracking-label" style={{ color: 'var(--accent)' }}>
                    CLIENT PROJECT
                  </span>
                )}
                <span className="font-mono text-[11px] uppercase tracking-label" style={{ color: project.category === 'Client Project' ? 'var(--accent)' : 'var(--text-muted)' }}>
                  {project.category || project.service}
                </span>
                <span className="h-3 w-px" style={{ backgroundColor: 'var(--border)' }} />
                <span className="font-mono text-[11px] uppercase tracking-label" style={{ color: 'var(--text-muted)' }}>
                  {project.year}
                </span>
              </div>

              <h3 className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-none tracking-tight transition-colors duration-500" style={{ color: 'var(--text-primary)' }}>
                {project.name}
                {project.external && (
                  <span className="block text-[clamp(1.2rem,2.5vw,1.8rem)] font-normal mt-2" style={{ color: 'var(--text-secondary)' }}>
                    Architecture, Interiors & Materiality
                  </span>
                )}
              </h3>

              <p className="max-w-md text-pretty transition-colors duration-500" style={{ color: 'var(--text-secondary)' }}>
                {project.description}
              </p>

              <div className="mt-2 flex flex-wrap gap-2">
                {project.stack.map((t) => (
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

              <span className="mt-3 inline-flex items-center gap-1.5 font-mono text-[12px] uppercase tracking-micro" style={{ color: 'var(--text-primary)' }}>
                {project.external ? 'View Live Project' : 'View Case Study'}
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>

              {/* Client Feedback Section */}
              {project.external && project.feedback && (
                <div className="mt-6 border-t pt-6" style={{ borderColor: 'var(--border)' }}>
                  <blockquote className="text-pretty text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    "{project.feedback}"
                  </blockquote>
                </div>
              )}

              {/* Project Collaboration Section */}
              {project.external && project.collaboration && (
                <div className="mt-4 border-t pt-4" style={{ borderColor: 'var(--border)' }}>
                  <p className="text-sm font-mono uppercase tracking-micro mb-2" style={{ color: 'var(--accent)' }}>Project Collaboration</p>
                  <p className="text-pretty text-sm" style={{ color: 'var(--text-secondary)' }}>
                    {project.collaboration}
                  </p>
                </div>
              )}
            </div>
          </div>
        </button>
      </div>
    </Reveal>
  );
}