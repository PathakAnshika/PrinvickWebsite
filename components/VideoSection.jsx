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
      className="relative w-full h-[120vh] flex items-center justify-center overflow-hidden"
      style={{
        background: "#fff8f0", // Cream White Background
        clipPath: "polygon(0 0, 100% 5%, 100% 95%, 0% 100%)", // Slanted section
      }}
    >
      {/* Video Container with Parallax */}
      <div
        className="relative w-[80%] sm:w-[85%] md:w-[75%] max-w-5xl h-[120%] overflow-hidden rounded-xl shadow-lg"
        style={{
          transform: `translateY(${offsetY * 0.15}px)`, // Parallax scroll effect
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
      <div className="absolute top-16 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-xl backdrop-blur-sm z-20">
        <h2
          className={`${cursiveFont.className} text-gray-800 text-2xl md:text-3xl font-extrabold drop-shadow-md text-center`}
        >
          Custom Prints, Endless Style
        </h2>
      </div>

      {/* Bottom Text */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 z-20 text-center">
        {/* <h2
          className={`${cursiveFont.className} text-[#3EB489] text-4xl md:text-5xl font-extrabold drop-shadow-lg`}
        >
          Wear Your Imagination
        </h2> */}
      </div>
    </section>
  );
}
