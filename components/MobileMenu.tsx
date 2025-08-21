"use client";

import { X } from "lucide-react";
import { handleClick } from "./Navbar";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="mobile-menu-overlay"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Drawer */}
      <div
        className={`mobile-menu ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close button */}
        <button
          className="self-end p-2 text-foreground"
          onClick={onClose}
          aria-label="Close menu"
        >
          <X size={24} />
        </button>

        {/* Links */}
        <nav className="flex flex-col space-y-4 text-lg font-medium">
          <button
            className="nav-link text-left"
            onClick={() => {
              handleClick("about");
              onClose();
            }}
          >
            About
          </button>
          <button
            className="nav-link text-left"
            onClick={() => {
              handleClick("projects");
              onClose();
            }}
          >
            Projects
          </button>
          <button
            className="nav-link text-left"
            onClick={() => {
              handleClick("contact");
              onClose();
            }}
          >
            Contact
          </button>
        </nav>
      </div>
    </>
  );
};

export default MobileMenu;
