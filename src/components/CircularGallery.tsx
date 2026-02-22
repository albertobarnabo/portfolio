"use client";

import React, { useState, useCallback } from "react";
import Image from "next/image";

interface CircularGalleryProps {
  images: string[];
}

export default function CircularGallery({ images }: CircularGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fading, setFading] = useState(false);

  const cyclePhoto = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      if (fading) return;
      setFading(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setFading(false);
      }, 260);
    },
    [fading, images.length]
  );

  return (
    <div
      className="relative w-full h-full flex items-center justify-center cursor-pointer select-none"
      onClick={cyclePhoto}
      title="Click to see another photo"
    >
      {/* Photo */}
      <div
        className="relative w-full h-full rounded-2xl overflow-hidden photo-blend"
        style={{
          transition: "opacity 0.28s ease",
          opacity: fading ? 0 : 1,
        }}
      >
        <Image
          key={currentIndex}
          src={images[currentIndex]}
          alt={`Photo ${currentIndex + 1}`}
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 80vw, 40vw"
          priority={currentIndex === 0}
        />
        {/* Subtle dark inner vignette for depth */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 70% at 50% 40%, transparent 55%, rgba(0,0,0,0.25) 100%)",
          }}
        />
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
        {images.map((_, i) => (
          <span
            key={i}
            className="block rounded-full transition-all duration-300"
            style={{
              width: i === currentIndex ? "18px" : "5px",
              height: "5px",
              background:
                i === currentIndex
                  ? "rgba(255,255,255,0.8)"
                  : "rgba(255,255,255,0.25)",
            }}
          />
        ))}
      </div>
    </div>
  );
}
