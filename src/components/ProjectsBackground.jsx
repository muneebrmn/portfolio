export default function ProjectsBackground({ position = { x: 0, y: 0 } }) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute -z-20 grid gap-[10px] motion-safe:transition-transform motion-safe:duration-[850ms] motion-safe:ease-in-out" style={{
      transform: `translate(calc(-${position.x} * (var(--project-tile) + 10px)), calc(-${position.y} * (var(--project-tile) + 10px)))`,
      left: 'calc(-10 * (var(--project-tile) + 10px))',
      top: 'calc(-10 * (var(--project-tile) + 10px))',
      gridTemplateColumns: 'repeat(21, var(--project-tile))',
    }}>
      {Array.from({ length: 441 }, (_, index) => (
        <span key={index} className="aspect-square rounded-md border border-[#e8e8ec] bg-[#f4f4f5]" />
      ))}
    </div>
  )
}
