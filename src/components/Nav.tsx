import { useEffect, useState } from 'react'
import { useI18n } from '../i18n/I18nProvider'
import { useMagnetic } from '../hooks/useMagnetic'
import './nav.css'

const NAV_KEYS = ['about', 'projects', 'experience', 'notes', 'writing'] as const
type NavKey = (typeof NAV_KEYS)[number]

export function Nav() {
  const { t, locale, toggle } = useI18n()
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState<NavKey>('about')
  const langRef = useMagnetic<HTMLButtonElement>(0.25)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id as NavKey)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    NAV_KEYS.forEach((key) => {
      const el = document.getElementById(key)
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [])

  return (
    <header className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <a className="nav__brand" href="#top" aria-label={t.site.name}>
          <span className="nav__peak" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
              <path
                d="M2 20 L9 6 L12.5 13 L15 9 L22 20 Z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          </span>
          <span className="nav__word">{t.site.wordmark}</span>
        </a>

        <nav className="nav__links" aria-label={t.ui.nav.about}>
          {NAV_KEYS.map((key) => (
            <a
              key={key}
              href={`#${key}`}
              className={`nav__link${active === key ? ' is-active' : ''}`}
            >
              {t.ui.nav[key]}
            </a>
          ))}
        </nav>

        <button
          ref={langRef}
          className="nav__lang"
          type="button"
          onClick={toggle}
          aria-label={`${t.ui.langToggleLabel}: ${locale === 'en' ? t.ui.langToggleToZh : t.ui.langToggleToEn}`}
          title={locale === 'en' ? t.ui.langToggleToZh : t.ui.langToggleToEn}
        >
          {locale === 'en' ? t.ui.langToggleToZh : t.ui.langToggleToEn}
        </button>
      </div>
    </header>
  )
}