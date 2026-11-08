import { useState } from 'react'

export default function ProjectPreview({ project }) {
  const [failedImage, setFailedImage] = useState(null)
  return (
    <div className="aspect-square w-[var(--project-tile)] overflow-hidden rounded-md border-2 border-neutral-600 bg-[#f4f4f5]">
      {project.image && failedImage !== project.image ? (
        <img src={project.image} alt={`${project.title} preview`} onError={() => setFailedImage(project.image)} className="h-full w-full rounded border border-neutral-200 object-cover" />
      ) : (
        <div className="flex h-full items-center justify-center rounded border border-neutral-200 bg-[#f4f4f5] p-4 text-center text-xs font-light text-neutral-400">Project preview</div>
      )}
    </div>
  )
}
