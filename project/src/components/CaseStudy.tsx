import { useEffect, useState } from 'react';
import { X, ArrowRight } from 'lucide-react';
import { PROJECTS, type Project } from '@/data/content';

export function CaseStudy({ projectId, onClose }: { projectId: string | null; onClose: () => void }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (projectId) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [projectId]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  if (!projectId) return null;
  const project = PROJECTS.find((p) => p.id === projectId);
  if (!project) return null;

  const projectIndex = PROJECTS.findIndex((p) => p.id === projectId);
  const nextProject = PROJECTS[(projectIndex + 1) % PROJECTS.length];

  return (
    <div
      className="fixed inset-0 z-[80] overflow-y-auto transition-opacity duration-500 ease-smooth"
      style={{ 
        backgroundColor: 'var(--background)',
        opacity: mounted ? 1 : 0 
      }}
    >
      <div className="bg-noise pointer-events-none absolute inset-0 opacity-[0.03]" />

      {/* Close */}
      <button
        onClick={onClose}
        aria-label="Close case study"
        data-cursor="Close"
        className="fixed right-6 top-20 z-[85] flex h-11 w-11 items-center justify-center rounded-full border transition-colors duration-300"
        style={{ 
          borderColor: 'var(--border)',
          color: 'var(--text-primary)'
        }}
      >
        <X className="h-5 w-5" />
      </button>

      {/* Hero */}
      <div className="relative pt-32 md:pt-40">
        <div className="shell">
          <span className="font-mono text-[11px] uppercase tracking-label" style={{ color: 'var(--accent)' }}>
            {project.category} / {project.year}
          </span>
          <h1 className="mt-6 text-[clamp(3rem,12vw,9rem)] font-extrabold leading-[0.9] tracking-tight" style={{ color: 'var(--text-primary)' }}>
            {project.name}
          </h1>
          <p className="mt-4 max-w-xl text-pretty text-xl" style={{ color: 'var(--text-secondary)' }}>{project.tagline}</p>
        </div>

        <div className="shell mt-12">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg">
            <img
              src={project.image}
              alt={`${project.name} — ${project.tagline}`}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)]/50 to-transparent" />
          </div>
        </div>

        {/* Metadata */}
        <div className="shell mt-12 grid grid-cols-2 gap-6 border-t pt-10 md:grid-cols-4" style={{ borderColor: 'var(--border)' }}>
          <Meta label="Role" value={project.role} />
          <Meta label="Year" value={project.year} />
          <Meta label="Category" value={project.category} />
          <div className="flex flex-col gap-2">
            <span className="label">Stack</span>
            <div className="flex flex-wrap gap-1.5">
              {project.stack.map((s) => (
                <span key={s} className="font-mono text-sm" style={{ color: 'var(--text-secondary)' }}>
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Story sections */}
      <div className="shell mt-24 flex flex-col gap-20 md:mt-32 md:gap-28">
        <Section title="The Challenge" body={project.challenge} num="01" />
        <Section title="The Approach" body={project.approach} num="02" />
        <Section title="The Solution" body={project.solution} num="03" />

        {/* Key features */}
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <span className="font-mono text-sm" style={{ color: 'var(--accent)' }}>04</span>
            <h2 className="mt-3 text-[clamp(1.8rem,4vw,2.8rem)] font-bold tracking-tight" style={{ color: 'var(--text-primary)' }}>
              Key Features
            </h2>
          </div>
          <div className="flex flex-col gap-px md:col-span-8">
            {project.features.map((f, i) => (
              <div
                key={i}
                className="flex items-center gap-4 border-t py-5 last:border-b"
                style={{ borderColor: 'var(--border)' }}
              >
                <span className="font-mono text-sm" style={{ color: 'var(--text-muted)' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span style={{ color: 'var(--text-secondary)' }}>{f}</span>
              </div>
            ))}
          </div>
        </div>

        <Section title="Outcome" body={project.outcome} num="05" />

        {/* Visual */}
        <div className="relative aspect-[21/9] w-full overflow-hidden rounded-lg">
          <img
            src={project.image}
            alt={`${project.name} showcase`}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>

      {/* Next project */}
      <div className="shell mt-24 border-t py-16 md:mt-32 md:py-24" style={{ borderColor: 'var(--border)' }}>
        <span className="label mb-6 block">Next Project</span>
        <a
          href={`#work-${nextProject.id}`}
          onClick={(e) => {
            e.preventDefault();
            onClose();
            setTimeout(() => {
              const el = document.getElementById(`work-${nextProject.id}`);
              el?.scrollIntoView({ behavior: 'smooth' });
              setTimeout(() => el?.click(), 800);
            }, 600);
          }}
          data-cursor="Next"
          className="group flex items-center justify-between"
        >
          <span className="text-[clamp(2rem,8vw,5rem)] font-bold tracking-tight transition-colors duration-500" style={{ color: 'var(--text-secondary)' }}>
            {nextProject.name}
          </span>
          <ArrowRight className="h-8 w-8 transition-all duration-500" style={{ color: 'var(--text-secondary)' }} />
        </a>
      </div>
    </div>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-2">
      <span className="label">{label}</span>
      <span style={{ color: 'var(--text-primary)' }}>{value}</span>
    </div>
  );
}

function Section({ title, body, num }: { title: string; body: string; num: string }) {
  return (
    <div className="grid gap-8 md:grid-cols-12 md:gap-12">
      <div className="md:col-span-4">
        <span className="font-mono text-sm" style={{ color: 'var(--accent)' }}>{num}</span>
        <h2 className="mt-3 text-[clamp(1.8rem,4vw,2.8rem)] font-bold tracking-tight" style={{ color: 'var(--text-primary)' }}>
          {title}
        </h2>
      </div>
      <p className="max-w-2xl text-pretty text-lg leading-relaxed md:col-span-8 md:text-xl" style={{ color: 'var(--text-secondary)' }}>
        {body}
      </p>
    </div>
  );
}
