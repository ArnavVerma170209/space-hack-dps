"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { DM_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import { Menu, Plus } from "lucide-react";
import { usePathname } from "next/navigation";
import { SignedIn, SignedOut } from "@clerk/clerk-react";
import { SignInButton, SignOutButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const font = DM_Sans({ subsets: ["latin"], weight: ["500"] });

const Navbar = () => {
  const path = usePathname();
  return (
    <div className=" h-20 bg-white/3 backdrop-blur-lg  w-screen px-8 py-2 flex  items-center justify-between fixed ">
      <div className="h-full items-center flex">
        <Image src={"./logo-black.svg"} alt="logo" height={48} width={48} />
      </div>
      <div className="flex p-2 rounded-full gap-2 text-[#E0FF30]">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              className={cn(
                font.className,
                "bg-[#060606] text-white gap-1 flex"
              )}
            >
              Create
              <Plus className="size-3" />
            </Button>
          </SheetTrigger>
          <SheetContent className="bg-[#e0ff30] border-0">
            <SheetHeader>
              <SheetTitle>Schedule Rescue</SheetTitle>
              <SheetDescription className="text-black/90">
                Give us details about your rescue mission here
              </SheetDescription>
            </SheetHeader>
         
            <SheetFooter>
              <SheetClose asChild>
                <Button type="submit">Confirm</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Navbar;
