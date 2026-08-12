import { expeditions } from '../content/experience'
import type { CSSProperties } from 'react'
import './experience.css'

export function Experience() {
  return (
    <section className="section section--experience" id="experience">
      <div className="container">
        <header className="section__header" data-reveal>
          <p className="eyebrow">Camp I · 5,300 m — the route so far</p>
          <h2 className="section__title">Experience, leg by leg.</h2>
          <p className="section__lead">
            A plain record of the climb — what was studied, what was built, and where the next
            ridge points.
          </p>
        </header>

        <ol className="expeditions">
          {expeditions.map((exp, i) => (
            <li
              className="expedition"
              key={exp.title}
              data-reveal
              style={{ '--reveal-delay': `${Math.min(i * 0.05, 0.3)}s` } as CSSProperties}
            >
              <div className="expedition__rail" aria-hidden="true">
                <span className={`expedition__flag expedition__flag--${exp.state}`}>
                  {exp.leg.slice(4)}
                </span>
              </div>
              <div className="expedition__card">
                <div className="expedition__meta">
                <span className="expedition__place">
                  <span className="expedition__leg">{exp.leg}</span>
                  {exp.place}
                </span>
                <span className="expedition__when">{exp.when}</span>
              </div>
                <h3 className="expedition__title">{exp.title}</h3>
                <p className="expedition__body">{exp.body}</p>
                <div className="expedition__tags">
                  {exp.tags.map((t) => (
                    <span className="chip" key={t}>
                      {t}
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
