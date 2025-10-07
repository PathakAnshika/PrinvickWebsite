"use client";
import React, { useEffect, useRef } from "react";
import { Dancing_Script } from "next/font/google";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const cursiveFont = Dancing_Script({ subsets: ["latin"], weight: ["700"] });

export function BackgroundRippleEffectDemo() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);

  useEffect(() => {
    const heading = headingRef.current;
    const subheading = subheadingRef.current;

    // Fade in/out effect for heading
    gsap.fromTo(
      heading,
      { opacity: 0 },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 40%",
          scrub: true,
        },
      }
    );

    // Fade in/out effect for subheading
    gsap.fromTo(
      subheading,
      { opacity: 0 },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 40%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col justify-center items-center py-32 overflow-hidden px-6 md:px-12"
      style={{
        clipPath: "polygon(0 0, 100% 10%, 100% 90%, 0% 100%)",
        background: "linear-gradient(to right, #a8e6cf, #20c997, #ffd8b1)", // Mint → Teal → Soft Peach
      }}
    >
      {/* Rocks / Blobs */}
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-300 opacity-30 rounded-[30%_70%_40%_60%] transform -translate-x-1/2 -translate-y-1/2 blur-2xl animate-rocking"></div>

      {/* Content */}
      <div className="relative w-full max-w-3xl text-center z-10">
        <h2
          ref={headingRef}
          className={`${cursiveFont.className} text-3xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight`}
        >
          Your Creativity, Our Canvas
        </h2>

        <div className="mt-6">
          <span
            ref={subheadingRef}
            className={`${cursiveFont.className} text-2xl md:text-4xl font-bold text-gray-900 dark:text-white`}
          >
            Transform Ideas into Unique Tees
          </span>
        </div>

        <p className={`${cursiveFont.className} text-center text-gray-600 dark:text-gray-700 mt-6 text-lg md:text-xl`}>
          At Prinvick, we bring your imagination to life. Design custom T-shirts, slogans, or artwork that reflect your personality. Vibrant prints, premium quality, and endless style await!
        </p>
      </div>

      <style jsx>{`
        @keyframes rocking {
          0% { transform: translate(-50%, -50%) rotate(-8deg); }
          50% { transform: translate(-50%, -50%) rotate(8deg); }
          100% { transform: translate(-50%, -50%) rotate(-8deg); }
        }
        .animate-rocking {
          animation: rocking 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
