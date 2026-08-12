import { useI18n } from '../i18n/I18nProvider'
import type { CSSProperties } from 'react'
import './notes.css'

export function Notes() {
  const { t } = useI18n()
  const { eyebrow, heading, lead, notes } = t.notes

  return (
    <section className="section section--dark section--notes" id="notes">
      <div className="container">
        <header className="section__header" data-reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="section__title">{heading}</h2>
          <p className="section__lead">{lead}</p>
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