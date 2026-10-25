import { JOURNEY } from '@/data/content';
import { Reveal } from '@/components/Reveal';

export function About() {
  return (
    <section id="about" className="relative py-20 md:py-32">
      <div className="shell">
        <span className="label mb-16 block" style={{ color: 'var(--text-primary)' }}>05 — About</span>

        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          {/* Left: large typography */}
          <Reveal className="md:col-span-7">
            <h2 className="text-display font-bold leading-[0.95] tracking-tight" style={{ color: 'var(--text-primary)' }}>
              A Developer
              <br />
              Who Thinks in
              <br />
              <span style={{ color: 'var(--text-secondary)' }}>Systems.</span>
            </h2>
          </Reveal>

          {/* Right: paragraph */}
          <Reveal delay={100} className="flex flex-col gap-6 md:col-span-5 md:pt-4">
            <p className="text-pretty text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              I'm Dhruv, a Python Full Stack Developer based in Ahmedabad, India.
              I build practical software — from backend architecture and APIs to
              frontend experiences and AI-powered applications.
            </p>
            <p className="text-pretty text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              My focus is on functional, maintainable solutions that solve real
              business problems. I work with Django, FastAPI and React, and I
              integrate modern AI capabilities where they add genuine value.
              I'm continuously learning and refining how I build.
            </p>

            {/* Journey timeline */}
            <div className="mt-6 border-t pt-8" style={{ borderColor: 'var(--border)' }}>
              <span className="label mb-6 block">Journey</span>
              <div className="relative flex flex-col gap-6">
                <div className="absolute bottom-2 left-[5px] top-2 w-px" style={{ backgroundColor: 'var(--border)' }} />
                {JOURNEY.map((j) => (
                  <div key={j.period} className="relative flex gap-5">
                    <span className="relative z-10 mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full border-2" style={{ borderColor: 'var(--accent)', backgroundColor: 'var(--background)' }} />
                    <div className="flex flex-col gap-0.5">
                      <span className="font-mono text-[11px] uppercase tracking-micro" style={{ color: 'var(--accent)' }}>
                        {j.period}
                      </span>
                      <span className="text-base font-medium" style={{ color: 'var(--text-primary)' }}>{j.title}</span>
                      <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>{j.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
