const profiles = [
  { key: 'github', label: 'GitHub', path: 'M9 19c-4.3 1.3-4.3-2.2-6-2.7M15 22v-3.9a3.4 3.4 0 0 0-.9-2.7c3-.3 6.2-1.5 6.2-6.8a5.3 5.3 0 0 0-1.4-3.7 4.9 4.9 0 0 0-.1-3.7S17.6.8 15 2.6a12.8 12.8 0 0 0-7 0C5.4.8 4.2 1.2 4.2 1.2a4.9 4.9 0 0 0-.1 3.7A5.3 5.3 0 0 0 2.7 8.6c0 5.3 3.2 6.5 6.2 6.8a3.4 3.4 0 0 0-.9 2.7V22' },
  { key: 'linkedin', label: 'LinkedIn', path: 'M4 9v12M4 3v.1M9 21V9h4v2c1-3 7-3 7 3v7M13 21v-7' },
  { key: 'email', label: 'Email', path: 'M3 5h18v14H3z M3 5l9 8 9-8' },
]

export default function SocialLinks({ socialLinks = {}, onNavigate, compact = false }) {
  return (
    <div aria-label="Social profiles" className={`flex items-center text-neutral-500 ${compact ? 'gap-0' : 'gap-3 py-3'}`}>
      {profiles.map(({ key, label, path }) => {
        const value = socialLinks[key]
        const href = key === 'email' && value && !value.startsWith('mailto:') ? `mailto:${value}` : value
        const icon = <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="size-5"><path d={path} /></svg>
        return href ? (
          <a key={key} href={href} aria-label={label} onClick={onNavigate} target={key === 'email' ? undefined : '_blank'} rel={key === 'email' ? undefined : 'noopener noreferrer'} className="flex size-11 items-center justify-center rounded-md transition-colors duration-200 hover:text-neutral-700 focus-visible:text-neutral-700 focus-visible:outline-2 focus-visible:outline-black">{icon}</a>
        ) : (
          <span key={key} aria-label={`${label} profile not configured`} title={`${label} profile not configured`} className="flex size-11 items-center justify-center transition-colors duration-200 hover:text-neutral-700">{icon}</span>
        )
      })}
    </div>
  )
}
