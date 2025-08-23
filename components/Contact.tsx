import React from "react";

function Contact() {
  return (
    <section id="contact" className="contact">
      <p className="contact-subtitle">Get In Touch</p>
      <h2 className="contact-title">Always Open to New Challenges</h2>
      <p>
        I’m always open to new ideas, collaborations, or challenges. If you
        think we could create something great together, feel free to reach out!
      </p>
      <a href="mailto:fatnahathout@gmail.com" className="mb-20">
        <div className="contact-cta">
          <span>Say Hello</span>
        </div>
      </a>
    </section>
  );
}

export default Contact;
