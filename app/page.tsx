"use client";

import { useState,useEffect } from "react";
import { Loader } from "../components/Loader";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { VideoSection } from "../components/VideoSection";
import { AppleCards } from "../components/AppleCards";
import { BackgroundRippleEffectDemo } from "../components/BackgroundRippleEffectDemo";
import { CarouselDemo } from "../components/CarouselDemo";
import { CustomizationSection } from "../components/CustomizationSection";
import { LimitedEditionBanner } from "../components/LimitedEditionBanner";
import { ContactSection } from "../components/ContactSection";
import {LastSection} from"../components/LastSection"
export default function Home() {
  const [loading, setLoading] = useState(true);
  const [fadeIn, setFadeIn] = useState(false);

useEffect(() => {
  setFadeIn(true); // page load होते ही fade-in शुरू होगा
}, []);
  // useEffect(() => {
  //   const timer = setTimeout(() => setLoading(false), 3000);
  //   return () => clearTimeout(timer);
  // }, []);

  // if (loading) {
  //   return <Loader image="/Tees/5th.jpeg" onFinish={() => console.log("Finished")} />;
  // }

  return (
    <main className={`transition-opacity duration-1000 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
     <div className={`transition-opacity duration-700 ${fadeIn ? 'opacity-100 delay-100' : 'opacity-0'}`}>
  <HeroSection />
</div>
     <div className={`transition-opacity duration-700 ${fadeIn ? 'opacity-100 delay-100' : 'opacity-0'}`}>
  <AboutSection />
</div>
     <div className={`transition-opacity duration-700 ${fadeIn ? 'opacity-100 delay-100' : 'opacity-0'}`}>
  <VideoSection />
</div>
     <div className={`transition-opacity duration-700 ${fadeIn ? 'opacity-100 delay-100' : 'opacity-0'}`}>
  <AppleCards />
</div>
     <div className={`transition-opacity duration-700 ${fadeIn ? 'opacity-100 delay-100' : 'opacity-0'}`}>
  <BackgroundRippleEffectDemo/>
</div>
    <div className={`transition-opacity duration-700 ${fadeIn ? 'opacity-100 delay-100' : 'opacity-0'}`}>
  <CarouselDemo />
</div>
    <div className={`transition-opacity duration-700 ${fadeIn ? 'opacity-100 delay-100' : 'opacity-0'}`}>
  <CustomizationSection />
</div>
     <div className={`transition-opacity duration-700 ${fadeIn ? 'opacity-100 delay-100' : 'opacity-0'}`}>
  <LimitedEditionBanner />
</div>
     <div className={`transition-opacity duration-700 ${fadeIn ? 'opacity-100 delay-100' : 'opacity-0'}`}>
  <ContactSection />
</div>
     <div className={`transition-opacity duration-700 ${fadeIn ? 'opacity-100 delay-100' : 'opacity-0'}`}>
  <LastSection />
</div>
    </main>
  );
}