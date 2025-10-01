
"use client";

import { useState, useEffect } from "react";

export function Loader({ image }) {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // progress bar fast increase
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 500); // fade out after complete
          return 100;
        }
        return prev + 2; // speed (increase step)
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-[9999] transition-opacity duration-700">
      {/* Big Photo in Center */}
      <img
        src={image || "/Tees/5th.jpeg"}
        alt="Loader"
        className="w-auto max-w-[70vw] max-h-[60vh] object-contain"
      />

      {/* Loading Text with Percentage + Bar */}
      <div className="mt-6 flex flex-col items-center">
        <span className="text-gray-700 font-semibold animate-pulse text-lg">
          Loading... {progress}%
        </span>
        <div className="w-72 h-2 bg-gray-200 rounded-full mt-2 overflow-hidden">
          <div
            className="h-full bg-black transition-all duration-100"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
