"use client";
import React from "react";

export function LastSection() {
  return (
    <section
      className="w-full py-20 flex flex-col items-center justify-center text-center"
      style={{ backgroundColor: "#c0d68a" }} // Light Olive Green
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
        Stay Connected with Us
      </h2>
      <p className="text-gray-700 max-w-xl mb-6">
        Subscribe to our newsletter and follow us on social media to get the
        latest updates and offers.
      </p>
      <div className="flex gap-4">
        <a
          href="tel:+9113789574"
          className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
        >
          📞 Call Us
        </a>
        <a
          href="#"
          className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
        >
          ✉️ Subscribe
        </a>
      </div>
    </section>
  );
}
