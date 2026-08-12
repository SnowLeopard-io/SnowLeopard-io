import { useEffect, useState } from 'react'
import type { CSSProperties } from 'react'
import { useI18n } from '../i18n/I18nProvider'
import './hero.css'

function useTypewriter(words: string[]) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setText(words.join('  ·  '))
      return
    }

    const word = words[index % words.length]
    let delay = deleting ? 40 : 95

    if (!deleting && text === word) {
      delay = 1700
    } else if (deleting && text === '') {
      delay = 260
    }

    const t = setTimeout(() => {
      if (!deleting && text === word) {
        setDeleting(true)
      } else if (deleting && text === '') {
        setDeleting(false)
        setIndex((i) => (i + 1) % words.length)
      } else {
        setText(word.slice(0, text.length + (deleting ? -1 : 1)))
      }
    }, delay)

    return () => clearTimeout(t)
  }, [text, deleting, index, words])

  return text
}

export function Hero() {
  const { t, locale } = useI18n()
  const typed = useTypewriter(t.site.roles)

  return (
    <section className="hero" id="top">
      <div className="container hero__inner">
        <div className="hero__grid">
          <div className="hero__copy">
            <p className="hero__kicker" data-reveal>
              {t.site.eyebrow} <span className="hero__kicker-dash">—</span> HIGH-ALTITUDE COMPUTING
            </p>

            <h1 className="hero__name" data-reveal style={{ '--reveal-delay': '0.08s' } as CSSProperties}>
              {locale === 'zh' ? (
                t.site.name
              ) : (
                <>
                  SNOW&nbsp;LEOPARD<span className="hero__period">.</span>
                </>
              )}
            </h1>

            <p className="hero__tagline" data-reveal style={{ '--reveal-delay': '0.16s' } as CSSProperties}>
              {t.site.tagline}
            </p>

            <p className="hero__role" data-reveal style={{ '--reveal-delay': '0.24s' } as CSSProperties}>
              <span className="hero__role-caret" aria-hidden="true">▌</span>
              <span className="hero__role-text">{typed}</span>
            </p>

            <div className="hero__status" data-reveal style={{ '--reveal-delay': '0.28s' } as CSSProperties}>
              <span className="hero__status-dot" aria-hidden="true" />
              <span>{t.site.statusLabel}</span>
              <span className="hero__status-name">{t.site.buildingName}</span>
            </div>

            <div className="hero__actions" data-reveal style={{ '--reveal-delay': '0.32s' } as CSSProperties}>
              <a className="btn btn--primary" href="#projects">
                {t.site.ctaPrimary}
                <span aria-hidden="true">↓</span>
              </a>
              <a className="btn btn--ghost" href={t.site.links[0].href} target="_blank" rel="noreferrer">
                {t.site.ctaSecondary}
              </a>
            </div>
          </div>

          <figure className="hero__vista" data-reveal style={{ '--reveal-delay': '0.2s' } as CSSProperties}>
            <img src={t.site.banner} alt="" />
            <figcaption>
              <span className="hero__vista-flag" aria-hidden="true">▲</span>
              SNOW LEOPARD · HIGH-ALTITUDE COMPUTING
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
