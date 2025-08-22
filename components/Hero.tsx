"use client";

import React from "react";
import { handleClick } from "./Navbar";
import Lottie from "lottie-react";
import scrollWhite from "../public/lotties/scroll-down-white.json";

function Hero() {
  return (
    <section className="hero-container">
      {/* Title + Intro */}
      <div className="hero-text">
        <h1 className="hero-title">Fatna Hathout</h1>

        <div className="hero-intro">
          <p>
            <b>Experienced</b> <b>Frontend Developer</b>
          </p>
          <p>
            Skilled in <b>React</b>, <b>Next.js</b>, and modern web
            technologies.
          </p>
          <p>
            Bringing ideas to life with <b>clean</b>, <b>responsive</b>, and{" "}
            <b>interactive</b> design.
          </p>
        </div>
      </div>

      {/* CTA */}
      <button className="hero-cta" onClick={() => handleClick("projects")}>
        Explore Projects!
      </button>

      {/* Scroll Indicator */}
      <div className="hero-scroll">
        <div className="hero-lottie">
          <Lottie animationData={scrollWhite} autoplay />
        </div>
      </div>
    </section>
  );
}

export default Hero;
