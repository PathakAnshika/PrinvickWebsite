"use client";

import React from "react";
import { Facebook, Instagram } from "lucide-react";
import { Dancing_Script } from "next/font/google";

const cursiveFont = Dancing_Script({ subsets: ["latin"], weight: ["400", "700"] });

export function HeroSection() {
  return (
    <section className="w-full">
      {/* 🔹 Topbar Section */}
      <div className="w-full bg-white py-0 px-2 flex justify-between items-center">
        {/* Left: Contact */}
        {/* <div className="text-sm text-gray-700 font-medium">
          📞 +91 12345 67890
        </div> */}

        {/* Top bar: company info */}
      <div className="absolute top-0 left-0 w-full flex justify-between items-center px-6 py-2 bg-white/80 z-20">
       <a href="tel:+9113789574" className="text-sm text-gray-700 font-medium hover:text-blue-600 transition">
  📞 +9113789574
</a>

        <div className="flex flex-col items-center">
          <h1 className={`${cursiveFont.className} text-xl md:text-2xl font-bold text-gray-900`}>
            PrinVick
          </h1>
        </div>

        <div className="flex gap-3 text-gray-700 text-sm md:text-base">
  <a href="https://www.facebook.com/profile.php?id=61578627256549&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
    <Facebook size={18} className="hover:text-pink-600 transition" />
  </a>

  <a href="https://www.instagram.com/prinvick_official?igsh=MTk2bGRzY2FkenJpbw==" target="_blank" rel="noopener noreferrer">
    <Instagram size={18} className="hover:text-pink-600 transition" />
  </a>

  {/* <a href="https://wa.me/9113789574" target="_blank" rel="noopener noreferrer">
    <MessageCircle size={18} className="hover:text-green-500 transition" />
  </a> */}
</div>
      </div>
      </div>

      {/* 🔹 Video Section */}
      <section className="w-full flex justify-center items-center bg-white py-10">
       <video
  autoPlay
  loop
  muted
  playsInline
  className="w-full h-[90vh] object-cover"
>
  <source src="/Tees/hero.mp4" type="video/mp4" />
</video>
      </section>
    </section>
  );
}
