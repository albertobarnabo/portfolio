"use client";

import AboutMe from "../components/AboutMe";
import Tools from "../components/Tools";
import Contact from "../components/Contacts";
import TopBar from "../components/TopBar";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-[#060810] text-[#eef2ff] overflow-x-hidden">
      <TopBar />

      {/* ─── HERO ───────────────────────────────────────── */}
      <Hero />

      {/* ─── ABOUT + STACK + RESEARCH + JOURNEY ─────────── */}
      <AboutMe />

      {/* ─── PROJECTS ───────────────────────────────────── */}
      <Tools />

      {/* ─── CONTACT ────────────────────────────────────── */}
      <Contact />

      {/* ─── FOOTER ─────────────────────────────────────── */}
      <footer className="border-t border-white/5 py-8">
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-3">
          <span className="label-mono text-[#4a5168]">
            © {new Date().getFullYear()} Alberto Barnabò — All rights reserved
          </span>
          <span className="label-mono text-[#4a5168]">Frankfurt, Germany</span>
        </div>
      </footer>
    </div>
  );
}
