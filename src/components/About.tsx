import { useI18n } from '../i18n/I18nProvider'
import type { CSSProperties } from 'react'
import './about.css'

export function About() {
  const { t } = useI18n()
  const about = t.about

  return (
    <section className="section" id="about">
      <div className="container">
        <header className="section__header" data-reveal>
          <p className="eyebrow">{about.eyebrow}</p>
          <h2 className="section__title">{about.heading}</h2>
          <p className="section__lead">{about.lead}</p>
        </header>

        <div className="about__facts">
          {about.facts.map((fact, i) => (
            <div
              className="about__fact"
              key={fact.label}
              data-reveal
              style={{ '--reveal-delay': `${i * 0.06}s` } as CSSProperties}
            >
              <span className="about__fact-icon" aria-hidden="true">
                {fact.icon}
              </span>
              <div>
                <p className="about__fact-label">{fact.label}</p>
                <p className="about__fact-value">{fact.value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="about__stack" data-reveal>
          <p className="about__stack-label">{about.stackLabel}</p>
          <div className="about__chips">
            {about.stack.map((s) => (
              <span className="chip" key={s.lang} title={s.note}>
                <span className="route-dot" />
                {s.lang}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}