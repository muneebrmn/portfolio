// gridPosition sets each project’s column (x) and row (y) on the tile grid.
// Change x or y by 1 for a one-box move; change both for a diagonal.
// Positive x moves right, positive y moves down; negative changes reverse direction.
// Replace these sample entries with your own projects and screenshots.
// Put screenshots in public/images/projects and use /images/projects/filename.png.
export const projects = [
  { 
    gridPosition: { x: 0, y: 0 }, 
    title: 'Portfolio Website', 
    technologies: ['React', 'Tailwind CSS', 'JavaScript'], 
    description: 'A responsive personal portfolio with interactive skills, project showcases, and a mobile navigation menu.', 
    image: null, 
    liveUrl: 'https://github.com/muneebrmn/portfolio', 
    sourceUrl: null 
  },
  { 
    gridPosition: { x: 1, y: 0 }, 
    title: 'ASCII Cipher Encryption', 
    technologies: ['Python'], 
    description: 'Encryption / Decryption of String using ASCII characters shifting.', 
    image: null, 
    liveUrl: 'https://github.com/muneebrmn/ascii-cipher', 
    sourceUrl: null 
  },
  { 
    gridPosition: { x: 1, y: 1 }, 
    title: 'Hospital Management System', 
    technologies: ['Python'], 
    description: 'A simple python based Hospital Management System that I made in a University lab.', 
    image: null, 
    liveUrl: 'https://github.com/muneebrmn/hospital-management-system', 
    sourceUrl: null 
  },
]
