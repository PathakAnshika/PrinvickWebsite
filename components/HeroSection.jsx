"use client";

import React from "react";
import { Dancing_Script, Great_Vibes, Poppins } from "next/font/google";
import { Facebook, Instagram } from "lucide-react";

// Import Google Fonts
const dancing = Dancing_Script({ subsets: ["latin"], weight: ["400", "700"] });
const vibes = Great_Vibes({ subsets: ["latin"], weight: ["400"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "600"] });
const cursiveFont = Dancing_Script({ subsets: ["latin"], weight: ["400", "700"] });

export function HeroSection() {
  const scrollToNext = () => {
    const nextSection = document.getElementById("next-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className={`${poppins.className} relative w-full`}>
      {/* 🔹 Top Bar (Transparent + Blur) */}
    <div className="fixed top-0 left-0 w-full flex justify-between items-center bg-white/20 backdrop-blur-sm text-xs sm:text-sm px-4 sm:px-8 py-1.5 z-50">
  {/* Left: Contact */}
  <div className="flex items-center gap-2 sm:gap-4">
    <a href="tel:+9113789574" className="text-sm text-gray-700 font-medium hover:text-blue-600 transition"> 📞 +9113789574 </a>
  </div>
  <div className="flex flex-col items-center">
  <h1 className={`${cursiveFont.className} text-xl md:text-2xl font-bold text-gray-900`}>
    PrinVick
  </h1>
</div>

  {/* Right: Social Media Icons */}
  <div className="flex items-center gap-3 sm:gap-6">
    <a
      href="https://www.facebook.com/profile.php?id=61578627256549&mibextid=ZbWKwL"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-900 hover:text-pink-600 transition"
    >
      <Facebook size={18} />
    </a>

    <a
      href="https://www.instagram.com/prinvick_official?igsh=MTk2bGRzY2FkenJpbw=="
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-900 hover:text-pink-600 transition"
    >
      <Instagram size={18} />
    </a>
  </div>
</div>


      {/* 🔹 Hero Video Section */}
      <div className="relative flex flex-col justify-center items-center w-full h-[90vh] sm:h-[95vh] overflow-hidden mt-[35px]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-[-40px] left-0 w-full h-[110%] object-cover brightness-[0.7] -z-10"
        >
          <source src="/Tees/hero.mp4" type="video/mp4" />
        </video>

        {/* Content */}
        <div className="text-center text-white px-4">
          <h1 className={`${vibes.className} text-5xl sm:text-6xl md:text-7xl font-bold text-[#d4af37] mb-2`}>
            Discover Prinvick
          </h1>
          <h2 className={`${dancing.className} text-lg sm:text-2xl md:text-3xl text-gray-200 mb-6`}>
            — Where Creativity Meets Innovation —
          </h2>
          <button
            onClick={scrollToNext}
            className="bg-[#d4af37] hover:bg-[#b9942b] text-[#0d1117] font-semibold text-base sm:text-lg px-8 py-3 rounded-full transition-transform transform hover:scale-105"
          >
            Explore
          </button>
        </div>
      </div>

      {/* 🔹 Next Section (Scroll Target) */}
      <div
  id="next-section"
  className="w-full h-[70vh] bg-white flex flex-col justify-center items-center text-center px-6 py-12"
>
        <h3 className={`${cursiveFont.className} text-3xl sm:text-4xl font-semibold text-[#d4af37] mb-4`}>
  Welcome to Prinvick
</h3>

        <p className="text-gray-700 max-w-2xl text-base sm:text-lg leading-relaxed">
          Step into the world of innovation, creativity, and excellence —
          where every idea turns into a masterpiece. Scroll further to explore
          more about us.
        </p>
      </div>
    </section>
  );
}
