import About from "@/components/About";
import Navbar from "@/components/Navbar";
import Image from "next/image";

import React from "react";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="mt-20">
        <About />
      </div>
    </>
  );
   
};

export default AboutPage;
