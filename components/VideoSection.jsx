"use client";
import React from "react";
import { Dancing_Script } from "next/font/google";

const cursiveFont = Dancing_Script({ subsets: ["latin"], weight: ["700"] });

export function VideoSection() {
  return (
    <section
      className="relative w-full flex items-center justify-center overflow-hidden"
      style={{
        background: "#fff8f0",
        clipPath: "polygon(0 0, 100% 5%, 100% 95%, 0% 100%)",
        minHeight: "100vh",
      }}
    >
      {/* Video Container */}
      <div className="relative w-[90%] sm:w-[85%] md:w-[75%] max-w-5xl h-[80vh] sm:h-[90vh] md:h-[100vh] overflow-hidden rounded-xl shadow-lg">
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
        className="absolute left-1/2 transform -translate-x-1/2 z-20 text-center px-4 py-2 rounded-xl"
        style={{
          top: "5%", // Heading thoda upar
        }}
      >
        <h2
          className={`${cursiveFont.className} text-gray-800 text-xl sm:text-2xl md:text-3xl font-extrabold drop-shadow-md`}
          style={{
            whiteSpace: "nowrap", // Single line
          }}
        >
          Custom Prints, Endless Style
        </h2>
      </div>
    </section>
  );
}
