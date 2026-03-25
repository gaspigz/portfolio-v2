import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../hooks/useLanguage';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const { t, lang } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(nameRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8 })
        .fromTo(
          contentRef.current?.querySelectorAll('.hero-anim') || [],
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.12 },
          '-=0.4'
        )
        .fromTo(
          imageRef.current,
          { opacity: 0, scale: 0.9 },
          { opacity: 1, scale: 1, duration: 0.7 },
          '-=0.6'
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const cvUrl = lang === 'en' ? '/cv-en.pdf' : '/cv-es.pdf';

  return (
    <section ref={sectionRef} className="hero" id="hero">
      <div className="container">
        <div className="hero-inner">
          <div ref={contentRef} className="hero-content">
            <h1 ref={nameRef} className="hero-name">{t.hero.name}</h1>
            <p className="hero-degree hero-anim">{t.hero.degree}</p>
            <p className="hero-subtitle hero-anim">{t.hero.subtitle}</p>
            <p className="hero-description hero-anim">{t.hero.description}</p>
            <div className="hero-buttons hero-anim">
              <a
                href="#projects"
                className="btn btn-primary btn-lg"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById('projects');
                  if (el) {
                    const top = el.getBoundingClientRect().top + window.scrollY - 80;
                    window.scrollTo({ top, behavior: 'smooth' });
                  }
                }}
              >
                {t.hero.viewProjects}
              </a>
              <a href={cvUrl} className="btn btn-secondary btn-lg" download>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                {t.hero.downloadCV}
              </a>
            </div>
          </div>
          <div ref={imageRef} className="hero-image">
            <img src="/profile.png" alt="Gaspar Giménez" loading="eager" />
          </div>
        </div>
      </div>
    </section>
  );
}
