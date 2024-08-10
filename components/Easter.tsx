"use client";
import { cn } from "@/lib/utils";
import { Anton } from "next/font/google";
import React, { useEffect, useState } from "react";
import { StarsBackground } from "./aceternity/stars-background";
import { ShootingStars } from "./aceternity/shooting-stars";

const Titlefont = Anton({ subsets: ["latin"], weight: ["400"] });

const Easter = () => {
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    const moveDiv = () => {
      const maxWidth = (window.innerWidth) - (window.innerHeight/5) - 300;
      const maxHeight = (window.innerHeight)  - (window.innerWidth/5) - 300;

      const newLeft = Math.floor(Math.random() * maxWidth);
      const newTop = Math.floor(Math.random() * maxHeight);

// Position update krra
      setPosition({ top: newTop, left: newLeft });
    };

    const interval = setInterval(moveDiv, 900);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="h-[80vh] hidden lg:block w-screen overflow-hidden ">
        <h1
          className={cn(
            Titlefont.className,
            "lg:w-1/2 uppercase w-full px-8 text-5xl text-[#E0FF30]"
          )}
        >
          Literally Arni Verme
        </h1>
        <div
          style={{
            position: "relative",
            top: `${position.top}px`,
            left: `${position.left}px`,
            transition: "top 1.5s , left 1.5s",
          }}
          className="arni rounded-full lg:h-[300px] h-[150px]  w-[150px]  lg:w-[300px] animate-spin "
        />
        <StarsBackground />
        <ShootingStars />
      </div>
    </>
  );
};

export default Easter;
