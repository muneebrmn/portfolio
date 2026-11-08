import NavActions from './NavActions'

export default function Hero({ name = 'Your Name', portraitUrl = `${import.meta.env.BASE_URL}images/portrait.png`, resumeUrl }) {

  return (
    <section aria-labelledby="hero-title" className="hero relative isolate h-full overflow-hidden bg-white pt-4 lg:pt-6">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 select-none overflow-hidden text-center font-display leading-[0.9] tracking-[-0.06em] text-[#f6f6f6]">
        <p className="absolute top-[2%] left-1/2 w-max -translate-x-1/2 text-[42vw] lg:text-[29vw]">COMPUTER</p>
        <p className="absolute top-[44%] left-1/2 w-max -translate-x-1/2 text-[42vw] lg:top-[52%] lg:text-[29vw]">SCIENCE</p>
        <p className="hero-outline absolute top-[72%] left-1/2 w-max -translate-x-1/2 text-[38vw] lg:hidden">STUDENT</p>
      </div>

      <div className="relative mx-auto h-full w-full max-w-[1600px] px-5 lg:w-[78%] lg:px-0">
        <h1 id="hero-title" className="relative z-10 text-center font-display text-[min(9vw,15dvh)] leading-[0.95] tracking-[-0.065em] text-black">
          <span className="block">COMPUTER</span>
          <span className="block">SCIENCE</span>
          <span className="block">STUDENT</span>
        </h1>

        <div aria-hidden="true" className="absolute top-[30%] right-3 left-3 h-px bg-neutral-200">
          <div className="flex -translate-y-1/2 justify-between">
            {Array.from({ length: 7 }, (_, index) => <span key={index} className="size-1.5 rounded-full bg-neutral-300" />)}
          </div>
        </div>

        <div className="absolute bottom-0 left-1/2 z-20 h-[62%] w-full -translate-x-1/2 sm:h-[72%] lg:h-[92%] lg:w-[70%]">
          <div aria-hidden="true" className="absolute inset-x-0 bottom-6 -z-10 h-3/4 rounded-full bg-neutral-200/70 blur-3xl" />
          <img
            src={portraitUrl}
            alt={`Portrait of ${name}`}
            fetchPriority="high"
            className="relative block h-full w-full origin-bottom scale-[1.05] object-contain object-bottom grayscale lg:scale-[1.25]"
          />
        </div>

        <div className="absolute top-[22%] left-1/2 z-30 w-max max-w-full -translate-x-1/2 text-center sm:top-[20%] lg:top-[48%] lg:left-4 lg:max-w-[32%] lg:translate-x-0 lg:text-left">
          <p className="mb-3 break-words font-display text-[clamp(1.4rem,2.2vw,2.8rem)] leading-tight tracking-wide text-black">{name}</p>
          <NavActions resumeUrl={resumeUrl} />
        </div>
      </div>
    </section>
  )
}
