"use client";
import { cn } from "@/lib/utils";
import { ClerkLoaded, useUser } from "@clerk/nextjs";
import { DM_Sans } from "next/font/google";
import React from "react";

const font = DM_Sans({ subsets: ["latin"], weight: ["800"] });
const Welcome = () => {
  const { user } = useUser();
  return (
    <div className={cn(font.className, "text-black flex flex-col px-8   ")}>
      <span className=" text-black text-4xl">
        Hi {user?.firstName}
        <ClerkLoaded>👋🏿</ClerkLoaded>
      </span>
      <span className="text-sm text-black/60">
        How can we help you save your loved ones from arni verme in space
      </span>
    </div>
  );
};

export default Welcome;
