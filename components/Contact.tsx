"use client";
import React from "react";
import { motion } from "framer-motion";

function Contact() {
  return (
    <section id="contact" className="contact">
      <motion.p
        className="contact-subtitle"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Get In Touch
      </motion.p>

      <motion.h2
        className="contact-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        Always Open to New Challenges
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        I’m always open to new ideas, collaborations, or challenges. If you
        think we could create something great together, feel free to reach out!
      </motion.p>

      <motion.a
        href="mailto:fatnahathout@gmail.com"
        className="mb-20"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <div className="contact-cta">
          <span>Say Hello</span>
        </div>
      </motion.a>
    </section>
  );
}

export default Contact;
