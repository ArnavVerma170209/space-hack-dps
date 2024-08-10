import { cn } from '@/lib/utils';
import { Anton, DM_Sans } from 'next/font/google';
import React from 'react'
import { StarsBackground } from './aceternity/stars-background';
import { ShootingStars } from './aceternity/shooting-stars';

const font = DM_Sans({ subsets: ["latin"], weight: ["900"] });
const Titlefont = Anton({ subsets: ["latin"], weight: ["400"] });
const light_font = DM_Sans({ subsets: ["latin"], weight: ["500"] });


const Problem = () => {
  return (
    <>
      <div className="h-full py-12 w-screen bg-[#060606] -z-1">
        <h1
          className={cn(
            Titlefont.className,
            "lg:w-1/2 w-full px-8 text-5xl text-[#E0FF30]"
          )}
        >
          THE PROBLEM STATEMENT
        </h1>
        <div className="h-full flex items-end flex-col  px-8">
          <p
            className={cn(
              light_font.className,
              "text-2xl lg:px-12 flex justify-end mt-4 lg:w-2/3 w-full text-justify  text-[#E0FF30]"
            )}
          >
            Arni Verme, the greatly-known CORE President is STUCK in the outer
            space in his space station, and to make it worse, he&apos;s out of the
            resources. In a lonely piece of Universe, he&apos;s stuck there, all
            alone, but who&apos;s gonna rescue him?
          </p>
        </div>
      </div>
      <StarsBackground />
      <ShootingStars />
    </>
  );
}

export default Problem