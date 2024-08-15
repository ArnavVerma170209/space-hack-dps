import type { Metadata } from "next";
import { DM_Sans, Inter } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/use-smooth-scroll";
import Footer from "@/components/Footer";
import Navbar  from "@/components/Navbar";
import {
  ClerkProvider,
} from "@clerk/nextjs";

const dm_sans= DM_Sans({ subsets: ["latin"], weight : ['300'] });

export const metadata: Metadata = {
  title: "Celestia",
  description: "next generation solution to space rescues",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="icon" href="/logo.svg" sizes="any" />
        </head>
        <body className={dm_sans.className}>
          <SmoothScrolling>
            {/* <Navbar /> */}
            {children}
            {/* <Footer /> */}
          </SmoothScrolling>
        </body>
      </html>
    </ClerkProvider>
  );
}
