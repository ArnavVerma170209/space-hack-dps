import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/use-smooth-scroll";
import Footer from "@/components/Footer";
import Navbar  from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.svg" sizes="any" />
      </head>
      <body className={inter.className}>
        <SmoothScrolling>
          <Navbar /> 
          {children}
          <Footer />
        </SmoothScrolling>
      </body>
    </html>
  );
}
