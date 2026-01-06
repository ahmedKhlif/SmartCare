'use client'

import { useState, useEffect } from 'react'

export default function NavigationArrows() {
  const [showArrows, setShowArrows] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight
      
      // Show arrows if we're in the middle section of the page
      setShowArrows(scrollPosition > 100 && scrollPosition < documentHeight - 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (direction) => {
    const current = window.scrollY
    const sectionHeight = window.innerHeight * 0.8
    
    if (direction === 'down') {
      window.scrollBy({
        top: sectionHeight,
        behavior: 'smooth'
      })
    } else {
      window.scrollBy({
        top: -sectionHeight,
        behavior: 'smooth'
      })
    }
  }

  if (!showArrows) return null

  return (
    <div className="navigation-arrows">
      <button
        className="navigation-arrows__button navigation-arrows__button--up"
        onClick={() => scrollToSection('up')}
        aria-label="Scroll to previous section"
        title="Scroll Up"
      >
        <i className="fas fa-chevron-up"></i>
      </button>
      <button
        className="navigation-arrows__button navigation-arrows__button--down"
        onClick={() => scrollToSection('down')}
        aria-label="Scroll to next section"
        title="Scroll Down"
      >
        <i className="fas fa-chevron-down"></i>
      </button>
    </div>
  )
}
