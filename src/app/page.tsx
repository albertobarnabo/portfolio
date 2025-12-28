"use client";

import Image from "next/image";
import profilePic from "../../public/laurea_albi_xjtu.jpg";
import Button from '@mui/material/Button';
import "@/app/globals.css";
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
import { AuroraBackground } from "@/components/ui/aurora-background";

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
    <AuroraBackground className="dark">
      <div className="max-w-7xl mx-auto px-4 py-8 lg:px-8 w-full">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
          {/* Left Section - Hero Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-8">
              <NameHeader />
              <h2 className="text-xl lg:text-2xl text-white mb-4 font-light tracking-wide">
                Computer Science Engineer
              </h2>
              <p className="text-slate-300 text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                European Central Bank
              </p>
            </div>

            {/* Navigation */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              {[
                { id: "about", label: "About me", icon: selected === "about" ? <BookSolidIcon /> : <BookOutlineIcon /> },
                { id: "tools", label: "Tools", icon: selected === "tools" ? <ToolSolidIcon /> : <ToolOutlineIcon /> },
                { id: "contact", label: "Contact me", icon: selected === "contact" ? <PencilSolidIcon /> : <PencilOutlineIcon /> }
              ].map((item) => (
                <Button
                  key={item.id}
                  className={`px-6 py-3 rounded-lg font-medium text-base transition-all duration-300 flex items-center justify-center gap-3 ${
                    selected === item.id
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40'
                      : 'bg-slate-700/50 text-slate-300 hover:bg-slate-600/50 hover:text-white border border-slate-600/30'
                  }`}
                  onClick={() => setSelected(item.id)}
                  startIcon={item.icon}
                  color="inherit"
                >
                  {item.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Right Section - Profile Picture */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur-xl"></div>
              <Image
                className="relative w-64 h-80 lg:w-72 lg:h-96 object-cover rounded-xl shadow-2xl border border-slate-600/50"
                src={profilePic}
                alt="Alberto Barnabò - Computer Science Engineer"
                width={288}
                height={384}
              />
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/30 rounded-2xl p-8 shadow-2xl">
          <div className="transition-all duration-500 ease-in-out">
            {renderContent()}
          </div>
        </div>
      </div>
    </AuroraBackground>
  );
}

