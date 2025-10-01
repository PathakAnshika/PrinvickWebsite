"use client";
import React, { useState } from "react";

export function Carousel({ items }) {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto mt-8">
      {/* Current card */}
      <div className="transition-all duration-500">{items[current]}</div>

      {/* Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-full"
      >
        ◀
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-full"
      >
        ▶
      </button>
    </div>
  );
}
