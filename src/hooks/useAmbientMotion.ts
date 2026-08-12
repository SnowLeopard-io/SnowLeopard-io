import { useEffect } from 'react'

/**
 * Drives the cursor-follow and scroll-linked CSS variables consumed by the
 * spotlight and progress-bar effects. Only active for fine pointers (mouse)
 * and when the user has not requested reduced motion.
 */
export function useAmbientMotion() {
  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!fine || reduced) return

    const root = document.documentElement
    let raf = 0
    let x = 0
    let y = 0

    const applyCursor = () => {
      raf = 0
      root.style.setProperty('--mx', `${x}px`)
      root.style.setProperty('--my', `${y}px`)
    }

    const onMove = (e: PointerEvent) => {
      x = e.clientX
      y = e.clientY
      root.classList.add('has-cursor')
      if (!raf) raf = requestAnimationFrame(applyCursor)
    }

    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0
      root.style.setProperty('--scroll', `${(p * 100).toFixed(2)}%`)
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    return () => {
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('scroll', onScroll)
      if (raf) cancelAnimationFrame(raf)
      root.classList.remove('has-cursor')
    }
  }, [])
}
