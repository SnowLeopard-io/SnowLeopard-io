/** Thin gradient bar that tracks page scroll progress. Decorative. */
export function ScrollProgress() {
  return (
    <div className="scroll-progress" aria-hidden="true">
      <span className="scroll-progress__bar" />
    </div>
  )
}
