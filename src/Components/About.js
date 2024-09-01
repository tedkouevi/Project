import React from 'react';
import './About.css';
import profileImage from '../images/Lf4EGYFq.jpeg'; 

function About() {

  /*const handleDownload = () => {
    // Chemin du fichier dans le dossier public
    const fileUrl = '/portfolio/public/Ted kouevi CV.pdf';
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'Ted kouevi CV.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };*/



  return (
    <section className="about" id="about">
      <div className="about-image">
        <img src={profileImage} alt="Profile" />
      </div>
      <div className="about-content">
        <h2>About Me</h2>
        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
        <ul className="about-details">
          <li><strong>Name:</strong> KOUEVI Ayité Ted</li>
          <li><strong>Date of birth:</strong> March 24, 2004</li>
          <li><strong>Address:</strong> Lomé , TOGO</li>
          <li><strong>Email:</strong> tedkouevi601@gmail.com</li>
          <li><strong>Phone:</strong> +228 79987031</li>
        </ul>
        <p>4 Projects complete</p>
        <button className="btn btn-primary">DOWNLOAD C.V</button>
      </div>
    </section>
  );
}

export default About;
