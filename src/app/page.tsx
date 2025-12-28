"use client";

import Link from "next/link";
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

export default function Home() {
  const [selected, setSelected] = useState("about");

  const renderContent = () => {
    switch (selected) {
      case "about":
        return <AboutMe />;
      case "tools":
        return <Tools />;
      case "contact":
        return <Contact />;
      default:
        return null;
    }
  };

  return (
    <div className="dark min-h-screen w-full flex flex-col lg:flex-row overflow-hidden">
      {/* Left Panel: Profile & Navigation with Gradient Background */}
      <div className="w-full lg:w-5/12 xl:w-1/3 flex flex-col justify-between p-8 lg:p-12 relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 opacity-50 animate-gradient"></div>
        
        <div className="relative z-10">
          
          {/* Profile Content */}
          <div className="flex flex-col items-center lg:items-start space-y-8 mt-8 lg:mt-0 animate-slide-up">
            
            {/* Image Container with Glow */}
            <div className="relative group w-full flex justify-center lg:justify-start"> 
             {/* Adjusted container to center the 3D gallery relative to itself but keep layout alignment */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              
               <div className="relative w-full h-[300px] flex items-center justify-center">
                  <CircularGallery 
                    images={[
                      "/profile_photo.jpg",
                      "/bce.jpg",
                      "/ffm.jpg",
                      "/hua_shan.jpg"
                    ]} 
                  />
               </div>
            </div>

            <div className="text-center lg:text-left space-y-4">
              <NameHeader />
              <div className="space-y-2">
                <h2 className="text-2xl lg:text-3xl font-display font-light tracking-wide text-zinc-100">
                  Computer Science Engineer
                </h2>
                <p className="text-electric-blue-400 font-mono text-lg tracking-wider">
                  European Central Bank
                </p>
              </div>
            </div>

            {/* Navigation Pills */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              {[
                { id: "about", label: "About", icon: selected === "about" ? <BookSolidIcon /> : <BookOutlineIcon /> },
                { id: "tools", label: "Stack", icon: selected === "tools" ? <ToolSolidIcon /> : <ToolOutlineIcon /> },
                { id: "contact", label: "Contact", icon: selected === "contact" ? <PencilSolidIcon /> : <PencilOutlineIcon /> }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSelected(item.id)}
                  className={`
                    px-6 py-3 rounded-full flex items-center gap-3 transition-all duration-300 border backdrop-blur-md cursor-pointer
                    ${selected === item.id 
                      ? 'bg-white/10 border-white/20 text-white shadow-[0_0_20px_rgba(59,130,246,0.5)] scale-105' 
                      : 'bg-black/20 border-white/5 text-zinc-400 hover:bg-white/5 hover:text-white hover:border-white/10'
                    }
                  `}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="font-medium tracking-wide">{item.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="hidden lg:block text-zinc-400 text-sm font-mono mt-auto pt-8">
            © {new Date().getFullYear()} Alberto Barnabò
          </div>
        </div>
      </div>

      {/* Right Panel: Content Area with Gradient Background */}
      <div className="w-full lg:w-7/12 xl:w-2/3 p-4 lg:p-8 flex items-center min-h-screen relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-tl from-violet-600/10 via-fuchsia-600/10 to-cyan-600/10 opacity-40 animate-gradient-slow"></div>
        
        <div className="relative z-10 w-full flex items-center justify-center">
          <div className="w-full h-[600px] lg:h-[800px] glass-card rounded-3xl p-6 lg:p-10 overflow-y-auto custom-scrollbar animate-fade-in delay-100 relative">
            {/* Decorative background element inside card */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 blur-[100px] rounded-full pointer-events-none"></div>
            
            <div className="relative z-10 h-full">
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

