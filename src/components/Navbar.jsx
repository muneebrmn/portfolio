import { useEffect, useRef, useState } from 'react'
import HamburgerButton from './HamburgerButton'
import NavActions from './NavActions'
import NavLinks from './NavLinks'
import SocialLinks from './SocialLinks'
import useActiveSection from './useActiveSection'

export default function Navbar({ resumeUrl, socialLinks }) {
  const activeSection = useActiveSection()
  const pageLabels = {
    '#home': 'Home',
    '#about': 'About Me',
    '#skills': 'Skills',
    '#projects': 'Projects',
    '#experience': 'Experience',
    '#certifications': 'Certificates',
    '#contact': 'Connect',
  }
  const pageLabel = pageLabels[activeSection] || 'Home' 
  const [isOpen, setIsOpen] = useState(false)
  const headerRef = useRef(null)
  const buttonRef = useRef(null)
  const drawerRef = useRef(null)
  const closeMenu = () => setIsOpen(false)

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 1024px)')
    const onResize = (event) => { if (event.matches) setIsOpen(false) }
    desktop.addEventListener('change', onResize)
    return () => desktop.removeEventListener('change', onResize)
  }, [])

  useEffect(() => {
    if (!isOpen) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    drawerRef.current?.querySelector('button, a[href]')?.focus()
    function onPointerDown(event) {
      if (!headerRef.current?.contains(event.target)) setIsOpen(false)
    }
    function onKeyDown(event) {
      if (event.key === 'Tab') {
        const items = drawerRef.current?.querySelectorAll('a[href], button:not([disabled])')
        if (items?.length) {
          const first = items[0]
          const last = items[items.length - 1]
          if (event.shiftKey && document.activeElement === first) {
            event.preventDefault()
            last.focus()
          } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault()
            first.focus()
          }
        }
      }
      if (event.key === 'Escape') {
        setIsOpen(false)
        buttonRef.current?.focus()
      }
    }
    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen])

  return (
    <header ref={headerRef} className="relative z-50 w-full bg-white font-poppins text-[#303030]">
      <nav aria-label="Main navigation" className="relative mx-auto flex w-full items-center justify-between gap-6 px-6 pt-8 pb-6 sm:px-8 lg:flex-wrap lg:px-10 lg:py-6 xl:w-[76%] xl:px-0 2xl:w-[72%] 2xl:flex-nowrap">
        <a href={pageLabels[activeSection] ? activeSection : '#home'} aria-current="location" onClick={closeMenu} className="aria-[current=location]:after:scale-x-100 relative rounded-sm text-xl font-light after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-neutral-500 after:transition-transform after:duration-300 hover:after:scale-x-100 focus-visible:after:scale-x-100 motion-reduce:after:transition-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black lg:hidden">{pageLabel}</a>
        <div className="hidden lg:block"><NavLinks /></div>
        <div className="hidden shrink-0 items-center gap-4 lg:ml-auto lg:flex">
          <SocialLinks socialLinks={socialLinks} compact />
          <NavActions resumeUrl={resumeUrl} />
        </div>
        <HamburgerButton ref={buttonRef} isOpen={isOpen} onClick={() => setIsOpen((open) => !open)} />
        {isOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <div aria-hidden="true" onClick={closeMenu} className="absolute inset-0 bg-black/25" />
            <div ref={drawerRef} id="mobile-navigation" role="dialog" aria-modal="true" aria-label="Navigation menu" className="absolute inset-y-0 right-0 w-[80%] max-w-sm overflow-y-auto bg-white px-6 pb-8 shadow-xl">
            <div className="flex h-24 items-center justify-end">
              <button type="button" onClick={() => { closeMenu(); buttonRef.current?.focus() }} aria-label="Close navigation menu" className="flex size-11 items-center justify-center rounded-md text-3xl font-light hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-black">×</button>
            </div>
            <NavLinks mobile onNavigate={closeMenu} />
            <div className="mt-5"><SocialLinks socialLinks={socialLinks} onNavigate={closeMenu} /></div>
            <div className="mt-3"><NavActions resumeUrl={resumeUrl} onNavigate={closeMenu} /></div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
