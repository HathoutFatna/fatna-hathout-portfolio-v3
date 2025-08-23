"use client";

import Image from "next/image";
import { Menu, Send } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import MobileMenu from "./MobileMenu";

import logoWhite from "../public/images/logo-f-white.svg";

export const handleClick = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    const position = element.getBoundingClientRect();
    window.scrollTo({
      top: position.top + window.scrollY - 50,
      left: position.left,
      behavior: "smooth",
    });
  }
};

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar relative flex items-center justify-between px-4 py-3">
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Image
          src={logoWhite}
          alt="Logo"
          className="h-auto w-auto max-w-[150px]"
          sizes="(max-width: 640px) 120px, 150px"
          priority
        />
      </motion.div>

      {/* Desktop Nav Links */}
      <motion.ul
        className="nav-links"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <li className="nav-link" onClick={() => handleClick("about")}>
          About
        </li>
        <li className="nav-link" onClick={() => handleClick("projects")}>
          Projects
        </li>
        <li className="nav-link" onClick={() => handleClick("contact")}>
          Contact
        </li>
      </motion.ul>

      {/* CTA Button */}
      <motion.div
        className="cta-button group"
        onClick={() => handleClick("contact")}
        aria-label="Open contact section"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <div className="group-hover:rotate-45 transform transition-transform duration-200">
          <Send />
        </div>
        <span>Let&apos;s talk</span>
      </motion.div>

      {/* Mobile Menu Button */}
      <motion.button
        className="md:hidden p-2 text-foreground"
        onClick={() => setMenuOpen(true)}
        aria-label="Open menu"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <Menu size={28} />
      </motion.button>

      {/* Mobile Menu */}
      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
};

export default Navbar;
