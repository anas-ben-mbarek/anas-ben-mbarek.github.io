import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenu(false);
  };

  return (
    <motion.nav 
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container nav-container">
        <div className="nav-logo">
          <span className="logo-text">Portfolio</span>
        </div>
        
        <div className={`nav-links ${mobileMenu ? 'mobile-active' : ''}`}>
          <a onClick={() => scrollToSection('home')}>Home</a>
          <a onClick={() => scrollToSection('about')}>About</a>
          <a onClick={() => scrollToSection('skills')}>Skills</a>
          <a onClick={() => scrollToSection('projects')}>Projects</a>
          <a onClick={() => scrollToSection('contact')}>Contact</a>
        </div>

        <div className="mobile-toggle" onClick={() => setMobileMenu(!mobileMenu)}>
          <span className={`bar ${mobileMenu ? 'active' : ''}`}></span>
          <span className={`bar ${mobileMenu ? 'active' : ''}`}></span>
          <span className={`bar ${mobileMenu ? 'active' : ''}`}></span>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;