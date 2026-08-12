import { useI18n } from '../i18n/I18nProvider'
import type { CSSProperties } from 'react'
import './writing.css'

export function Writing() {
  const { t } = useI18n()
  const { eyebrow, heading, lead, articles } = t.writing

  return (
    <section className="section section--dark section--writing" id="writing">
      <div className="container">
        <header className="section__header" data-reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="section__title">{heading}</h2>
          <p className="section__lead">{lead}</p>
        </header>

        <div className="writing__grid">
          {articles.map((a, i) => (
            <a
              className="writing__card"
              href={a.url}
              target="_blank"
              rel="noreferrer"
              key={a.title}
              data-reveal
              style={{ '--reveal-delay': `${Math.min(i * 0.06, 0.3)}s` } as CSSProperties}
            >
              <div className="writing__meta">
                <span className="writing__tag">{a.tag}</span>
                <span className="writing__date">{a.date}</span>
              </div>
              <h3 className="writing__title">{a.title}</h3>
              <p className="writing__excerpt">{a.excerpt}</p>
              <span className="writing__more">
                Read <span aria-hidden="true">→</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
