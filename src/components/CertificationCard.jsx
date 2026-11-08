export default function CertificationCard({ certification, number }) {
  const { title, url } = certification
  const classes = 'group flex min-h-16 w-full items-center gap-5 rounded-md border border-neutral-400 bg-white/65 px-5 py-4 text-left text-sm font-medium text-neutral-500 shadow-[0_12px_30px_rgba(0,0,0,0.04)] transition-[border-color,color,background-color,box-shadow] duration-200 sm:gap-8 sm:px-6 sm:text-base'
  const content = <><span className="w-5 shrink-0 tabular-nums">{number}</span><span className="min-w-0 flex-1 break-words">{title}</span>{url && <span aria-hidden="true" className="text-neutral-400 transition-colors group-hover:text-black">↗</span>}</>

  return url ? (
    <a href={url} target="_blank" rel="noopener noreferrer" aria-label={`Open ${title} certificate (new tab)`} className={`${classes} hover:border-neutral-700 hover:bg-white/90 hover:text-black hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black`}>{content}</a>
  ) : (
    <div title="Certificate link not added yet" className={classes}>{content}</div>
  )
}
