import './contact.css'

function Contact() {
    return (
      <section className="newsletter">
        <h2>Newsletter</h2>
        <form>
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Subscribe</button>
        </form>
      </section>
    );
  }
  
  export default Contact;