import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const Mainlayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col">
      {" "}
      <Navbar /> {children} <Footer />{" "}
    </div>
  );
};

export default Mainlayout;
