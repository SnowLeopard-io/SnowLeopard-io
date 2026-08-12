import { notes } from '../content/notes'
import type { CSSProperties } from 'react'
import './notes.css'

export function Notes() {
  return (
    <section className="section section--dark section--notes" id="notes">
      <div className="container">
        <header className="section__header" data-reveal>
          <p className="eyebrow">High Camp · 6,800 m — the field journal</p>
          <h2 className="section__title">Ideas jotted between snowfalls.</h2>
          <p className="section__lead">
            Written for whoever follows the same line up the mountain. Notes are the map of how a
            mind climbed a problem.
          </p>
        </header>

        <div className="notes">
          {notes.map((note, i) => (
            <article
              className="note"
              key={note.index}
              data-reveal
              style={{ '--reveal-delay': `${Math.min(i * 0.07, 0.35)}s` } as CSSProperties}
            >
              <header className="note__head">
                <span className="note__index">{note.index}</span>
                <span className="note__altitude">{note.altitude}</span>
              </header>
              <h3 className="note__subject">{note.subject}</h3>
              <p className="note__body">{note.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
