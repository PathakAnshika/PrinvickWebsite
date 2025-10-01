"use client";
import React from "react";

export function LimitedEditionBanner() {
  return (
    <section className="relative w-full h-[50vh] sm:h-[55vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Blur */}
     <img
  src="/Tees/download (4).jpeg"
  alt="Limited Edition"
  className="relative w-full h-[100vh] sm:h-[50vh] md:h-[70vh]"

/>


      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Text Container */}
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8">
    <h2 className="text-white text-3xl sm:text-4xl md:text-6xl font-bold drop-shadow-lg">
      Limited Edition
    </h2>
    <p className="text-white text-base sm:text-lg md:text-2xl mt-2 drop-shadow-md">
      Grab Yours Before It's Gone!
    </p>
    <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mt-4 drop-shadow-lg">
      Shop now
    </h1>
  </div>
    </section>
  );
}