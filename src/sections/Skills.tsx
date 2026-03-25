import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../hooks/useLanguage';

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const { t } = useLanguage();
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.skills-category',
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.08,
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

  const categories = Object.entries(t.skills.categories);

  return (
    <section ref={ref} id="skills" className="section">
      <div className="container">
        <h2 className="section-title gsap-fade-in">{t.skills.title}</h2>

        <div className="skills-grid">
          {categories.map(([key, cat]) => (
            <div key={key} className="skills-category">
              <h3 className="skills-category-title">{cat.title}</h3>
              <div className="skills-list">
                {cat.items.map((skill, i) => (
                  <span key={i} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
