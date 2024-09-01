import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="logo">ODYSSEY</div>
        <nav className="nav">
          <a className='bn5' href="#home">Home</a>
          <a className='bn5' href="#about">About</a>
          <a className='bn5' href="#resume">Resume</a>
          <a  className='bn5'href="#services">Services</a>
          <a  className='bn5'href="#skills">Skills</a>
          <a className='bn5' href="#projects">Projects</a>
          <a  className='bn5'href="#blog">My Blog</a>
          <a  className='bn5'href="#contact">Contact</a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
