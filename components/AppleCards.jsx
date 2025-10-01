"use client";
import React from "react";
import { Dancing_Script } from "next/font/google";

const cursiveFont = Dancing_Script({ subsets: ["latin"], weight: ["400", "700"] });

export function AppleCards() {
  return (
    <section className="w-full py-20 bg-gray-50 dark:bg-neutral-900">
     <h2 className={`${cursiveFont.className} text-3xl md:text-5xl font-bold text-center text-gray-800 dark:text-white mb-12`}>

        Explore Our Tees Collection
      </h2>

      <div className="flex flex-col items-center gap-6">
        {tees.map((tee, index) => (
          <img
            key={index}
            src={tee.src}
            alt={tee.title}
            className={`w-7/12 md:w-1/2 lg:w-2/5 object-cover rounded-2xl shadow-lg transform transition duration-500 ${
              index % 2 === 0 ? "rotate-1" : "-rotate-1"
            } hover:scale-105`}
          />
        ))}
      </div>
    </section>
  );
}

// ✅ Local T-shirt images from /public/Tees/
const tees = [
  { src: "/Tees/ppppp.jpeg" },
  { src: "/Tees/13th.jpeg" },
  { src: "/Tees/22th.jpeg" },
  { src: "/Tees/25th.jpeg" },
  { src: "/Tees/27th.jpeg" },
  { src: "/Tees/rrrr.jpeg" },
];
