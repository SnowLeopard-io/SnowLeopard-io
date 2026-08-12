import { useEffect, useRef } from 'react'
import './snowfield.css'

type Flake = {
  x: number
  y: number
  r: number
  vy: number
  vx: number
  a: number
}

/**
 * A quiet, ambient snowfall rendered to a fixed canvas.
 * Disabled when the user prefers reduced motion or the viewport is small.
 */
export function Snowfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return

    let raf = 0
    let flakes: Flake[] = []
    let w = 0
    let h = 0
    const DPR = Math.min(window.devicePixelRatio || 1, 2)

    const init = () => {
      const count = window.innerWidth < 768 ? 18 : 34
      flakes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: 0.6 + Math.random() * 1.6,
        vy: 0.12 + Math.random() * 0.3,
        vx: -0.05 + Math.random() * 0.1,
        a: 0.08 + Math.random() * 0.28,
      }))
    }

    const resize = () => {
      w = window.innerWidth
      h = window.innerHeight
      canvas.width = w * DPR
      canvas.height = h * DPR
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0)
      init()
    }

    const step = () => {
      ctx.clearRect(0, 0, w, h)
      for (const f of flakes) {
        f.y += f.vy
        f.x += f.vx + Math.sin((f.y + f.x) / 60) * 0.06
        if (f.y > h + 4) {
          f.y = -4
          f.x = Math.random() * w
        }
        ctx.beginPath()
        ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(189, 208, 235, ${f.a})`
        ctx.fill()
      }
      raf = requestAnimationFrame(step)
    }

    resize()
    step()
    window.addEventListener('resize', resize)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} className="snowfield" aria-hidden="true" />
}
