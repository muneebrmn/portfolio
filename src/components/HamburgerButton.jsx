export default function HamburgerButton({ ref, isOpen, onClick }) {
  return (
    <button ref={ref} type="button" onClick={onClick} aria-expanded={isOpen} aria-controls="mobile-navigation" aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'} className="-mr-2 flex size-11 cursor-pointer items-center justify-center rounded-md text-[#303030] hover:bg-black/5 focus-visible:outline-2 focus-visible:outline-black lg:hidden">
      <span aria-hidden="true" className="relative h-4 w-[19px]">
        <span className={`absolute left-0 top-0 h-0.5 w-full rounded-full bg-current motion-safe:transition-transform ${isOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
        <span className={`absolute left-0 top-[7px] h-0.5 w-full rounded-full bg-current ${isOpen ? 'opacity-0' : ''}`} />
        <span className={`absolute left-0 top-[14px] h-0.5 w-full rounded-full bg-current motion-safe:transition-transform ${isOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
      </span>
    </button>
  )
}
