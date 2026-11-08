import useActiveSection from './useActiveSection'

const links = [
  ['Home', '#home'],
  ['About Me', '#about'],
  ['Skills', '#skills'],
  ['Projects', '#projects'],
  ['Certificates', '#certifications'],
]

export default function NavLinks({ mobile = false, onNavigate }) {
  const activeSection = useActiveSection()
  return (
    <ul className={mobile ? 'flex flex-col gap-1' : 'flex items-center gap-6 xl:gap-8'}>
      {links.map(([label, href]) => (
        <li key={href}>
          <a href={href} aria-current={activeSection === href ? 'location' : undefined} onClick={onNavigate} className={`group block rounded-md font-light transition-colors hover:text-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black ${mobile ? 'px-3 py-4 text-base hover:bg-neutral-100' : 'py-2 text-sm xl:text-base'}`}>
            <span className={`relative inline-block after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left ${activeSection === href ? 'after:scale-x-100' : 'after:scale-x-0'} after:bg-neutral-500 after:transition-transform after:duration-300 group-hover:after:scale-x-100 group-focus-visible:after:scale-x-100 motion-reduce:after:transition-none`}>
              {label}
            </span>
          </a>
        </li>
      ))}
    </ul>
  )
}
