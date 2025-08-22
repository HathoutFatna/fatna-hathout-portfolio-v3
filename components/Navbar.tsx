"use client";

import Image from "next/image";
import { Menu } from "lucide-react";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

import logoWhite from "../public/images/logo-f-white.svg";
import telegramWhite from "../public/images/telegram-white.svg";

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
      <Image
        src={logoWhite}
        alt="Logo"
        className="h-auto w-auto max-w-[150px]"
        sizes="(max-width: 640px) 120px, 150px"
        priority
      />

      <ul className="nav-links">
        <li className="nav-link" onClick={() => handleClick("about")}>
          About
        </li>
        <li className="nav-link" onClick={() => handleClick("projects")}>
          Projects
        </li>
        <li className="nav-link" onClick={() => handleClick("contact")}>
          Contact
        </li>
      </ul>

      <div
        className="cta-button group"
        onClick={() => handleClick("contact")}
        aria-label="Open contact section"
      >
        <div className="group-hover:rotate-45 transform transition-transform duration-200">
          <Image src={telegramWhite} alt="Telegram" sizes="32px" />
        </div>
        <span>Let&apos;s talk</span>
      </div>

      <button
        className="md:hidden p-2 text-foreground"
        onClick={() => setMenuOpen(true)}
        aria-label="Open menu"
      >
        <Menu size={28} />
      </button>

      {/* Mobile Menu */}
      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
};

export default Navbar;
