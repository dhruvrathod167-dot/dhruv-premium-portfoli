import { useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PROFILE } from '@/data/content';
import { useScrollProgress } from '@/components/Reveal';
import { ThemeToggle } from '@/components/ThemeToggle';

const LINKS = [
  { label: 'Work', href: '#work' },
  { label: 'Clients', href: '#clients' },
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar({ ready }: { ready: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const progress = useScrollProgress();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <header
        className="fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-smooth"
        style={{
          transform: ready ? 'translateY(0)' : 'translateY(-100%)',
          opacity: ready ? 1 : 0,
        }}
      >
        <div
          className="transition-all duration-500 ease-smooth"
          style={{
            backgroundColor: scrolled ? 'var(--nav-background)' : 'transparent',
            backdropFilter: scrolled ? 'blur(14px)' : 'none',
            borderBottom: scrolled ? `1px solid var(--border)` : '1px solid transparent',
          }}
        >
          <nav className="shell flex h-16 items-center justify-between md:h-20">
            <a
              href="#top"
              data-cursor=""
              className="font-mono text-sm font-bold tracking-tight"
              style={{ color: 'var(--text-primary)' }}
            >
              {PROFILE.monogram}
              <span className="text-ember-500">.</span>
            </a>

            <div className="hidden items-center gap-8 md:flex">
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  data-cursor=""
                  className="link-underline font-mono text-[12px] uppercase tracking-micro transition-colors duration-300"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {l.label}
                </a>
              ))}
            </div>

            <div className="hidden items-center gap-4 md:flex">
              <ThemeToggle />
              <a
                href="#contact"
                data-cursor="Talk"
                className="group hidden items-center gap-1.5 rounded-full border px-4 py-2 font-mono text-[12px] uppercase tracking-micro transition-colors duration-300"
                style={{ 
                  color: 'var(--text-primary)',
                  borderColor: 'var(--border)'
                }}
              >
                Let's Talk
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

              <button
                onClick={() => setOpen((v) => !v)}
                aria-label="Menu"
                className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
              >
                <span
                  className="h-px w-6 transition-all duration-300"
                  style={{ 
                    backgroundColor: 'var(--text-primary)',
                    transform: open ? 'rotate(45deg) translateY(4px)' : '' 
                  }}
                />
                <span
                  className="h-px w-6 transition-all duration-300"
                  style={{ 
                    backgroundColor: 'var(--text-primary)',
                    transform: open ? 'rotate(-45deg) translateY(-4px)' : '' 
                  }}
                />
              </button>
          </nav>
        </div>
        <div className="h-px w-full" style={{ backgroundColor: 'var(--border)' }}>
          <div
            className="h-full bg-ember-500 transition-[width] duration-150 ease-out"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className="fixed inset-0 z-40 flex flex-col justify-center backdrop-blur-xl transition-all duration-500 ease-smooth md:hidden"
        style={{
          backgroundColor: open ? 'var(--nav-background)' : 'transparent',
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'auto' : 'none',
        }}
      >
        <div className="bg-noise pointer-events-none absolute inset-0 opacity-[0.04]" />
        <div className="shell relative flex flex-col gap-6">
          {LINKS.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-4xl font-bold tracking-tight"
              style={{ 
                color: 'var(--text-primary)',
                transform: open ? 'translateY(0)' : 'translateY(20px)',
                opacity: open ? 1 : 0,
                transition: `transform 0.5s ease-smooth ${i * 70}ms, opacity 0.5s ease-smooth ${i * 70}ms`,
              }}
            >
              <span className="mr-3 font-mono text-sm" style={{ color: 'var(--accent)' }}>0{i + 1}</span>
              {l.label}
            </a>
          ))}
          <div className="flex items-center gap-4 mt-4">
            <ThemeToggle />
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="inline-flex w-fit items-center gap-2 rounded-full px-6 py-3 font-mono text-sm uppercase tracking-micro"
              style={{ 
                backgroundColor: 'var(--accent)',
                color: 'var(--background)'
              }}
            >
              Let's Talk <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
