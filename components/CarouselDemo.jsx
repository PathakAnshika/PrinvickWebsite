"use client";
import React from "react";
import { Carousel } from "./Carousel1";

export function CarouselDemo() {
  const slideData1 = [
    "/Tees/1st.jpg",
    "/Tees/18th.jpeg",
    "/Tees/6th.jpeg",
    "/Tees/7th.jpeg",
  ];

  const slideData2 = [
    "/Tees/5th.jpeg",
    "/Tees/15th.jpeg",
    "/Tees/16th.jpeg",
    "/Tees/10th.jpeg",
  ];

  const slideData3 = [
    "/Tees/17th.jpeg",
    "/Tees/13th.jpeg",
    "/Tees/14th.jpeg",
    "/Tees/12th.jpeg",
  ];

  return (
    <div className="w-full py-10 bg-gray-50 bg-[url('https://www.toptal.com
bg-[url('https://www.toptal.com/designers/subtlepatterns/patterns/diagmonds.png')] bg-repeat">
  <div className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0 justify-center items-center">
    <div className="w-full md:w-1/3">
      <Carousel slides={slideData1} />
    </div>
    <div className="w-full md:w-1/3">
      <Carousel slides={slideData2} />
    </div>
    <div className="w-full md:w-1/3">
      <Carousel slides={slideData3} />
    </div>
  </div>
</div>
  );
}
