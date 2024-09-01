import './Services.css'


function Services() {
    return (
      <section className="services" id="service">
        <h2>Our Service</h2>
        <div className="service-cards">
          <div className="service-card">
            <i className="bi bi-laptop"></i>
            <h3>Web Developpement</h3>
            <p>We create responsive and efficient websites, adapted to the needs of your business for an optimal user experience.</p>
          </div>
          <div className="service-card">
            <i className="bi bi-phone"></i>
            <h3>Web Apps</h3>
            <p>Develop your web applications with advanced features and an intuitive interface, designed for all devices.</p>
          </div>
          <div className="service-card">
            <i className="bi bi-bar-chart"></i>
            <h3>Mobile Apps </h3>
            <p>Develop your mobile applications with advanced features and an intuitive interface, designed for all devices.</p>
          </div>
        </div>
      </section>
    );
  }
  
  export default Services;
  