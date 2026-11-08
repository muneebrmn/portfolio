import { socialLinks } from './socialLinksData'

export default function NavActions({ resumeUrl, onNavigate, connectUrl = socialLinks.linkedin }) {
  const resumeClasses = 'inline-flex min-h-11 items-center justify-center gap-3 rounded-lg bg-black px-4 text-sm font-medium text-white transition-colors hover:bg-neutral-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black'

  return (
    <div className="flex flex-wrap items-center gap-2.5">
      {resumeUrl ? (
        <a href={resumeUrl} download className={resumeClasses} onClick={onNavigate}>
          Get Resume <span aria-hidden="true">↗</span>
        </a>
      ) : (
        <button type="button" disabled title="Resume will be available soon" className={`${resumeClasses} cursor-not-allowed`}>
          Get Resume <span aria-hidden="true">↗</span>
        </button>
      )}
      <a href={connectUrl} target="_blank" rel="noopener noreferrer" onClick={onNavigate} className="inline-flex min-h-11 items-center justify-center rounded-lg border border-neutral-300 bg-white px-4 text-sm font-normal text-black transition-colors hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black">
        Connect
      </a>
    </div>
  )
}
