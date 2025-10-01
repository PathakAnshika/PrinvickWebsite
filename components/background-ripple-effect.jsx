"use client";
import React from "react";

export function BackgroundRippleEffectDemo() {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gray-50 dark:bg-neutral-900">
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl text-center px-4 py-20">
        <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
          Interactive Background Boxes Ripple Effect
        </h2>
        <p className="text-base md:text-lg text-neutral-600 dark:text-neutral-400">
          Hover over the boxes above and click. To be used on hero sections or
          call-to-action sections. I beg you don&apos;t use it everywhere.
        </p>
      </div>
    </div>
  );
}
