import Navbar from "@/components/dashboard/Navbar";
import { RedirectToSignIn, UserButton, useUser } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import React from "react";

const page = async () => {
  const user = await currentUser();

  if (!user?.id) {
    return RedirectToSignIn({ redirectUrl: "/login" });
  }

  return (
    <div className="text-white">
      <div className="h-[80vh] bg-gradient-to-b from-[#e0ff30] to-[#e0ff50]">
        <Navbar />{" "}
      </div>
    </div>
  );
};

export default page;
