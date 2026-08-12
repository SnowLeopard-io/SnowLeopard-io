import { useI18n } from '../i18n/I18nProvider'
import type { CSSProperties } from 'react'
import './featured.css'

export function Featured() {
  const { t } = useI18n()
  const f = t.featured

  return (
    <section className="section featured" id="featured">
      <div className="container">
        <div className="featured__grid">
          <div className="featured__main" data-reveal>
            <p className="eyebrow">{f.eyebrow}</p>
            <h2 className="featured__name">{f.name}</h2>
            <p className="featured__tagline">{f.tagline}</p>
            <p className="featured__summary">{f.summary}</p>

            <ul className="featured__highlights">
              {f.highlights.map((h, i) => (
                <li className="featured__highlight" key={i}>
                  <span className="route-dot" aria-hidden="true" />
                  {h}
                </li>
              ))}
            </ul>

            <a className="btn btn--primary" href={f.url} target="_blank" rel="noreferrer">
              {f.cta}
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          <aside className="featured__side" data-reveal style={{ '--reveal-delay': '0.1s' } as CSSProperties}>
            <div className="featured__panel">
              <img
                className="featured__badge"
                src="/cogitoagent.ico"
                alt="CogitoAgent"
                width={72}
                height={72}
                onError={(e) => {
                  ;(e.currentTarget as HTMLImageElement).style.display = 'none'
                }}
              />
              <div className="featured__metrics">
                {f.metrics.map((m) => (
                  <div className="featured__metric" key={m.label}>
                    <span className="featured__metric-value">{m.value}</span>
                    <span className="featured__metric-label">{m.label}</span>
                  </div>
                ))}
              </div>
              <div className="featured__stack">
                {f.stack.map((s) => (
                  <span className="chip" key={s}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
