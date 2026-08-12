import { useEffect, useState } from 'react'
import { site } from '../content/site'
import { useElevation, formatElevation } from '../hooks/useElevation'
import './nav.css'

const NAV_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Expeditions' },
  { id: 'projects', label: 'Projects' },
  { id: 'notes', label: 'Field Notes' },
]

export function Nav() {
  const { elevation } = useElevation()
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState<string>('about')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.id)
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [])

  return (
    <header className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <a className="nav__brand" href="#top" aria-label="Back to top">
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
          <span className="nav__word">{site.wordmark}</span>
        </a>

        <nav className="nav__links" aria-label="Primary">
          {NAV_LINKS.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={`nav__link${active === l.id ? ' is-active' : ''}`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="nav__alt" aria-label={`Current elevation ${formatElevation(elevation)}`}>
          <span className="nav__alt-label">ELEV</span>
          <span className="nav__alt-value">{formatElevation(elevation)}</span>
        </div>
      </div>
    </header>
  )
}
