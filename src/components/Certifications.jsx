import CertificationCard from './CertificationCard'
import { certifications } from './certificationsData'

export default function Certifications() {
  return (
    <section id="certifications" aria-labelledby="certifications-title" className="relative isolate min-h-full overflow-hidden bg-white px-5 pt-6 pb-12 sm:px-8 lg:pt-7">
      <h1 id="certifications-title" className="sr-only">Certifications</h1>
      <ol className="mx-auto grid w-full max-w-[1180px] grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
        {certifications.map((certification, index) => (
          <li key={certification.title}><CertificationCard certification={certification} number={index + 1} /></li>
        ))}
      </ol>
    </section>
  )
}
