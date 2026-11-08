import Education from './Education'

function FeaturedImage() {
  return (
    <figure className="mx-auto w-full max-w-60 text-center lg:max-w-none">
      <div className="relative mx-auto aspect-square w-full max-w-52 overflow-hidden rounded-md bg-gradient-to-br from-slate-200 to-sky-100" aria-hidden="true">
        <div className="absolute inset-x-6 top-6 bottom-0 rounded-t-lg bg-white/45" />
        <div className="absolute -bottom-6 left-6 h-4/5 w-2/5 -skew-x-[16deg] rounded-t-lg bg-neutral-700/60" />
        <div className="absolute -bottom-6 right-5 h-[88%] w-[46%] skew-x-[14deg] rounded-t-lg bg-neutral-600/55" />
      </div>
      <figcaption className="mt-4 text-sm font-medium uppercase text-neutral-100"></figcaption>
    </figure>
  )
}

export default function About() {
  return (
    <section id="about" aria-label="About me" className="relative isolate min-h-full overflow-hidden bg-white px-5 pt-6 pb-12 sm:px-8 lg:pt-7 lg:pb-16">
      <article className="mx-auto w-full max-w-[1180px] rounded-xl bg-[#232323] px-6 py-8 shadow-[0_20px_45px_rgba(0,0,0,0.16)] sm:px-8 sm:py-10 lg:px-8 lg:pt-16 lg:pb-8">
        <div className="grid items-center gap-10 pb-10 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-16 lg:pb-24">
          <div className="space-y-4 text-justify text-sm font-light leading-relaxed text-neutral-400 sm:text-base">
            <h1 className="sr-only">About Muneeb</h1>
            <p><span className="mr-2 text-2xl font-normal text-neutral-100">I am</span>a Computer Science student exploring the fields of cybersecurity and software development, with foundational knowledge of Python Programming, and frontend development.</p>
            <p>I enjoy learning how technology works, understanding systems, and turning concepts into practical projects through hands-on experimentation and problem-solving.</p>
            <p>Currently, I am focusing on strengthening my networking fundamentals, exploring cybersecurity concepts, and continuously improving my programming skills while building projects that expand my technical knowledge</p>
          </div>
          <FeaturedImage />
        </div>
        <Education />
      </article>
    </section>
  )
}
