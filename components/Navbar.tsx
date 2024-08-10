import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { DM_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";

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
  {
    href: "/contact",
    name: "Contact",
  },
];
const Navbar = () => {
  return (
    <div className="z-[100000] h-20 bg-white/3 backdrop-blur-sm absolute w-screen px-8 py-2 flex  items-center justify-between">
      <div className="h-full items-center flex">
        <Image src={"./logo.svg"} alt="logo" height={48} width={48} />
      </div>
      <div className="hidden lg:flex p-2 rounded-full gap-2 text-[#E0FF30]">
        {links.map((link, i) => (
          <Button
            className={cn(
              font.className,
              "gap-2 px-4 rounded-full hover:bg-[#E0FF50] z-[100] transition duration-400 bg-[#E0FF30] text-[#060606]  flex"
            )}
            key={i}
          >
            <Link href={link.href}> {link.name} </Link>
          </Button>
        ))}
      </div>
      <div className="flex lg:hidden">
        <Menu className="text-[#E0FF30]" /> 
      </div>
    </div>
  );
};

export default Navbar;
