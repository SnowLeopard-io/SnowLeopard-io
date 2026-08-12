import { useEffect, useRef } from 'react'
import './snowfield.css'

type Flake = {
  x: number
  y: number
  r: number
  vy: number
  vx: number
  a: number
  sway: number
  swaySpeed: number
  phase: number
}

const TINTS = ['189, 208, 235', '143, 180, 222', '233, 240, 250'] // icy whites/blues

/**
 * Ambient snowfall with depth: nearer flakes are larger, faster and more
 * opaque; a slow "wind" breathes across the whole field. Disabled when the
 * user prefers reduced motion.
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
      const count = window.innerWidth < 768 ? 26 : 52
      flakes = Array.from({ length: count }, () => {
        const depth = Math.random() // 0 = far, 1 = near
        return {
          x: Math.random() * w,
          y: Math.random() * h,
          r: 0.5 + depth * 2.4,
          vy: 0.12 + depth * 0.55,
          vx: (-0.08 + Math.random() * 0.16) * (0.4 + depth),
          a: 0.06 + depth * 0.32,
          sway: 6 + depth * 14,
          swaySpeed: 0.0006 + Math.random() * 0.0012,
          phase: Math.random() * Math.PI * 2,
        }
      })
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

    const start = performance.now()
    const step = (now: number) => {
      const t = now - start
      // Wind that breathes over time, layered for a less mechanical feel.
      const wind = Math.sin(t / 4200) * 0.22 + Math.sin(t / 1700) * 0.06
      ctx.clearRect(0, 0, w, h)
      for (const f of flakes) {
        f.phase += f.swaySpeed * 16
        f.y += f.vy
        f.x += f.vx + wind * (0.4 + f.r / 3) + Math.sin(f.phase) * (f.sway / 400)
        if (f.y > h + 6) {
          f.y = -6
          f.x = Math.random() * w
        }
        if (f.x > w + 6) f.x = -6
        else if (f.x < -6) f.x = w + 6
        ctx.beginPath()
        ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2)
        const tint = TINTS[f.r > 2 ? 1 : 0]
        ctx.fillStyle = `rgba(${tint}, ${f.a})`
        ctx.fill()
      }
      raf = requestAnimationFrame(step)
    }

    resize()
    raf = requestAnimationFrame(step)
    window.addEventListener('resize', resize)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} className="snowfield" aria-hidden="true" />
}
