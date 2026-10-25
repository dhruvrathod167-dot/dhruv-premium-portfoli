import { ArrowUp } from 'lucide-react';
import { PROFILE } from '@/data/content';

const LINKS = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export function Footer() {
  return (
    <footer className="relative border-t py-16 md:py-20" style={{ borderColor: 'var(--border)' }}>
      <div className="bg-noise pointer-events-none absolute inset-0 opacity-[0.02]" />
      <div className="shell relative">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          {/* Monogram */}
          <div className="flex flex-col gap-4">
            <span className="text-[clamp(4rem,12vw,9rem)] font-extrabold leading-none tracking-tighter" style={{ color: 'var(--text-primary)', opacity: 0.1 }}>
              {PROFILE.monogram}
            </span>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-3">
            <span className="label mb-2">Navigation</span>
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                data-cursor=""
                className="link-underline w-fit transition-colors duration-300"
                style={{ color: 'var(--text-secondary)' }}
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Social */}
          <div className="flex flex-col gap-3">
            <span className="label mb-2">Social</span>
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor=""
              className="link-underline w-fit transition-colors duration-300"
              style={{ color: 'var(--text-secondary)' }}
            >
              GitHub
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor=""
              className="link-underline w-fit transition-colors duration-300"
              style={{ color: 'var(--text-secondary)' }}
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${PROFILE.email}`}
              data-cursor=""
              className="link-underline w-fit transition-colors duration-300"
              style={{ color: 'var(--text-secondary)' }}
            >
              Email
            </a>
          </div>

          {/* Back to top */}
          <a
            href="#top"
            data-cursor="Top"
            className="group flex h-12 w-12 items-center justify-center rounded-full border transition-colors duration-300"
            style={{ 
              borderColor: 'var(--border)',
              color: 'var(--text-primary)'
            }}
          >
            <ArrowUp className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t pt-8 md:flex-row md:items-center md:justify-between" style={{ borderColor: 'var(--border)' }}>
          <p className="font-mono text-[11px] uppercase tracking-micro" style={{ color: 'var(--text-muted)' }}>
            © 2024 {PROFILE.name}
          </p>
          <p className="font-mono text-[11px] uppercase tracking-micro" style={{ color: 'var(--text-muted)' }}>
            Built with Python, React & modern web technologies
          </p>
        </div>
      </div>
    </footer>
  );
}
