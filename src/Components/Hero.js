import React from 'react';
import './Hero.css';
import profileImage from '../images/2150010118.jpg'; 

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="hero-greeting">HELLO!</p>
        <h1>I'm <span className="highlight">KOUEVI Ayité Ted</span></h1>
        <p className="hero-subtitle">FrontEnd  Developer</p>
        <div className="hero-buttons">
          <button className="btn btn-primary">HIRE ME</button>
          <button className="btn btn-secondary">MY WORKS</button>
        </div>
      </div>
      <div className="hero-image">
        <img src={profileImage} alt="Profile" />
      </div>
    </section>
  );
}

export default Hero;
