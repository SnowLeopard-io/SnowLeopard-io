import { useEffect, useState } from 'react'
import { summit } from '../content/site'

/**
 * Track scroll progress as an "ascent" — 0 at the top, 1 at the bottom —
 * mapped to metres between 0 and the summit (Muztagh Ata, 7,546 m).
 * Returns [progress, elevation].
 */
export function useElevation(): { progress: number; elevation: number } {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let raf = 0
    const measure = () => {
      const doc = document.documentElement
      const max = Math.max(1, doc.scrollHeight - window.innerHeight)
      const p = Math.min(1, Math.max(0, window.scrollY / max))
      setProgress(p)
    }

    const onScroll = () => {
      if (reduced) return
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(measure)
    }

    if (reduced) {
      measure()
    } else {
      window.addEventListener('scroll', onScroll, { passive: true })
      window.addEventListener('resize', onScroll, { passive: true })
    }
    measure()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return { progress, elevation: Math.round(progress * summit) }
}

/** Format an elevation with a narrow space: 7546 → "7 546 m". */
export function formatElevation(m: number): string {
  return m.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '\u2009') + ' m'
}
