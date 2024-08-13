import { SignIn } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      <SignIn />;
    </>
  );
};

export default page;
