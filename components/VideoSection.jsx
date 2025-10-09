"use client";
import React from "react";
import { Dancing_Script } from "next/font/google";

const cursiveFont = Dancing_Script({ subsets: ["latin"], weight: ["700"] });

export function VideoSection() {
  return (
    <section
      className="relative w-full flex flex-col items-center justify-start overflow-hidden pt-8 sm:pt-12 md:pt-16"
      style={{
        background: "#fff8f0",
        minHeight: "100vh",
      }}
    >
      {/* Top Text ABOVE Video */}
      <div className="w-full flex justify-center mb-6 sm:mb-8 md:mb-10 z-20">
        <h2
          className={`${cursiveFont.className} text-[#d4af37] text-3xl sm:text-4xl md:text-5xl font-extrabold drop-shadow-md text-center`}
        >
          Custom Prints, Endless Style
        </h2>
      </div>

      {/* Video Container */}
      <div className="relative w-[90%] sm:w-[85%] md:w-[75%] max-w-5xl h-[70vh] sm:h-[80vh] md:h-[90vh] overflow-hidden rounded-xl shadow-lg">
        <video
          src="/Tees/3Section.mp4"
          autoPlay
          muted
          loop
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
    </section>
  );
}
