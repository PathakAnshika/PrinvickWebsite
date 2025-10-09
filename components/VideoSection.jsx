"use client";
import React, { useState, useEffect } from "react";
import { Dancing_Script } from "next/font/google";

const cursiveFont = Dancing_Script({ subsets: ["latin"], weight: ["700"] });

export function VideoSection() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="relative w-full h-[120vh] sm:h-[140vh] flex items-center justify-center overflow-hidden"
      style={{
        background: "#fff8f0",
        clipPath: "polygon(0 0, 100% 5%, 100% 95%, 0% 100%)",
      }}
    >
      {/* Video Container */}
      <div
        className="relative w-[90%] sm:w-[85%] md:w-[75%] max-w-5xl h-[100%] sm:h-[120%] overflow-hidden rounded-xl shadow-lg"
        style={{
          transform: `translateY(${offsetY * 0.15}px)`,
          transition: "transform 0.1s ease-out",
        }}
      >
        <video
          src="/Tees/3Section.mp4"
          autoPlay
          muted
          loop
          className="w-full h-full object-cover rounded-xl"
        />
      </div>

      {/* Top Text */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 z-20 text-center 
                   px-4 py-2 rounded-xl backdrop-blur-sm"
        style={{
          top: "3%", // heading thodi aur upar
        }}
      >
        <h2
          className={`${cursiveFont.className} text-gray-800 text-[1.3rem] sm:text-2xl md:text-3xl font-extrabold drop-shadow-md`}
        >
          Custom Prints, Endless Style
        </h2>
      </div>
    </section>
  );
}
