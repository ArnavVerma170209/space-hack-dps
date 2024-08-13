"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { DM_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { SignedIn, SignedOut } from "@clerk/clerk-react";
import { SignInButton, SignOutButton } from "@clerk/nextjs";

const font = DM_Sans({ subsets: ["latin"], weight: ["500"] });
const links = [
  {
    href: "/",
    name: "Home",
  },
  {
    href: "/about",
    name: "About us",
  },
  {
    href: "/solutions",
    name: "Solutions",
  },
  // {
  //   href: "/contact",
  //   name: "Contact",
  // },
];
const Navbar = () => {
  const path = usePathname();
  return (
    <div className="z-[100000] h-20 bg-white/3 backdrop-blur-lg  w-screen px-8 py-2 flex  items-center justify-center lg:justify-between fixed ">
      <div className="h-full items-center flex">
        <Image src={"./logo.svg"} alt="logo" height={48} width={48} />
      </div>
      <div className="lg:flex hidden p-2 rounded-full gap-2 text-[#E0FF30]">
        {links.map((link, i) => (
          <Link href={link.href} key={i}>
            {" "}
            <Button
              className={cn(
                font.className,
                "gap-2 px-4 rounded-full hover:bg-[#f0f0f0] transition duration-500 hover:text-[#060606] z-[100] bg-[#E0FF30] text-[#060606]  flex",
                link.href === path && "bg-[#E0FF40] text-[#060606]"
              )}
            >
              {link.name}
            </Button>
          </Link>
        ))}
        <SignedOut>
          <SignInButton>
            <Link href={"/login"}>
              {" "}
              <Button
                className={cn(
                  font.className,
                  "gap-2 px-4 rounded-full  transition duration-500 border-[1.6px] z-[100] border-[#E0FF30] text-[#E0FF30]  flex bg-transparent hover:bg-[#E0FF30] hover:text-[#060606]"
                )}
              >
                Register
              </Button>
            </Link>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <Link href={"/dashboard"}>
            {" "}
            <Button
              className={cn(
                font.className,
                "gap-2 px-4 rounded-full  transition duration-500 border-[1.6px] z-[100] border-[#E0FF30] text-[#E0FF30]  flex bg-transparent hover:bg-[#E0FF30] hover:text-[#060606]"
              )}
            >
              Dashboard
            </Button>
          </Link>
        </SignedIn>
      </div>
    </div>
  );
};

export default Navbar;
