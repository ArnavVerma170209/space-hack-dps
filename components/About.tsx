import { cn } from "@/lib/utils";
import { Anton, DM_Sans } from "next/font/google";
import Image from "next/image";
import React from "react";
import { StarsBackground } from "./aceternity/stars-background";
import { ShootingStars } from "./aceternity/shooting-stars";

const font = DM_Sans({ subsets: ["latin"], weight: ["900"] });
const Titlefont = Anton({ subsets: ["latin"], weight: ["400"] });
const light_font = DM_Sans({ subsets: ["latin"], weight: ["500"] });

const About = () => {
  return (
    <>
    <div className="h-full py-12 w-screen bg-[#060606] -z-1">
      <h1 className={cn(Titlefont.className, "lg:w-1/2 w-full px-8 text-5xl text-[#E0FF30]")}>
        THE BEST SPACE RESCUE AGENCY IN THE ENTIRE UNIVERSE
      </h1>
      <div className="h-full flex items-end flex-col  px-8">
        <p
          className={cn(
            light_font.className,
            "text-lg lg:px-12 flex justify-end mt-4 lg:w-2/3 w-full text-justify  text-[#E0FF30]"
          )}
        >
          Celestia is a pioneering aerospace company dedicated to ensuring the
          safety of astronauts and fostering human exploration of space. Our
          core mission is to develop and deploy cutting-edge rescue and support
          systems for astronauts in distress. By combining advanced robotics,
          artificial intelligence, and life support technologies, we aim to
          create a robust network of space-faring rescue teams capable of
          responding to emergencies anywhere in orbit.
          <br />
          <br />
          Beyond rescue missions, Celestia envisions a future where astronauts
          become integral to space exploration and maintenance. Our company will
          develop platforms for astronauts to conduct essential tasks such as
          satellite repair, space station upkeep, and scientific research. By
          establishing a permanent presence in orbit, Celestia aims to create a
          safer and more sustainable space environment for future generations.
        </p>
      </div>
    </div>
    <StarsBackground /> 
    <ShootingStars /> 
</>
);
};

export default About;
