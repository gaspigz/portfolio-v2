import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../hooks/useLanguage';

gsap.registerPlugin(ScrollTrigger);

export default function LambdaWorks() {
  const { t } = useLanguage();
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current?.querySelectorAll('.gsap-fade-in') || [],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 80%',
            once: true,
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="lambda" className="section lambda-section">
      <div className="container">
        <h2 className="section-title gsap-fade-in">{t.lambda.title}</h2>
        <p className="section-subtitle gsap-fade-in">{t.lambda.subtitle}</p>

        <div className="lambda-content" style={{ marginTop: 'var(--space-10)' }}>
          <div className="lambda-role gsap-fade-in">{t.lambda.role}</div>
          <p className="lambda-description gsap-fade-in">{t.lambda.description}</p>

          <div className="lambda-points">
            {t.lambda.points.map((point, i) => (
              <div key={i} className="lambda-point gsap-fade-in">
                <svg className="lambda-point-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
