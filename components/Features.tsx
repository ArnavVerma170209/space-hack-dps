import React from "react";

import { Anton } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Anton({ subsets: ["latin"], weight: "400" });

const Features = () => {
  return (
    <div className="h-screen flex flex-col justify- ">
      <h1
        className={cn(
          font.className,
          "text-[#E0FF30] uppercase text-5xl  mb-6 px-8 bg-[#060606]"
        )}
      >
        Approach to the problem
      </h1>
      <div className="h-auto w-screen px-8 flex justify-center  lg:flex-row flex-col gap-2 ">
        <div className="rounded-xl lg:w-1/3 bg-[#E0FF30] text-4xl p-2 lg:h-auto h-[calc(90%/1.5)]">
          <h1 className={cn(font.className, "uppercase ")}>
            1. The mission starts by calculating the time available, determining
            the best trajectory, and assessing the situation's severity. This
            helps prioritize actions to ensure a timely rescue.
          </h1>
        </div>
        <div className="rounded-xl lg:w-1/3 bg-[#E0FF30] text-4xl p-2 lg:h-auto h-[calc(90%/1.5)]">
          <h1 className={cn(font.className, "uppercase")}>
            2. an unmanned shuttle is sent with life support supplies like food,
            water, and oxygen, stabilizing the situation and buying time for the
            final rescue.
          </h1>
        </div>
        <div className="rounded-xl lg:w-1/3 bg-[#E0FF30] text-4xl p-2 lg:h-auto h-[calc(90%/1.5)]">
          <h1 className={cn(font.className, "uppercase")}>
            3. a manned shuttle is launched to safely bring the astronaut back
            to Earth, with careful planning to ensure a smooth transfer and safe
            return.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Features;
