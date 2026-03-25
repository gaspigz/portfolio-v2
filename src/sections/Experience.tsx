import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../hooks/useLanguage';

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const { t } = useLanguage();
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.timeline-item',
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.1,
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
    <section ref={ref} id="experience" className="section">
      <div className="container">
        <h2 className="section-title gsap-fade-in">{t.experience.title}</h2>

        <div className="timeline">
          {t.experience.items.map((item, i) => (
            <div key={i} className="timeline-item">
              <div className="timeline-header">
                <h3 className="timeline-role">{item.role}</h3>
                <span className="timeline-period">{item.period}</span>
              </div>
              <p className="timeline-company">{item.company}</p>
              <p className="timeline-location">{item.location}</p>
              <p className="timeline-description">{item.description}</p>
              <div className="timeline-tech">
                {item.tech.map((tech, j) => (
                  <span key={j} className="badge">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
