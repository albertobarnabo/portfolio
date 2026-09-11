"use client";

import { useEffect, useState } from "react";
import { SITE } from "@/data/site";

const LINKS = [
  { label: "Work", href: "#work", id: "work" },
  { label: "Models", href: "#models", id: "models" },
  { label: "About", href: "#about", id: "about" },
  { label: "Contact", href: "#contact", id: "contact" },
];

type Theme = "night" | "paper" | "champagne";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<Theme>("night");
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-nav-theme]"));
    const anchors = Array.from(document.querySelectorAll<HTMLElement>("main section[id], footer[id]"));
    let raf = 0;
    const update = () => {
      raf = 0;
      const y = window.scrollY;
      setScrolled(y > 24);
      let t: Theme = "night";
      for (const s of sections) if (s.offsetTop <= y + 64) t = (s.dataset.navTheme as Theme) || "night";
      setTheme(t);
      let a = "";
      for (const s of anchors) if (s.offsetTop - 140 <= y) a = s.id;
      setActive(a);
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); };
  }, []);

  return (
    <header
      className={`theme-${theme} sticky top-0 z-50 border-b transition-[background-color,border-color,color] duration-300 ${
        scrolled ? "border-rule" : "border-transparent"
      }`}
      style={{ backgroundColor: "color-mix(in srgb, var(--bg) 90%, transparent)", backdropFilter: "blur(10px)" }}
    >
      <div className="wrap flex h-16 items-center justify-between">
        <a href="#top" aria-label={SITE.name} className="text-[0.9375rem] font-medium tracking-[-0.01em]">
          <span className="text-accent">A</span>lberto <span className="text-accent">B</span>arnabò
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`relative py-1 text-[0.875rem] transition-colors duration-300 hover:text-accent ${active === l.id ? "text-text" : "text-muted"}`}
            >
              {l.label}
              <span
                aria-hidden
                className={`absolute -bottom-[3px] left-0 h-px w-full bg-accent transition-opacity duration-300 ${active === l.id ? "opacity-100" : "opacity-0"}`}
              />
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-6 text-[0.875rem] text-muted md:flex">
          <a href={SITE.hf} className="transition-colors hover:text-accent" target="_blank" rel="noreferrer">Hugging Face</a>
          <a href={SITE.github} className="transition-colors hover:text-accent" target="_blank" rel="noreferrer">GitHub</a>
        </div>

        <button
          type="button"
          className="text-[0.875rem] text-muted md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Primary" className="wrap border-t border-rule bg-bg pb-6 md:hidden">
          <ul>
            {LINKS.map((l) => (
              <li key={l.href} className="border-b border-rule">
                <a href={l.href} onClick={() => setOpen(false)} className="block py-4 text-[1.375rem] tracking-[-0.02em]">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex gap-6 text-[0.875rem] text-muted">
            <a href={SITE.hf} target="_blank" rel="noreferrer">Hugging Face</a>
            <a href={SITE.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={SITE.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </nav>
      )}
    </header>
  );
}
