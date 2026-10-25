import { useState } from 'react';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import { Cursor } from '@/components/Cursor';
import { Loader } from '@/components/Loader';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Statement } from '@/components/Statement';
import { Work } from '@/components/Work';
import { Expertise } from '@/components/Expertise';
import { CodeAI } from '@/components/CodeAI';
import { About } from '@/components/About';
import { Services } from '@/components/Services';
import { FAQ } from '@/components/FAQ';
import { Clients } from '@/components/Clients';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { CaseStudy } from '@/components/CaseStudy';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [ready, setReady] = useState(false);
  const [caseStudy, setCaseStudy] = useState<string | null>(null);

  useSmoothScroll();

  return (
    <>
      {loading && (
        <Loader
          onDone={() => {
            setLoading(false);
            setTimeout(() => setReady(true), 100);
          }}
        />
      )}

      <Cursor />
      <Navbar ready={ready} />

      <main>
        <Hero ready={ready} />
        <Statement />
        <Work onOpen={(id) => setCaseStudy(id)} />
        <Expertise />
        <CodeAI />
        <About />
        <Services />
        <Clients />
        <FAQ />
        <Contact />
      </main>

      <Footer />

      <CaseStudy projectId={caseStudy} onClose={() => setCaseStudy(null)} />
    </>
  );
}
