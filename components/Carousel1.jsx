"use client";
import React, { useState, useEffect } from "react";

export function Carousel({ slides }) {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-scroll fast, pause on hover
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setCurrent((prev) => (prev + 1) % slides.length);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [slides.length, isHovered]);

  const goToSlide = (index) => setCurrent(index);

  return (
    <div
      className={`relative w-[400px] h-[460px] overflow-hidden border border-gray-300 rounded-3xl shadow-sm bg-transparent
        ${isHovered ? "animate-pulse border-blue-500" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full h-[460px] flex items-center justify-center bg-transparent"
          >
            <img
              src={slide}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
        ))}
      </div>

      {/* Manual Dots */}
      <div className="absolute bottom-3 left-0 right-0 flex justify-center space-x-1">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-1 rounded-full transition-colors duration-300 ${
              index === current ? "bg-blue-700" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
