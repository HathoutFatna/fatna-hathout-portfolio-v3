"use client";
import React from "react";
import Image from "next/image";
import file from "../public/images/file.svg";
import { MousePointer2 } from "lucide-react";

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
      <p className="about-subtitle">About me</p>
      <h2 className="about-title">The Story So Far</h2>

      <div className="about-text">
        <p>
          Hi! I’m <strong>Fatna</strong>, a frontend developer who loves turning
          ideas into clean, modern web experiences. My journey started during my
          computer science master’s when I fell in love with how design and code
          can come together to create something people actually use and enjoy.
        </p>

        <p>
          Over the past few years, I’ve worked with startups and e-learning
          platforms, building websites and apps with React, Next.js, and
          Tailwind. I also had the chance to design and launch projects in
          Webflow, where I got to combine my developer mindset with a designer’s
          eye.
        </p>

        <p>
          These days I’m focused on creating interfaces that are responsive,
          accessible and performance driven, with a constant goal of blending
          great design with easy usability.
        </p>

        <ul className="about-tech">
          {technologies.map((tech, index) => (
            <li key={index} className="about-tech-item">
              <MousePointer2 className="about-tech-icon" />
              {tech}
            </li>
          ))}
        </ul>
      </div>

      <div className="about-resume">
        <a href="/cv-fatna-hathout.pdf" download="cv-fatna-hathout">
          <div className="about-resume-btn">
            <Image src={file} alt="file" />
            <span>Download my Resume</span>
          </div>
        </a>
      </div>
    </section>
  );
}

export default About;
