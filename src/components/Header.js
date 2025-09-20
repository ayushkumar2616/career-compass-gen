import React, { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'How it Works', href: '#how-it-works' },
    { label: 'Features', href: '#features' },
    { label: 'For Schools', href: '#schools' },
    { label: 'About', href: '#about' },
  ];

  const handleNavClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <div className="logo-icon">E</div>
            <span className="logo-text">ED-GEN</span>
          </div>

          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="nav-link"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="header-actions">
            <ThemeToggle />
            <button className="btn btn-secondary login-btn">Login</button>
            <button className="btn btn-primary">Take Quiz</button>

            <button
              className="menu-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="mobile-nav">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="mobile-nav-link"
              >
                {item.label}
              </a>
            ))}
            <div className="mobile-nav-buttons">
              <button className="btn btn-secondary">Login</button>
              <button className="btn btn-primary">Take Quiz</button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;