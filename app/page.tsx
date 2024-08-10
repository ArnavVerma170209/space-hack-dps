import { ShootingStars } from "@/components/aceternity/shooting-stars";
import { StarsBackground } from "@/components/aceternity/stars-background";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Anton, DM_Sans } from "next/font/google";
import { ArrowDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Features  from "@/components/Features";
import Team from "@/components/Team";
import Easter from "@/components/Easter";
const anton = Anton({ subsets: ["latin"], weight: "400" });
const dm_sans = DM_Sans({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return (
    <>
      <div className="h-screen bg-[#060606] flex flex-col items-center justify-between relative w-screen">
        <Navbar />
        <div className="flex justify-center items-center flex-col h-full">
          <p
            className={cn(
              anton.className,
              "xl:text-[250px]  leading-3  lg:text-[200px] text-[100px] text-[#E0FF30]"
            )}
          >
            CELESTIA{" "}
          </p>
          <span
            className={cn(
              dm_sans.className,
              "text-[#E0FF30] capitalize text-lg lg:-translate-y-14 -translate-y-6"
            )}
          >
            The next generation of space rescues
          </span>

          <Button className="gap-1 rounded-full hover:bg-[#E0FF60] z-[100] transition duration-400 bg-[#E0FF30] text-[#060606] flex">
            Get started <ArrowDown className="size-4" />
          </Button>
        </div>

        <ShootingStars />
        <StarsBackground />
      </div>
      <About />
      <Features />
      <Team />
      <Easter /> 
    </>
  );
}
