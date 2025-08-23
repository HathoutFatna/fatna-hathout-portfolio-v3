"use client";

import React from "react";
import { handleClick } from "./Navbar";
import Lottie from "lottie-react";
import scrollWhite from "../public/lotties/scroll-down-white.json";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="hero-container">
      {/* Title + Intro */}
      <motion.div
        className="hero-text"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Fatna Hathout
        </motion.h1>

        <motion.div
          className="hero-intro"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
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
        </motion.div>
      </motion.div>

      {/* CTA */}
      <motion.button
        className="hero-cta"
        onClick={() => handleClick("projects")}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        Explore Projects!
      </motion.button>

      {/* Scroll Indicator */}
      <motion.div
        className="hero-scroll"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 1.2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <div className="hero-lottie">
          <Lottie animationData={scrollWhite} autoplay />
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
