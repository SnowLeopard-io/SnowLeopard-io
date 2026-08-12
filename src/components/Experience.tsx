import { useI18n } from '../i18n/I18nProvider'
import type { CSSProperties } from 'react'
import './experience.css'

export function Experience() {
  const { t } = useI18n()
  const { eyebrow, heading, lead, entries } = t.experience

  return (
    <section className="section section--experience" id="experience">
      <div className="container">
        <header className="section__header" data-reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="section__title">{heading}</h2>
          <p className="section__lead">{lead}</p>
        </header>

        <ol className="timeline">
          {entries.map((entry, i) => (
            <li
              className="timeline__item"
              key={entry.title}
              data-reveal
              style={{ '--reveal-delay': `${Math.min(i * 0.05, 0.3)}s` } as CSSProperties}
            >
              <div className="timeline__rail" aria-hidden="true">
                <span className={`timeline__dot timeline__dot--${entry.state}`} />
              </div>
              <div className="timeline__card">
                <div className="timeline__meta">
                  <span className="timeline__period">{entry.period}</span>
                </div>
                <h3 className="timeline__title">{entry.title}</h3>
                <p className="timeline__body">{entry.body}</p>
                <div className="timeline__tags">
                  {entry.tags.map((tag) => (
                    <span className="chip" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}