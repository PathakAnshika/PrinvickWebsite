"use client";
import React from "react";

export function VideoSection() {
  return (
    <section className="w-full h-[110vh] flex items-center justify-center overflow-hidden">
      <video
        src="/Tees/3Section.mp4"
        autoPlay
        muted
        loop
        className="h-[80%] w-auto object-cover rounded-2xl shadow-lg animate-rocking"
      />
    </section>
  );
}
