"use client";

import React from "react";
import Image from "next/image";
import file from "../public/images/file.svg";
import { MousePointer2 } from "lucide-react";
import { motion } from "framer-motion";

function About() {
  const technologies = [
    "JavaScript (ES6+) & TypeScript",
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "Webflow",
    "WordPress",
  ];

  return (
    <section id="about" className="about">
      {/* Subtitle */}
      <motion.p
        className="about-subtitle"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        About me
      </motion.p>

      {/* Title */}
      <motion.h2
        className="about-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        The Story So Far
      </motion.h2>

      {/* Text */}
      <div className="about-text">
        {[
          `Hi! I’m Fatna, a frontend developer who loves turning ideas into clean, modern web experiences. My journey started during my computer science master’s when I fell in love with how design and code can come together to create something people actually use and enjoy.`,
          `Over the past few years, I’ve worked with startups and e-learning platforms, building websites and apps with React, Next.js, and Tailwind. I also had the chance to design and launch projects in Webflow, where I got to combine my developer mindset with a designer’s eye.`,
          `These days I’m focused on creating interfaces that are responsive, accessible and performance driven, with a constant goal of blending great design with easy usability.`,
        ].map((text, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.3 + i * 0.2 }}
          >
            {text}
          </motion.p>
        ))}

        {/* Tech list */}
        <motion.ul
          className="about-tech"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15, delayChildren: 1 },
            },
          }}
        >
          {technologies.map((tech, index) => (
            <motion.li
              key={index}
              className="about-tech-item"
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.5 }}
            >
              <MousePointer2 className="about-tech-icon" />
              {tech}
            </motion.li>
          ))}
        </motion.ul>
      </div>

      {/* Resume Button */}
      <motion.div
        className="about-resume"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <a href="/cv-fatna-hathout.pdf" download="cv-fatna-hathout">
          <div className="about-resume-btn">
            <Image src={file} alt="file" />
            <span>Download my Resume</span>
          </div>
        </a>
      </motion.div>
    </section>
  );
}

export default About;
