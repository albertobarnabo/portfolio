"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="noise-bg relative min-h-screen flex items-center overflow-hidden">
      {/* ─── HERO ────────── */}

      {/* ── DESKTOP PHOTO (Absolute) ───────────────────────────────────
            Only visible on medium screens and up.
            Exactly as it was before to preserve desktop design.
        */}
      <div className="absolute inset-y-0 right-0 w-1/2 z-[1] hidden md:block">
        <Image
          src="/profile_photo.jpg"
          alt="Alberto Barnabò"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Desktop Gradients */}
        <div
          className="absolute inset-0 z-[2]"
          style={{
            background:
              "linear-gradient(to bottom, #060810 0%, transparent 15%, transparent 80%, #060810 100%)",
          }}
        />
        <div
          className="absolute inset-0 z-[3]"
          style={{
            background:
              "linear-gradient(to right, #060810 0%, #0b1535 10%, #0f2050 20%, transparent 42%)",
          }}
        />
        <div
          className="absolute inset-0 z-[2]"
          style={{
            background: "linear-gradient(to left, #060810 0%, transparent 14%)",
          }}
        />
      </div>

      {/* ── CONTENT ─────────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full pb-24 md:pb-32 pt-32">
        <div className="w-full md:w-1/2 animate-fade-up flex flex-col items-center md:items-start text-center md:text-left">
          {/* Label */}
          <div className="label-mono text-[#3ecfa4] mb-6 flex items-center gap-3">
            <span className="w-8 h-px bg-[#3ecfa4]/60 hidden md:block" />
            Computer Science Engineer | AI Specialist
            <span className="w-8 h-px bg-[#3ecfa4]/60 md:hidden" />
          </div>

          {/* Name */}
          <h1 className="text-hero text-[clamp(2.5rem,10vw,7rem)] md:text-[clamp(3.5rem,12vw,7rem)] text-white mb-4 leading-[0.9]">
            Alberto <br className="hidden md:block" />
            <span className="text-gradient-main">Barnabò</span>
          </h1>

          {/* ── MOBILE PHOTO (Stacked) ──────────────────────────────────
                Only visible on mobile.
                Drastic move to ensure mobile-friendliness.
            */}
          <div className="md:hidden relative aspect-[4/5] w-full max-w-sm mx-auto my-10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            <Image
              src="/profile_photo.jpg"
              alt="Alberto Barnabò"
              fill
              className="object-cover object-center"
            />
            {/* Mobile-specific bottom fade for text isolation */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#060810] via-transparent to-transparent opacity-60" />
          </div>

          {/* Subheading */}
          <p className="text-[1.1rem] md:text-[1.15rem] text-[#8a94b0] font-light leading-relaxed max-w-xl mb-10">
            European Central Bank
          </p>
        </div>
      </div>

      {/* ── Global top/bottom vignette (over everything) ────────────── */}
      <div
        className="absolute inset-0 z-[9] pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, #060810 0%, transparent 12%, transparent 84%, #060810 100%)",
        }}
      />
    </section>
  );
}
