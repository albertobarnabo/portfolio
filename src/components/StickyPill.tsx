"use client";

import { useEffect, useState } from "react";

/** "Get in touch" pill that detaches to the bottom-right once the hero has scrolled away. */
export default function StickyPill() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const hero = document.getElementById("top");
    const contact = document.getElementById("contact");
    if (!hero || !contact) return;
    let heroOut = false, contactIn = false;
    const apply = () => setShow(heroOut && !contactIn);
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.target === hero) heroOut = !e.isIntersecting;
          if (e.target === contact) contactIn = e.isIntersecting;
        }
        apply();
      },
      { threshold: 0.05 },
    );
    io.observe(hero);
    io.observe(contact);
    return () => io.disconnect();
  }, []);
  return (
    <a
      href="#contact"
      aria-hidden={!show}
      tabIndex={show ? 0 : -1}
      className={`theme-night btn-primary fixed bottom-6 right-6 z-40 shadow-[0_12px_32px_rgba(0,0,0,0.35)] transition-all duration-500 ease-out ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      Get in touch
    </a>
  );
}
