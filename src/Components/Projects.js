import Restaurant from "../images/Our Recent Website Design - Restaurant - Responsive Website.jpg";
import Calculator from "../images/Daily UI Challenge 10_Calculator App.jpg";
import Coffee from "../images/Coffee Delivery Mobile App.jpg";
import Converter from "../images/Currency Exchange Mobile App UI_UX Design.jpg";
import "./Projects.css";

function Projects() {
  return (
    <section className="services" id="service">
      <h2>Our Projects</h2>
      <div className="service-cards">
        <ul className="projects">
          <li>
          <div className="service-card">
          <img src={Restaurant} alt="Restaurant Website" />
          <h3>Restaurant Website</h3>
          <p>
            We develop a responsive website for your restaurant, ensuring a
            smooth and user-friendly experience for your customers.
          </p>
        </div>
          </li>
          <li className="calculator">
          <div className="service-card">
        <img src={Calculator} alt="Calculator App" />
        <h3>Calculator App</h3>
        <p>
          We develop a sleek and user-friendly calculator app for your mobile
          devices, offering advanced mathematical operations and customizable
          settings.
        </p>
      </div>
          </li>
          <li>
          <div className="service-card">
        <img src={Coffee} alt="Coffee Delivery App" />
        <h3> Coffee Delivery App</h3>
        <p>
          We develop a sleek and user-friendly coffee delivery app for your
          mobile devices, offering easy and convenient ordering of coffee and
          drinks.
        </p>
      </div>
          </li>
          <li>
          <div className="service-card">
        <img src={Converter} alt="Converter app"></img>
        <h3>Device converter App</h3>
        <p>
          We develop a sleek and user-friendly device converter app for your
          mobile devices, offering easy and convenient conversions between
          different units and currencies.
        </p>
      </div>
          </li>
        </ul>
      </div> 
    </section>
  );
}

export default Projects;