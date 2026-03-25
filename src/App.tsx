import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Academics from './sections/Academics';
import Projects from './sections/Projects';
import LambdaWorks from './sections/LambdaWorks';
import Experience from './sections/Experience';
import Skills from './sections/Skills';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import { useLanguage } from './hooks/useLanguage';

export default function App() {
  const { t, lang } = useLanguage();

  useEffect(() => {
    // Dynamic metadata update
    document.title = t.hero.name + ' — ' + t.hero.subtitle;
    
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', t.hero.description);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', t.hero.name + ' — ' + t.hero.subtitle);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', t.hero.description);

    // Update HTML lang attribute
    document.documentElement.lang = lang;
  }, [t, lang]);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Academics />
        <Projects />
        <LambdaWorks />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
