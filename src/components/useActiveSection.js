import { useEffect, useState } from 'react'

export default function useActiveSection() {
  const [activeSection, setActiveSection] = useState(() => window.location.hash || '#home')

  useEffect(() => {
    const updateSection = () => setActiveSection(window.location.hash || '#home')
    window.addEventListener('hashchange', updateSection)
    window.addEventListener('popstate', updateSection)
    return () => {
      window.removeEventListener('hashchange', updateSection)
      window.removeEventListener('popstate', updateSection)
    }
  }, [])

  return activeSection
}
