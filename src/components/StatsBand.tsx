import { useEffect, useRef, useState } from 'react'
import { useI18n } from '../i18n/I18nProvider'
import type { GitHubMetric, StatItem } from '../content/types'
import './statsband.css'

const GH_USER = 'SnowLeopard-io'

function useCountUp(target: number, run: boolean, duration = 1500) {
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)
  useEffect(() => {
    const el = ref.current
    if (!el || !run) return
    // Once the count-up has played, later target changes just snap — no re-animation.
    if (started.current) {
      el.textContent = String(target)
      return
    }
    started.current = true
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      el.textContent = String(target)
      return
    }
    let raf = 0
    const start = performance.now()
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - p, 3)
      el.textContent = String(Math.round(target * eased))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [target, run, duration])
  return ref
}

type Counts = Record<GitHubMetric, number>

function Stat({ item, counts, run, index }: { item: StatItem; counts: Counts; run: boolean; index: number }) {
  const target = counts[item.key] ?? item.value
  const numRef = useCountUp(target, run)
  return (
    <div className="stat" data-reveal style={{ '--reveal-delay': `${index * 0.08}s` } as React.CSSProperties}>
      <p className="stat__value">
        <span ref={numRef}>0</span>
        {item.suffix && <span className="stat__suffix">{item.suffix}</span>}
      </p>
      <p className="stat__label">{item.label}</p>
    </div>
  )
}

export function StatsBand() {
  const { t } = useI18n()
  const bandRef = useRef<HTMLElement>(null)
  const [run, setRun] = useState(false)
  const [counts, setCounts] = useState<Counts>(() =>
    Object.fromEntries(t.stats.map((s) => [s.key, s.value])) as Counts,
  )

  // Reveal trigger
  useEffect(() => {
    const el = bandRef.current
    if (!el) return
    if (!('IntersectionObserver' in window)) {
      setRun(true)
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setRun(true)
            io.disconnect()
          }
        })
      },
      { threshold: 0.35 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  // Live GitHub metrics (falls back to content values on failure / rate limit)
  useEffect(() => {
    let cancelled = false
    async function load() {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${GH_USER}`),
          fetch(`https://api.github.com/users/${GH_USER}/repos?per_page=100&type=public`),
        ])
        if (!userRes.ok || !reposRes.ok) return
        const user = await userRes.json()
        const repos = await reposRes.json()
        if (cancelled || !Array.isArray(repos)) return
        const stars = repos.reduce((sum: number, r: { stargazers_count?: number }) => sum + (r.stargazers_count || 0), 0)
        const languages = new Set(repos.map((r: { language?: string | null }) => r.language).filter(Boolean)).size
        if (cancelled) return
        setCounts({
          repos: user.public_repos ?? counts.repos,
          stars,
          followers: user.followers ?? counts.followers,
          languages: languages || counts.languages,
        })
      } catch {
        /* keep fallback values */
      }
    }
    load()
    return () => {
      cancelled = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section className="stats" ref={bandRef} aria-label="Key metrics">
      <div className="container stats__grid">
        {t.stats.map((item, i) => (
          <Stat key={item.key} item={item} counts={counts} run={run} index={i} />
        ))}
      </div>
    </section>
  )
}
