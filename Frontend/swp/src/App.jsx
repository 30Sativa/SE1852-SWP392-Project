import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <HeroSection />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

const Navbar = () => (
  <nav className="navbar">
    <div className="container navbar-content">
      <h1 className="logo">School Medical Center</h1>
      <ul className="nav-links">
        <li><a href="#services">Services</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  </nav>
);

const HeroSection = () => (
  <header className="hero">
    <h2>Welcome to the School Medical Center</h2>
    <p>Caring for Students' Health & Wellness</p>
  </header>
);

const Services = () => (
  <section id="services" className="section services">
    <h3>Our Services</h3>
    <div className="services-grid">
      {[
        { title: 'First Aid', desc: 'Immediate care for injuries and illnesses.' },
        { title: 'Health Screenings', desc: 'Routine checks and wellness assessments.' },
        { title: 'Health Education', desc: 'Promoting good habits and safety tips.' },
      ].map((service, index) => (
        <div key={index} className="service-card">
          <h4>{service.title}</h4>
          <p>{service.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

const About = () => (
  <section id="about" className="section about">
    <h3>About Us</h3>
    <p>
      Our school medical center is dedicated to ensuring the health and safety of all students.
      We work with parents, teachers, and medical professionals to provide quality care and promote wellness.
    </p>
  </section>
);

const Contact = () => (
  <section id="contact" className="section contact">
    <h3>Contact Us</h3>
    <form className="contact-form">
      <input type="text" placeholder="Your Name" />
      <input type="email" placeholder="Your Email" />
      <textarea placeholder="Your Message" />
      <button type="submit">Send Message</button>
    </form>
  </section>
);

const Footer = () => (
  <footer className="footer">
    <p>© {new Date().getFullYear()} School Medical Center. All rights reserved.</p>
  </footer>
);

export default App;
