"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { personalInfo } from "../data/portfolioData";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <title>GitHub</title>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <title>LinkedIn</title>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Certifications", href: "#certifications" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const scrollPosition = window.scrollY + 200;
      for (const item of navItems) {
        const el = document.getElementById(item.href.substring(1));
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.href);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const LeetCodeIcon = () => (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5 hover:text-accent-green transition-colors duration-200"
      aria-hidden="true"
    >
      <title>LeetCode</title>
      <path d="M13.483 0a1.374 1.374 0 0 0-.961.414l-9.849 9.85a1.375 1.375 0 0 0 0 1.956l1.79 1.79a1.353 1.353 0 0 0 1.953-.006l8.854-8.868.083.086c.71.7 1.7 1.145 2.79 1.145 2.228 0 4.03-1.802 4.03-4.03C22.183 1.802 20.38 0 18.15 0c-1.09 0-2.08.445-2.79 1.145l-.08-.08-.105-.109A1.378 1.378 0 0 0 13.483 0zm-7.79 14.153a1.374 1.374 0 0 0-.965.404l-3.328 3.329a1.375 1.375 0 0 0 0 1.953l1.8 1.8a1.375 1.375 0 0 0 1.953 0l3.329-3.329a1.375 1.375 0 0 0 0-1.953l-1.8-1.8a1.378 1.378 0 0 0-.989-.404zm13.13 1.077c-.907 0-1.748.378-2.35 1.002l-.248-.248a1.375 1.375 0 0 0-1.954 0l-3.329 3.329a1.375 1.375 0 0 0 0 1.953l1.8 1.8a1.375 1.375 0 0 0 1.953 0l3.329-3.329a1.374 1.374 0 0 0 0-1.953l-.226-.226c.563-.524 1.307-.842 2.13-.842 1.764 0 3.2 1.436 3.2 3.2s-1.436 3.2-3.2 3.2c-1.606 0-2.936-1.19-3.167-2.74H15.17c-.4 1.14-.94 2.14-1.62 3.007a1.374 1.374 0 0 0 .963 2.373c1.09 0 2.08-.445 2.79-1.145l.08.08.105.109a1.374 1.374 0 0 0 1.926 0l4.329-4.329a1.375 1.375 0 0 0 0-1.953l-4.329-4.329a1.374 1.374 0 0 0-.961-.414z" />
    </svg>
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 border-b border-white/10 backdrop-blur-md py-4 shadow-sm"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Name / Brand */}
        <Link href="#" className="flex flex-col group select-none interactive transition-transform hover:-translate-y-0.5">
          <span className="font-mono text-xs tracking-widest text-accent-green font-bold">
            MS / PORTFOLIO
          </span>
          <span className="font-orbitron font-extrabold text-base text-white tracking-wide group-hover:text-zinc-400 transition-colors">
            {personalInfo.name}
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6" aria-label="Main Navigation">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`font-orbitron text-xs uppercase tracking-wider transition-colors duration-200 hover:text-white relative py-1 interactive ${
                activeSection === item.href ? "text-white font-bold" : "text-zinc-400"
              }`}
            >
              {item.name}
              {activeSection === item.href && (
                <motion.span
                  layoutId="activeNavLine"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent-green shadow-[0_0_8px_#059669]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
        </nav>

        {/* Desktop Socials */}
        <div className="hidden lg:flex items-center gap-4 border-l border-zinc-800 pl-6">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="text-slate-600 hover:text-accent-green transition-all duration-200 interactive hover:-translate-y-0.5"
          >
            <GithubIcon className="h-5 w-5" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="text-slate-600 hover:text-accent-green transition-all duration-200 interactive hover:-translate-y-0.5"
          >
            <LinkedinIcon className="h-5 w-5" />
          </a>
          <a
            href={personalInfo.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LeetCode Profile"
            className="text-slate-600 hover:text-accent-green transition-all duration-200 interactive hover:-translate-y-0.5"
          >
            <LeetCodeIcon />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          aria-label={isOpen ? "Close Menu" : "Open Menu"}
          className="lg:hidden p-2 text-white hover:text-zinc-400 transition-colors interactive"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-black/95 border-b border-zinc-800 backdrop-blur-xl overflow-hidden shadow-lg"
          >
            <nav className="flex flex-col px-6 py-8 gap-5" aria-label="Mobile Navigation">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`font-orbitron text-sm uppercase tracking-wider py-1 ${
                    activeSection === item.href ? "text-white font-bold" : "text-zinc-400"
                  } hover:text-white transition-colors`}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex items-center gap-6 mt-4 pt-6 border-t border-zinc-800">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  <GithubIcon className="h-6 w-6" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  <LinkedinIcon className="h-6 w-6" />
                </a>
                <a
                  href={personalInfo.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LeetCode Profile"
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  <LeetCodeIcon />
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
