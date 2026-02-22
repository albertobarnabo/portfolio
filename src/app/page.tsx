"use client";

import BookOutlineIcon from "@/icons/BookOutlineIcon";
import BookSolidIcon from "@/icons/BookSolidIcon";
import { useState } from "react";

import AboutMe from "@/components/AboutMe";
import Tools from "@/components/Tools";
import Contact from "@/components/Contacts";
import ToolOutlineIcon from "@/icons/ToolOutlineIcon";
import ToolSolidIcon from "@/icons/ToolSolidIcon";
import PencilSolidIcon from "@/icons/PencilSolidIcon";
import PencilOutlineIcon from "@/icons/PencilOutlineIcon";
import NameHeader from "@/components/NameHeader";
import CircularGallery from "@/components/CircularGallery";

const NAV_ITEMS = [
  { id: "about",   label: "About",   activeIcon: <BookSolidIcon />,   inactiveIcon: <BookOutlineIcon /> },
  { id: "tools",   label: "Stack",   activeIcon: <ToolSolidIcon />,   inactiveIcon: <ToolOutlineIcon /> },
  { id: "contact", label: "Contact", activeIcon: <PencilSolidIcon />, inactiveIcon: <PencilOutlineIcon /> },
];

const PHOTOS = ["/profile_photo.jpg", "/ffm.jpg", "/archery.jpeg", "/bce.jpg"];

export default function Home() {
  const [selected, setSelected] = useState("about");

  const renderContent = () => {
    switch (selected) {
      case "about":   return <AboutMe />;
      case "tools":   return <Tools />;
      case "contact": return <Contact />;
      default:        return null;
    }
  };

  return (
    <div
      className="dark min-h-screen w-full flex flex-col"
      style={{
        background: "linear-gradient(160deg, #0c0c0f 0%, #101014 50%, #0c0c0f 100%)",
      }}
    >
      {/* ── Ambient glow (very subtle, single color, no neon) ─── */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 30% 20%, rgba(160,160,190,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 flex flex-col gap-4 px-4 md:px-8 lg:px-16 py-6 lg:py-10 max-w-6xl mx-auto w-full">

        {/* ── HERO CARD ─────────────────────────────────────────── */}
        <header className="glass-panel rounded-3xl animate-fade-in overflow-hidden">
          <div className="flex flex-col md:flex-row items-stretch min-h-[420px] lg:min-h-[480px]">

            {/* Photo — left column */}
            <div className="md:w-2/5 lg:w-[42%] relative min-h-[300px] md:min-h-0">
              <CircularGallery images={PHOTOS} />
            </div>

            {/* Info — right column */}
            <div className="md:w-3/5 lg:w-[58%] flex flex-col justify-center px-8 md:px-10 lg:px-14 py-10 md:py-12 gap-7">
              {/* Name + title */}
              <div className="space-y-3">
                <NameHeader />
                <div className="space-y-1">
                  <h2 className="text-xl lg:text-2xl font-light tracking-wide text-zinc-200">
                    Computer Science Engineer
                  </h2>
                  <p
                    className="text-sm font-mono tracking-widest uppercase"
                    style={{ color: "rgba(200,200,220,0.55)" }}
                  >
                    European Central Bank
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div
                className="w-12 rounded-full"
                style={{ height: "1px", background: "rgba(255,255,255,0.1)" }}
              />

              {/* Navigation pills */}
              <nav className="flex flex-wrap gap-3">
                {NAV_ITEMS.map(({ id, label, activeIcon, inactiveIcon }) => {
                  const isActive = selected === id;
                  return (
                    <button
                      key={id}
                      onClick={() => setSelected(id)}
                      className="flex items-center gap-2.5 px-5 py-2.5 rounded-full transition-all duration-300 cursor-pointer text-sm font-medium tracking-wide"
                      style={{
                        background: isActive
                          ? "rgba(255,255,255,0.12)"
                          : "rgba(255,255,255,0.04)",
                        border: isActive
                          ? "1px solid rgba(255,255,255,0.18)"
                          : "1px solid rgba(255,255,255,0.06)",
                        color: isActive ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.4)",
                        backdropFilter: "blur(12px)",
                      }}
                    >
                      <span className="text-base">{isActive ? activeIcon : inactiveIcon}</span>
                      {label}
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>
        </header>

        {/* ── CONTENT CARD ─────────────────────────────────────── */}
        <main
          className="glass-panel rounded-3xl animate-fade-in-delay overflow-hidden"
        >
          <div className="p-6 md:p-10 lg:p-12 min-h-[480px] max-h-[70vh] overflow-y-auto custom-scrollbar">
            {renderContent()}
          </div>
        </main>

        {/* ── FOOTER ───────────────────────────────────────────── */}
        <footer
          className="text-center pb-2"
          style={{
            fontFamily: "var(--font-geist-mono)",
            fontSize: "12px",
            letterSpacing: "0.08em",
            color: "rgba(255,255,255,0.2)",
          }}
        >
          © {new Date().getFullYear()} Alberto Barnabò
        </footer>
      </div>
    </div>
  );
}
