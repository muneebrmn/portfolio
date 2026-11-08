import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import useActiveSection from './components/useActiveSection'
import { socialLinks } from './components/socialLinksData'

export default function App() {
  const activeSection = useActiveSection()
  const isAbout = activeSection === '#about'
  const scrollablePage = isAbout || activeSection === '#projects' || activeSection === '#certifications'

  return (
    <div id="home" className={`flex flex-col ${scrollablePage ? 'min-h-dvh' : 'h-dvh overflow-hidden'}`}>
      <Navbar socialLinks={socialLinks} resumeUrl={`${import.meta.env.BASE_URL}resume.pdf`} />
      <main className="flex min-h-0 flex-1 flex-col [&>section]:flex-1">
        {isAbout ? <About /> : activeSection === '#skills' ? <Skills /> : activeSection === '#projects' ? <Projects /> : activeSection === '#certifications' ? <Certifications /> : <Hero name="MUNEEB UR REHMAN" resumeUrl={`${import.meta.env.BASE_URL}resume.pdf`} />}
      </main>
    </div>
  )
}
