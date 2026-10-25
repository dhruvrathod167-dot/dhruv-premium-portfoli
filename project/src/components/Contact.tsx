import { useState, type FormEvent } from 'react';
import { ArrowUpRight, Mail, Github, Linkedin, Send } from 'lucide-react';
import { PROFILE } from '@/data/content';
import { Reveal } from '@/components/Reveal';

type Status = 'idle' | 'loading' | 'success' | 'error';

export function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const [form, setForm] = useState({ name: '', email: '', type: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Please enter your name';
    if (!form.email.trim()) e.email = 'Please enter your email';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Please enter a valid email';
    if (!form.message.trim()) e.message = 'Please enter a message';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setStatus('loading');
    try {
      const res = await fetch('https://formsubmit.co/ajax/dhruvrathod167@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          _subject: `Project inquiry from ${form.name}`,
          ProjectType: form.type,
          message: form.message,
        }),
      });
      if (!res.ok) throw new Error('Failed');
      setStatus('success');
      setForm({ name: '', email: '', type: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden py-20 md:py-32">
      {/* Final CTA */}
      <div className="shell mb-28 md:mb-40">
        <Reveal className="text-center">
          <span className="eyebrow mb-6 block">Let's Build</span>
          <h2 className="text-hero font-extrabold leading-[0.92] tracking-tight">
            Let's Build
            <br />
            Something
            <br />
            <span style={{ color: 'var(--accent)' }}>Useful.</span>
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-pretty text-lg" style={{ color: 'var(--text-secondary)' }}>
            Have an idea, product or AI-powered workflow in mind? Let's turn it
            into a polished digital experience.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#contact-form"
              data-cursor="Start"
              className="group inline-flex items-center gap-2 rounded-full px-7 py-4 font-mono text-[13px] uppercase tracking-micro transition-colors duration-300"
              style={{ 
                backgroundColor: 'var(--accent)',
                color: 'var(--background)'
              }}
            >
              Start a Project
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href={`mailto:${PROFILE.email}`}
              data-cursor=""
              className="inline-flex items-center gap-2 rounded-full border px-7 py-4 font-mono text-[13px] uppercase tracking-micro transition-colors duration-300"
              style={{ 
                color: 'var(--text-primary)',
                borderColor: 'var(--border)'
              }}
            >
              Email Me
            </a>
          </div>
        </Reveal>
      </div>

      {/* Contact form + links */}
      <div className="shell">
        <Reveal className="mb-12">
          <span className="label mb-5 block">10 — Contact</span>
          <h3 className="text-section font-bold" style={{ color: 'var(--text-primary)' }}>Get in Touch</h3>
        </Reveal>

        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          {/* Form */}
          <form id="contact-form" onSubmit={onSubmit} className="md:col-span-7" noValidate>
            <div className="grid gap-6">
              <Field
                label="Name"
                value={form.name}
                onChange={(v) => setForm({ ...form, name: v })}
                error={errors.name}
                disabled={status === 'loading'}
              />
              <Field
                label="Email"
                type="email"
                value={form.email}
                onChange={(v) => setForm({ ...form, email: v })}
                error={errors.email}
                disabled={status === 'loading'}
              />
              <Field
                label="Project Type"
                value={form.type}
                onChange={(v) => setForm({ ...form, type: v })}
                placeholder="Full stack app, AI integration, API, etc."
                disabled={status === 'loading'}
                optional
              />
              <div className="flex flex-col gap-2">
                <label className="label">Message</label>
                  <textarea
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    disabled={status === 'loading'}
                    className="resize-none rounded-lg border px-4 py-3 outline-none transition-colors duration-300 placeholder:text-muted focus:border-ember-500/50 disabled:opacity-50"
                    style={{ 
                      borderColor: 'var(--border)',
                      backgroundColor: 'var(--surface)',
                      color: 'var(--text-primary)'
                    }}
                    placeholder="Tell me about your project..."
                  />
                  {errors.message && <span className="text-xs" style={{ color: 'var(--accent)' }}>{errors.message}</span>}
              </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  data-cursor="Send"
                  className="group inline-flex w-fit items-center gap-2 rounded-full px-7 py-4 font-mono text-[13px] uppercase tracking-micro transition-colors duration-300 disabled:opacity-50"
                  style={{ 
                    backgroundColor: 'var(--background)',
                    color: 'var(--text-primary)'
                  }}
                >
                  {status === 'loading' ? 'Sending...' : 'Send Inquiry'}
                  <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </button>

                {status === 'success' && (
                  <p className="text-sm" style={{ color: 'var(--accent)' }}>Message sent. I'll get back to you soon.</p>
                )}
                {status === 'error' && (
                  <p className="text-sm" style={{ color: 'var(--accent)' }}>
                    Something went wrong. Please email me directly at {PROFILE.email}.
                  </p>
                )}
            </div>
          </form>

          {/* Links */}
          <div className="flex flex-col gap-6 md:col-span-5">
            <span className="label">Direct</span>
            <a
              href={`mailto:${PROFILE.email}`}
              data-cursor=""
              className="group flex items-center gap-4 border-b pb-5"
              style={{ borderColor: 'var(--border)' }}
            >
              <Mail className="h-5 w-5 transition-colors duration-300" style={{ color: 'var(--text-secondary)' }} />
              <span className="transition-colors duration-300" style={{ color: 'var(--text-secondary)' }}>
                {PROFILE.email}
              </span>
            </a>
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor=""
              className="group flex items-center gap-4 border-b pb-5"
              style={{ borderColor: 'var(--border)' }}
            >
              <Github className="h-5 w-5 transition-colors duration-300" style={{ color: 'var(--text-secondary)' }} />
              <span className="transition-colors duration-300" style={{ color: 'var(--text-secondary)' }}>
                GitHub
              </span>
              <ArrowUpRight className="ml-auto h-4 w-4 transition-all duration-300" style={{ color: 'var(--text-secondary)' }} />
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor=""
              className="group flex items-center gap-4 border-b pb-5"
              style={{ borderColor: 'var(--border)' }}
            >
              <Linkedin className="h-5 w-5 transition-colors duration-300" style={{ color: 'var(--text-secondary)' }} />
              <span className="transition-colors duration-300" style={{ color: 'var(--text-secondary)' }}>
                LinkedIn
              </span>
              <ArrowUpRight className="ml-auto h-4 w-4 transition-all duration-300" style={{ color: 'var(--text-secondary)' }} />
            </a>

            <div className="mt-6 rounded-lg border p-6" style={{ borderColor: 'var(--border)', backgroundColor: 'var(--surface)' }}>
              <span className="label mb-2 block">Location</span>
              <p className="text-lg" style={{ color: 'var(--text-primary)' }}>{PROFILE.location}</p>
              <p className="mt-1 text-sm" style={{ color: 'var(--text-secondary)' }}>Available for remote work worldwide</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  error,
  type = 'text',
  placeholder,
  disabled,
  optional,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  type?: string;
  placeholder?: string;
  disabled?: boolean;
  optional?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="label">
        {label}
        {optional && <span className="ml-2" style={{ color: 'var(--text-muted)' }}>(optional)</span>}
      </label>
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          placeholder={placeholder}
          className="rounded-lg border px-4 py-3 outline-none transition-colors duration-300 placeholder:text-muted focus:border-ember-500/50 disabled:opacity-50"
          style={{ 
            borderColor: 'var(--border)',
            backgroundColor: 'var(--surface)',
            color: 'var(--text-primary)'
          }}
        />
        {error && <span className="text-xs" style={{ color: 'var(--accent)' }}>{error}</span>}
    </div>
  );
}
