"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { DM_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";

const font = DM_Sans({ subsets: ["latin"], weight: ["400"] });
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
          <Link href={link.href}>
            {" "}
            <Button
              className={cn(
                font.className,
                "gap-2 px-4 rounded-full hover:bg-[#f0f0f0] transition duration-500 hover:text-[#060606] z-[100] bg-[#E0FF30] text-[#060606]  flex",
                link.href === path && "bg-[#f0f0f0] text-[#060606]"
              )}
              key={i}
            >
              {link.name}
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
