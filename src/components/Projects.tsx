import { projects } from '../content/projects'
import type { CSSProperties } from 'react'
import './projects.css'

export function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <header className="section__header" data-reveal>
          <p className="eyebrow">Camp II · 6,400 m — shelters raised on the ridge</p>
          <h2 className="section__title">The repos are the flags.</h2>
          <p className="section__lead">
            Concrete deliverables, each with a link — proof that the climb happened and the code
            is public.
          </p>
        </header>

        <div className="projects">
          {projects.map((p, i) => (
            <a
              className="project"
              href={p.url}
              target="_blank"
              rel="noreferrer"
              key={p.name}
              data-reveal
              style={{ '--reveal-delay': `${(i % 2) * 0.08}s` } as CSSProperties}
            >
              <div className="project__top">
                <span className={`project__role project__role--${p.role.toLowerCase()}`}>
                  {p.role}
                </span>
                <span className="project__repo" aria-label={`Repository ${p.repo}`}>
                  {p.repo}
                  <span className="project__arrow" aria-hidden="true">
                    ↗
                  </span>
                </span>
              </div>

              <h3 className="project__name">{p.name}</h3>
              <p className="project__tagline">{p.tagline}</p>
              <p className="project__body">{p.body}</p>

              <div className="project__stack">
                {p.stack.map((s) => (
                  <span className="chip" key={s}>
                    {s}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
