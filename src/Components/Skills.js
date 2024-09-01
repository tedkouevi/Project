import React from 'react';
import './Skills.css';

function Skills() {
  return (
    <section className="skills" id="skills">
      <h2>My Skills</h2>
      <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
      <div className="skills-list">
        <div className="skill">
          <span>Flutter</span>
          <div className="skill-bar">
            <div className="skill-level" style={{ width: '90%' }}></div>
          </div>
        </div>
        <div className="skill">
          <span>HTML5</span>
          <div className="skill-bar">
            <div className="skill-level" style={{ width: '95%' }}></div>
          </div>
        </div>
        <div className="skill">
          <span>Java</span>
          <div className="skill-bar">
            <div className="skill-level" style={{ width: '70%' }}></div>
          </div>
        </div>
        <div className="skill">
          <span>Python</span>
          <div className="skill-bar">
            <div className="skill-level" style={{ width: '85%' }}></div>
          </div>
        </div>
        <div className="skill">
          <span>CSS3</span>
          <div className="skill-bar">
            <div className="skill-level" style={{ width: '90%' }}></div>
          </div>
        </div>
        <div className="skill">
          <span>JavaScript</span>
          <div className="skill-bar">
            <div className="skill-level" style={{ width: '80%' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
