import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">ODYSSEY</div>
      <nav className="nav">
        <a className='bn5' href="#home">Home <span></span></a>
        <a className='bn5' href="#about">About <span></span></a>
        <a className='bn5' href="#resume">Projects <span></span></a>
        <a className='bn5' href="#services">Services <span></span></a>
        <a className='bn5' href="#skills">Skills <span></span></a>
        <a className='bn5' href="#contact">Contact <span></span></a>
      </nav>
    </header>
  );
}

export default Header;
