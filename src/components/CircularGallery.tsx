"use client";

import React, { useState } from 'react';
import Image from 'next/image';

interface CircularGalleryProps {
  images: string[];
}

export default function CircularGallery({ images }: CircularGalleryProps) {
  const [rotationIndex, setRotationIndex] = useState(0);

  const n = images.length;
  const theta = 360 / n;
  const radius = 280; 

  const rotateCarousel = (e: React.MouseEvent) => {
    // Prevent any weird child bubbling issues
    e.stopPropagation();
    setRotationIndex((prev) => prev + 1);
  };

  return (
    // 1. We put the onClick on this outer, flat DIV. It never moves, so it's always clickable.
    <div 
      className="relative w-full h-full flex items-center justify-center perspective-1000 z-20 cursor-pointer"
      onClick={rotateCarousel}
    >
      <div 
        className="relative w-56 h-56 lg:w-64 lg:h-64 preserve-3d transition-transform duration-1000 pointer-events-none" 
        style={{ 
          transform: `rotateY(${rotationIndex * -theta}deg)`,
          transformStyle: 'preserve-3d' 
        }}
      >
        {images.map((src, index) => {
          const rotation = theta * index;
          return (
            <div
              key={index}
              className="absolute inset-0 w-full h-full ring-4 ring-white/10 rounded-2xl shadow-2xl overflow-hidden bg-black/50"
              style={{
                // translateZ(radius) pushes images OUT from the center
                transform: `rotateY(${rotation}deg) translateZ(${radius}px)`,
                backfaceVisibility: 'visible',
                WebkitBackfaceVisibility: 'visible'
              }}
            >
              <Image
                src={src}
                alt={`Gallery Image ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 192px, 256px"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
          );
        })}
      </div>
      
      <div className="absolute -bottom-3 lg:-bottom-3 text-white/40 text-xs font-mono tracking-widest animate-pulse">
        Click on the photo to see more!
      </div>
    </div>
  );
}