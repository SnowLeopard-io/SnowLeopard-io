import { useEffect } from 'react'

/**
 * Global scroll-reveal: observes every `[data-reveal]` element on the page
 * and adds `.is-in` when it enters the viewport. Called once at app root.
 */
export function useRevealAll() {
  useEffect(() => {
    const targets = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))

    if (!('IntersectionObserver' in window)) {
      targets.forEach((el) => el.classList.add('is-in'))
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )

    targets.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}
