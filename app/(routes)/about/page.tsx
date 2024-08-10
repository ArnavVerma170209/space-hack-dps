import About from "@/components/About";
import Navbar from "@/components/Navbar";
import Team from "@/components/Team";
import Image from "next/image";

import React from "react";

const AboutPage = () => {
  return (
    <>
      <div className="mt-20">
        <About />
        <Team /> 
      </div>
    </>
  );
   
};

export default AboutPage;
