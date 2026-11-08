import { useEffect, useState } from 'react'
import { skills } from './skillsData'
import SkillsBackground from './SkillsBackground'

function distanceFromActive(index, active) {
  return ((index - active + skills.length + skills.length / 2) % skills.length) - skills.length / 2
}

export default function Skills() {
  const [active, setActive] = useState(0)
  const move = (direction) => setActive((current) => (current + direction + skills.length) % skills.length)

  useEffect(() => {
    const timer = window.setInterval(() => {
      if (!document.hidden) setActive((current) => (current + 1) % skills.length)
    }, 3000)
    return () => window.clearInterval(timer)
  }, [active])

  return (
    <section
      id="skills"
      aria-label="Skills carousel"
      aria-roledescription="carousel"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
          event.preventDefault()
          move(event.key === 'ArrowRight' ? 1 : -1)
        }
      }}
      className="relative flex h-full flex-col items-center justify-center overflow-hidden bg-white px-4 pb-12 focus-visible:outline-1 focus-visible:outline-offset-[-4px] focus-visible:outline-neutral-300 sm:pb-16"
    >
      <h1 className="sr-only">My skills</h1>
      <SkillsBackground />
      <div className="relative z-10 h-[220px] w-full max-w-5xl sm:h-[300px]" aria-live="off">
        {skills.map((skill, index) => {
          const distance = distanceFromActive(index, active)
          const depth = Math.abs(distance)
          return (
            <div
              key={skill.name}
              aria-hidden={distance !== 0}
              className="skill-card absolute top-0 left-1/2 flex aspect-square w-[140px] items-center justify-center rounded-md border bg-white p-4 motion-safe:transition-[transform,opacity,filter,border-color] motion-safe:duration-700 motion-safe:ease-in-out sm:w-[190px] sm:p-5 lg:w-[216px]"
              style={{
                '--skill-offset': distance,
                '--skill-scale': depth === 0 ? 1 : depth === 1 ? 0.6 : 0.45,
                '--skill-depth': depth,
                opacity: depth === 0 ? 1 : depth === 1 ? 0.45 : depth === 2 ? 0.12 : 0,
                filter: depth === 0 ? 'none' : `blur(${depth * 2}px)`,
                borderColor: depth === 0 ? '#737373' : '#eeeeee',
                zIndex: 5 - depth,
              }}
            >
              <div className="flex h-full w-full items-center justify-center rounded-md border border-neutral-200 p-5 sm:p-7">
                <img src={skill.icon} alt={skill.name} draggable="false" className="h-full w-full object-contain" />
              </div>
            </div>
          )
        })}
        <button type="button" aria-label="Previous skill" onClick={() => move(-1)} className="absolute inset-y-0 left-0 z-10 w-1/2 rounded-md bg-transparent focus-visible:outline-2 focus-visible:outline-neutral-400 lg:hidden" />
        <button type="button" aria-label="Next skill" onClick={() => move(1)} className="absolute inset-y-0 right-0 z-10 w-1/2 rounded-md bg-transparent focus-visible:outline-2 focus-visible:outline-neutral-400 lg:hidden" />
      </div>
      <p className="relative z-10 max-w-full text-center font-display text-[clamp(1.8rem,5vw,4rem)] leading-tight tracking-[-0.04em] text-black">{skills[active].name.toUpperCase()}</p>
    </section>
  )
}
