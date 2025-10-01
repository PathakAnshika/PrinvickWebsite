"use client";
import React from "react";
import { Dancing_Script } from "next/font/google";

// Cursive font
const cursiveFont = Dancing_Script({ subsets: ["latin"], weight: ["400", "700"] });

export function AboutSection() {
  return (
    <section className="flex justify-center py-20 bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-7xl px-6 md:px-12 text-center">
        <h2 className={`${cursiveFont.className} text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight`}>
          Turn Your Ideas Into Wearable Art
        </h2>

        <div className="relative flex justify-center items-center w-full mt-6">
          <span
            className={`${cursiveFont.className} text-2xl md:text-4xl lg:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-sky-500 to-sky-600 drop-shadow-md`}
          >
            Custom T-Shirts, Wear Your Idea
          </span>
        </div>

        <p className="text-center text-gray-600 dark:text-gray-300 mt-6 text-lg md:text-xl max-w-3xl mx-auto">
          Create unique T-shirts with your designs, slogans, or artwork. High-quality prints that last, colors that pop, and styles that fit everyone. Express yourself in style and make your ideas wearable!
        </p>
      </div>
    </section>
  );
}
