import React from 'react';
import Header from './Components/Header';
import Hero from './Components/Hero';
import About from './Components/About';
import Skills from './Components/Skills';
import Services from './Components/Services';
import Contact from './Components/contact';
import Projects from './Components/Projects';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Services/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
