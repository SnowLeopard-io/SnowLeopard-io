import { useEffect, useRef } from 'react'

/**
 * Subtle 3D tilt that follows the pointer across an element. Writes the
 * --rx / --ry CSS vars consumed by the card transform. Disabled for touch
 * and reduced-motion so it never gets in the way.
 */
export function useTilt<T extends HTMLElement>(max = 9) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const fine = window.matchMedia('(pointer: fine)').matches
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!fine || reduced) return

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect()
      const px = (e.clientX - r.left) / r.width - 0.5
      const py = (e.clientY - r.top) / r.height - 0.5
      el.style.setProperty('--rx', `${(-py * max).toFixed(2)}deg`)
      el.style.setProperty('--ry', `${(px * max).toFixed(2)}deg`)
      el.classList.add('is-tilting')
    }

    const reset = () => {
      el.classList.remove('is-tilting')
      el.style.setProperty('--rx', '0deg')
      el.style.setProperty('--ry', '0deg')
    }

    el.addEventListener('pointermove', onMove)
    el.addEventListener('pointerleave', reset)

    return () => {
      el.removeEventListener('pointermove', onMove)
      el.removeEventListener('pointerleave', reset)
    }
  }, [max])

  return ref
}
