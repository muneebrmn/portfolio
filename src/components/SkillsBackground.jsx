export default function SkillsBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden lg:hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 whitespace-nowrap text-center font-sans text-[clamp(160px,38vw,640px)] font-bold leading-[0.95] tracking-[-0.07em]">
        {Array.from({ length: 16 }, (_, index) => (
          <p key={index} className={index === 0 ? 'text-[#f6f6f6]' : 'skills-background-outline'}>SKILLS</p>
        ))}
      </div>
    </div>
  )
}
