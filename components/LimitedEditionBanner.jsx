"use client";
import React from "react";

export function LimitedEditionBanner() {
  return (
    <section
      className="relative w-full flex items-center justify-center overflow-hidden"
      style={{
        clipPath: "polygon(0 0, 100% 0%, 100% 80%, 50% 95%, 0% 80%)",
        height: "60vh",
      }}
    >
      {/* Background Image */}
      <img
        src="/Tees/download (4).jpeg"
        alt="Limited Edition"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Text Container */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-12 py-16 sm:py-20 md:py-28">
        <h2 className="text-white text-2xl sm:text-3xl md:text-5xl font-bold drop-shadow-lg">
          Limited Edition
        </h2>
        <p className="text-white text-sm sm:text-base md:text-2xl mt-2 drop-shadow-md">
          Grab Yours Before It's Gone!
        </p>
        <h1 className="text-white text-xl sm:text-2xl md:text-4xl font-bold mt-4 drop-shadow-lg">
          Shop Now
        </h1>
      </div>
    </section>
  );
}
