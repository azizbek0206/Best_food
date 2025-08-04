"use client"

import { Link, useLocation } from "react-router-dom"
import { useState } from "react"
import "../styles/header.css"

const Header = () => {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="header-top">
        <div className="container">
          <div className="contact-info">
            <span>📞 +998 94 052 72 80</span>
            <span>📧 azizbekqoshoqov0206@bistrobliss.uz</span>
          </div>
          <div className="social-links">
            <a href="#" className="social-link">
              📘
            </a>
            <a href="#" className="social-link">
              📷
            </a>
            <a href="#" className="social-link">
              🐦
            </a>
            <a href="#" className="social-link">
              💼
            </a>
          </div>
        </div>
      </div>

      <div className="header-main">
        <div className="container">
          <Link to="/" className="logo">
            <span className="logo-icon">🍽️</span>
            <span className="logo-text">Bistro Bliss</span>
          </Link>

          <nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
            <Link
              to="/"
              className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Bosh sahifa
            </Link>
            <Link
              to="/about"
              className={`nav-link ${location.pathname === "/about" ? "active" : ""}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Biz haqimizda
            </Link>
            <Link
              to="/menu"
              className={`nav-link ${location.pathname === "/menu" ? "active" : ""}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Menyu
            </Link>
            <Link
              to="/contact"
              className={`nav-link ${location.pathname === "/contact" ? "active" : ""}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Aloqa
            </Link>
          </nav>

          <div className="header-actions">
            <button className="btn-primary">Table</button>
          </div>

          <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
