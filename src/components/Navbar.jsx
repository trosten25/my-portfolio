import { useState, useEffect } from 'react'
import "../styling/navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <header className="site-header">
      <div className="nav-inner container">
        <a href="#home" className="logo">Trosten Dsouza</a>

        <nav className="nav-links desktop-only">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        <button
          className={`hamburger mobile-only ${isOpen ? 'is-active' : ''}`}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen(v => !v)}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner" />
          </span>
        </button>
      </div>

      <div
        className={`mobile-drawer ${isOpen ? 'open' : ''}`}
        role="dialog"
        aria-modal="true"
        onClick={(e) => { if (e.target === e.currentTarget) setIsOpen(false) }}
      >
        <div className="mobile-drawer-panel">
          <button className="drawer-close" onClick={() => setIsOpen(false)} aria-label="Close menu">×</button>
          <nav className="mobile-nav">
            <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
            <a href="#about" onClick={() => setIsOpen(false)}>About</a>
            <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
            <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
          </nav>
        </div>
      </div>
    </header>
  )
}
