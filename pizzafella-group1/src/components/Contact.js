//created by paramjeet kaur
import React from 'react';
import NavBar from './Navbar';
import Footer from './Footer';

const Contact = () => {
  return (
    <>
      <NavBar />
      <section className="contact-form">
        <h2>Contact Us</h2>
        <p>Have a question or feedback? Reach out to us!</p>

        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>

          <button className="btn btn-primary" type="submit">Send Message</button>
        </form>
      </section>

      <section className="map">
        <h2>Our Location</h2>
        
        <iframe
          width="100%"
          height="400"
          frameBorder="0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3222.649420224733!2d-74.0065703848467!3d40.71320978434998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2591da96cace1%3A0x54b8e88df84071b6!2s123%20Main%20St%2C%20Cityville%2C%20USA!5e0!3m2!1sen!2suk!4v1640197437883!5m2!1sen!2suk"
          allowFullScreen></iframe>
      </section>

      <Footer />
    </>
  );
}

export default Contact;