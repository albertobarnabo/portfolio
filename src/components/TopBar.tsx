"use client";

import { useState, useEffect } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Research", href: "#research" },
  { label: "Journey", href: "#journey" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function TopBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "nav-glass py-0" : "bg-transparent py-4"
      }`}
    >
      <div className="mx-auto px-6 md:px-10 h-20 md:h-28 flex items-center justify-between">
        <span className="text-2xl md:text-3xl font-black tracking-tighter text-white select-none">
          Alberto <span className="text-gradient-soft">Barnabò</span>
        </span>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="label-mono text-xl font-bold text-[#8a94b0] hover:text-[#eef2ff] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="btn-primary text-base md:text-lg py-3 md:py-4 px-6 md:px-10 hidden sm:inline-flex"
          >
            Get in touch
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="xl:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <HiX className="w-8 h-8" />
            ) : (
              <HiMenuAlt3 className="w-8 h-8" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[60] xl:hidden transition-all duration-500 ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-[#060810]/95 backdrop-blur-xl"
          onClick={() => setMobileMenuOpen(false)}
        />
        <nav className="relative h-full flex flex-col items-center justify-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-3xl font-bold text-white tracking-tight hover:text-gradient-soft transition-all duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="btn-primary text-xl py-5 px-12 mt-4"
          >
            Get in touch
          </a>
        </nav>
      </div>
    </header>
  );
}
