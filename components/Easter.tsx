import { cn } from "@/lib/utils";
import { Anton, DM_Sans } from "next/font/google";
import Image from "next/image";
import React from "react";
import { StarsBackground } from "./aceternity/stars-background";
import { ShootingStars } from "./aceternity/shooting-stars";

const font = DM_Sans({ subsets: ["latin"], weight: ["900"] });
const Titlefont = Anton({ subsets: ["latin"], weight: ["400"] });
const light_font = DM_Sans({ subsets: ["latin"], weight: ["500"] });

const Easter = () => {
  var interval = setInterval(function () {
    var div = document.getElementById("arni")!;
    div.style.top = div.offsetTop + 1 + "px";
    div.style.left = div.offsetLeft + 1 + "px";
  }, 1000);
  return (
    <>
      <div className="h-screen w-screen ">
        <h1
          className={cn(
            Titlefont.className,
            "lg:w-1/2 uppercase w-full px-8 text-5xl text-[#E0FF30]"
          )}
        >
          Literally Arni Verma
        </h1>
        <div id="arni" className="arni h-[200px] w-[200px]" />
        <StarsBackground />
        <ShootingStars />
      </div>
    </>
  );
};

export default Easter;
