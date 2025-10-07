"use client";
import React from "react";

export function LastSection() {
  return (
    <section
      className="w-full py-4 flex flex-col items-center justify-center text-center px-4 md:px-12"
      style={{ backgroundColor: "#fff8f0" }} // Cream White
    >
      {/* Heading */}
      <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-1">
        Stay Connected with Us
      </h2>

      {/* Subtext */}
      <p className="text-gray-700 text-xs md:text-sm mb-2">
        Follow us on social media & get latest updates from Prinvick.
      </p>

      {/* Buttons */}
      <div className="flex flex-col md:flex-row gap-2 mb-2">
        <a
          href="tel:+9113789574"
          className="bg-black text-white px-3 py-1.5 rounded-md font-semibold hover:bg-gray-800 transition text-xs"
        >
          📞 Call Us
        </a>
        <a
          href="#"
          className="bg-white text-black px-3 py-1.5 rounded-md font-semibold hover:bg-gray-200 transition text-xs"
        >
          ✉️ Subscribe
        </a>
      </div>

      {/* Contact Details - One line */}
      <p className="text-gray-800 text-[10px] md:text-xs max-w-4xl">
        📍 Bypass Rd, Near Revolt Motors, Hanuman Nagar, Buxar, Jaso, Bihar-802101 | 📧 prinvick911@gmail.com | ⏰ Mon - Sat: 10:00 AM – 7:00 PM | 📞 +91 13789574
      </p>

      {/* Divider */}
      <div className="w-2/3 border-t border-gray-300 mt-2"></div>

      {/* Footer Bottom */}
      <p className="text-gray-700 mt-1 text-[10px]">
        © {new Date().getFullYear()} <span className="font-semibold">Prinvick</span>. All Rights Reserved.
      </p>
    </section>
  );
}
