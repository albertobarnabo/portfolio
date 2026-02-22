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

  // Fix #3: Lock body scroll when mobile menu is open so the overlay
  // doesn't get pulled along with page scroll.
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "nav-glass py-0" : "bg-transparent py-4"
      }`}
    >
      <div className="mx-auto px-6 md:px-10 h-16 md:h-28 flex items-center justify-between">
        {/* Fix #2: reduced mobile name size from text-xl to text-base */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="text-base md:text-3xl font-black tracking-tighter text-white select-none cursor-pointer hover:opacity-80 transition-opacity"
        >
          Alberto <span className="text-gradient-soft">Barnabò</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex absolute left-1/2 -translate-x-1/2 items-center gap-7">
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

      {/* Fix #3: Mobile Menu Overlay — uses fixed positioning anchored to
          the viewport, not the document. The key addition is top-0 left-0
          w-screen h-screen (instead of inset-0 on a non-fixed ancestor)
          and the body scroll lock in the useEffect above. */}
      <div
        className={`fixed top-0 left-0 w-screen h-screen z-[60] xl:hidden transition-all duration-500 ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-[#060810]/95 backdrop-blur-xl"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Close Button */}
        <button
          className="absolute top-6 right-6 text-white p-2 z-[70]"
          onClick={() => setMobileMenuOpen(false)}
          aria-label="Close menu"
        >
          <HiX className="w-8 h-8" />
        </button>

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
        </nav>
      </div>
    </header>
  );
}
