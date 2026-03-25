import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../hooks/useLanguage';

gsap.registerPlugin(ScrollTrigger);

export default function Academics() {
  const { t } = useLanguage();
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.academic-card',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
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
    <section ref={ref} id="academics" className="section">
      <div className="container">
        <h2 className="section-title gsap-fade-in">{t.academics.title}</h2>

        <div className="academics-grid">
          {/* Bachelor's */}
          <div className="card academic-card">
            <div className="academic-card-header">
              <div>
                <h3 className="academic-card-title">{t.academics.bachelor.title}</h3>
                <p className="academic-card-institution">{t.academics.bachelor.institution}</p>
              </div>
              <span className="badge badge-highlight">{t.academics.bachelor.status}</span>
            </div>
            <p className="academic-card-period">{t.academics.bachelor.period}</p>
            <div className="academic-stats">
              <div className="academic-stat">
                <div className="academic-stat-value">{t.academics.bachelor.gpa}</div>
                <div className="academic-stat-label">{t.academics.gpaLabel}</div>
              </div>
              <div className="academic-stat">
                <div className="academic-stat-value">{t.academics.bachelor.progress}</div>
                <div className="academic-stat-label">{t.academics.progressLabel}</div>
              </div>
            </div>
          </div>

          {/* Master's */}
          <div className="card academic-card">
            <div className="academic-card-header">
              <div>
                <h3 className="academic-card-title">{t.academics.master.title}</h3>
                <p className="academic-card-institution">{t.academics.master.institution}</p>
              </div>
              <span className="badge">{t.academics.master.status}</span>
            </div>
            <p className="academic-card-period">{t.academics.master.period}</p>
            <div className="academic-stats">
              <div className="academic-stat">
                <div className="academic-stat-value">{t.academics.master.gpa}</div>
                <div className="academic-stat-label">{t.academics.gpaLabel}</div>
              </div>
              <div className="academic-stat">
                <div className="academic-stat-value">{t.academics.master.progress}</div>
                <div className="academic-stat-label">{t.academics.progressLabel}</div>
              </div>
            </div>
          </div>

          {/* IT Technician */}
          <div className="card academic-card">
            <div className="academic-card-header">
              <div>
                <h3 className="academic-card-title">{t.academics.technician.title}</h3>
                <p className="academic-card-institution">{t.academics.technician.institution}</p>
              </div>
            </div>
            <p className="academic-card-period">{t.academics.technician.period}</p>
            <div className="academic-stats">
              <div className="academic-stat">
                <div className="academic-stat-value">{t.academics.technician.gpa}</div>
                <div className="academic-stat-label">{t.academics.gpaLabel}</div>
              </div>
            </div>
          </div>

          {/* Teaching Roles */}
          <div className="card academic-card">
            <h3 className="academic-card-title">{t.academics.teaching.title}</h3>
            <div className="academic-list">
              {t.academics.teaching.items.map((item, i) => (
                <div key={i} className="academic-list-item">{item}</div>
              ))}
            </div>
          </div>

          {/* Special Courses */}
          <div className="card academic-card">
            <h3 className="academic-card-title">{t.academics.special.title}</h3>
            <div className="academic-list">
              {t.academics.special.items.map((item, i) => (
                <div key={i} className="academic-list-item">{item}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
