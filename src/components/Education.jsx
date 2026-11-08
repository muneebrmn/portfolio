// Replace these placeholders with your own education details.
const education = [
  { degree: 'B.SC Computer Science', institution: 'UIT University', period: 'Pursuing' },
  { degree: 'A-Levels', institution: 'Private Candidate', period: '2023 - 2025' },
]

export default function Education() {
  return (
    <section aria-labelledby="education-title" className="border-t border-white/15 pt-6">
      <h2 id="education-title" className="mb-5 text-xl font-normal text-neutral-100 sm:text-2xl">Education</h2>
      <div className="grid gap-7 sm:grid-cols-2 sm:gap-10">
        {education.map(({ degree, institution, period }) => (
          <div key={degree}>
            <h3 className="text-sm font-medium uppercase text-neutral-100 sm:text-base">{degree}</h3>
            <p className="mt-1 text-xs uppercase leading-relaxed text-neutral-300 sm:text-sm">{institution}</p>
            <p className="mt-2 text-sm text-neutral-400">{period}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
