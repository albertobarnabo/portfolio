"use client";

import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { SiHuggingface } from "react-icons/si";
import { SITE, OPEN_TO_ROLES } from "@/data/site";

const LINKS = [
  { label: "Work", href: "#work", id: "work" },
  { label: "Models", href: "#models", id: "models" },
  { label: "About", href: "#about", id: "about" },
  { label: "Contact", href: "#contact", id: "contact" },
];

type Theme = "night" | "paper" | "flare";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<Theme>("night");
  const [active, setActive] = useState<string>("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-nav-theme]"));
    const anchors = Array.from(document.querySelectorAll<HTMLElement>("main section[id], footer[id]"));
    let raf = 0;
    const update = () => {
      raf = 0;
      const y = window.scrollY;
      setScrolled(y > 24);
      const probe = y + 40;
      let t: Theme = "night";
      for (const s of sections) if (s.offsetTop <= probe) t = (s.dataset.navTheme as Theme) || "night";
      setTheme(t);
      let a = "";
      for (const s of anchors) if (s.offsetTop - 120 <= y) a = s.id;
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
      style={{ backgroundColor: "color-mix(in srgb, var(--bg) 92%, transparent)" }}
    >
      <div className="wrap flex h-16 items-center justify-between">
        <a href="#top" aria-label="Back to top" className="reg-frame rounded-md" style={{ "--reg": "4px" } as React.CSSProperties}>
          <span className="font-display flex h-8 w-9 items-center justify-center rounded-md border border-rule-strong bg-bg text-[15px] font-extrabold tracking-tight">
            AB
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`relative font-mono text-[13px] transition-colors hover:text-accent ${active === l.id ? "text-text" : "text-muted"}`}
            >
              {l.label}
              <span
                aria-hidden
                className={`absolute -bottom-[7px] left-0 h-[2px] w-full bg-accent transition-opacity duration-300 ${active === l.id ? "opacity-100" : "opacity-0"}`}
              />
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          {OPEN_TO_ROLES && (
            <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
              <span className="h-2 w-2 rounded-full bg-accent-2 motion-safe:animate-pulse" aria-hidden />
              Open to roles
            </span>
          )}
          <a href={SITE.hf} aria-label="Hugging Face" className="text-muted transition-colors hover:text-accent" target="_blank" rel="noreferrer">
            <SiHuggingface size={17} />
          </a>
          <a href={SITE.github} aria-label="GitHub" className="text-muted transition-colors hover:text-accent" target="_blank" rel="noreferrer">
            <FaGithub size={17} />
          </a>
        </div>

        <button
          type="button"
          className="font-mono text-[13px] text-muted md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Primary" className="wrap border-t border-rule bg-bg pb-5 md:hidden">
          <ul className="flex flex-col">
            {LINKS.map((l) => (
              <li key={l.href} className="border-b border-rule">
                <a href={l.href} onClick={() => setOpen(false)} className="font-display block py-4 text-[22px] font-bold">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex gap-6 text-muted">
            <a href={SITE.hf} aria-label="Hugging Face" target="_blank" rel="noreferrer"><SiHuggingface size={20} /></a>
            <a href={SITE.github} aria-label="GitHub" target="_blank" rel="noreferrer"><FaGithub size={20} /></a>
          </div>
        </nav>
      )}
    </header>
  );
}
