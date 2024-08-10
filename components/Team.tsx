import { cn } from "@/lib/utils";
import { Anton, DM_Sans } from "next/font/google";
import React from "react";
import sv from "@/public/sv.webp";
import { ShootingStars } from "./aceternity/shooting-stars";
import { StarsBackground } from "./aceternity/stars-background";
const font = DM_Sans({ subsets: ["latin"], weight: ["900"] });
const Titlefont = Anton({ subsets: ["latin"], weight: ["400"] });
const light_font = DM_Sans({ subsets: ["latin"], weight: ["500"] });

const Team = () => {
  return (
    <>
    <div className="h-full mt-28 lg:mt-0 py-12 flex justify-between flex-col w-screen bg-[#060606] -z-1">
      <h1
        className={cn(
          Titlefont.className,
          "lg:w-1/2 w-full px-8 mb-8 text-5xl text-[#E0FF30]"
        )}
      >
        THE TWO SIGMAS BEHIND THIS
      </h1>
      <div className="h-full gap-2 flex items-end flex-col lg:flex-row w-screen px-8">
        <div
          className={cn(
            "lg:w-1/2 w-full h-[60vh] lg:h-[80vh] flex flex-col justify-end p-4 rounded-xl svDiv"
          )}
        >
          <h1
            className={cn(Titlefont.className, "text-white uppercase text-3xl")}
          >
            Swastik Verma
          </h1>
          <p className={cn(light_font.className, "text-white ")}>
            I have been a nasty girl
          </p>
        </div>
        <div className="w-full lg:w-1/2  h-[60vh]  flex flex-col justify-end p-4 lg:h-[80vh] avDiv rounded-xl">
          <h1
            className={cn(Titlefont.className, "text-white uppercase text-3xl")}
          >
            Arnav Verma
          </h1>
          <p className={cn(light_font.className, "text-white ")}>
            <span className="line-through">dog</span> god complex
          </p>
        </div>
      </div>
    </div>
      <StarsBackground />
      <ShootingStars/>
</>
);
};

export default Team;
