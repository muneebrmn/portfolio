import { useState } from 'react'
import { projects } from './projectsData'
import ProjectsBackground from './ProjectsBackground'
import ProjectPreview from './ProjectPreview'

export default function Projects() {
  const [active, setActive] = useState(0)
  const [travel, setTravel] = useState({ x: 0, y: 0 })
  const [transitionCount, setTransitionCount] = useState(0)
  const project = projects[active]
  const move = (step) => {
    const next = active + step
    if (next < 0 || next >= projects.length) return
    const origin = projects[active].gridPosition || { x: active, y: 0 }
    const destination = projects[next].gridPosition || { x: next, y: 0 }
    setTravel({ x: destination.x - origin.x, y: destination.y - origin.y })
    setTransitionCount((count) => count + 1)
    setActive(next)
  }
  const controlClasses = 'flex size-9 shrink-0 items-center justify-center rounded-full p-0 leading-none border border-neutral-300 bg-white/80 text-xl text-neutral-600 transition-colors hover:bg-white hover:text-black disabled:cursor-not-allowed disabled:opacity-30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black'

  return (
    <section id="projects" aria-label="Projects" style={{ '--project-travel-x': travel.x, '--project-travel-y': travel.y }} className="relative isolate flex [--project-tile:144px] sm:[--project-tile:160px] min-h-full items-center justify-center overflow-hidden px-6 py-10 sm:px-10">
      <div className="relative grid w-full max-w-4xl items-start justify-items-center gap-8 before:pointer-events-none before:absolute before:-inset-8 before:-z-10 before:rounded-full before:bg-white/90 before:blur-2xl sm:grid-cols-[160px_minmax(0,1fr)] sm:justify-items-start sm:gap-12 lg:gap-16">
        <div className="relative flex flex-col items-center gap-3">
          <ProjectsBackground position={project.gridPosition || { x: active, y: 0 }} />
          <div key={transitionCount} className={transitionCount ? 'project-preview-enter' : undefined}>
            <ProjectPreview project={project} />
          </div>
          <div className="flex w-full items-center justify-between gap-2">
            <button type="button" aria-label="Previous project" disabled={active === 0} onClick={() => move(-1)} className={controlClasses}><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="block size-4"><path d="M19 12H5m7 7-7-7 7-7" /></svg></button>
            <span className="whitespace-nowrap text-[11px] font-medium text-neutral-600">Project {active + 1} of {projects.length}</span>
            <button type="button" aria-label="Next project" disabled={active === projects.length - 1} onClick={() => move(1)} className={controlClasses}><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="block size-4"><path d="M5 12h14m-7-7 7 7-7 7" /></svg></button>
          </div>
        </div>
        <div key={`details-${transitionCount}`} aria-live="polite" aria-atomic="true" className={`w-full text-center sm:text-left ${transitionCount ? 'project-details-enter' : ''}`}>
          <h1 className="text-3xl font-light leading-tight tracking-tight text-black sm:text-4xl lg:text-5xl">{project.title}</h1>
          <ul aria-label="Technologies" className="mt-5 flex flex-wrap justify-center gap-2 sm:justify-start">
            {project.technologies.map((technology) => <li key={technology} className="rounded-md border border-neutral-300 bg-white px-3 py-1 text-xs text-neutral-500">{technology}</li>)}
          </ul>
          <p className="mt-5 text-sm leading-relaxed text-neutral-600 sm:text-base">{project.description}</p>
          {(
            <div className="mt-6 flex justify-center gap-5 text-sm sm:justify-start">
              {project.liveUrl ? (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center justify-center gap-3 rounded-lg bg-black px-5 font-medium text-white transition-colors hover:bg-neutral-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black">View Project <span aria-hidden="true">↗</span></a>
              ) : (
                <button type="button" disabled title="Add a liveUrl in projectsData.js" className="inline-flex min-h-11 cursor-not-allowed items-center justify-center gap-3 rounded-lg bg-black px-5 font-medium text-white">View Project <span aria-hidden="true">↗</span></button>
              )}
              {project.sourceUrl && <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-neutral-500">Source code ↗</a>}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
