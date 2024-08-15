import Dash from "@/components/dashboard/Dash";
import Navbar from "@/components/dashboard/Navbar";
import Welcome from "@/components/dashboard/Welcome";
import { currentProfile } from "@/lib/currentProfile";
import { db } from "@/lib/db";
import { initialProfile } from "@/lib/initial-user";
import { RedirectToSignIn, UserButton, useUser } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

const page = async () => {

  const user = await currentUser()

  if(!user){
    return redirect("/login")
  }

  initialProfile()

  return (
    <div className="text-white">
      <div className="h-[80vh] bg-gradient-to-b from-[#e0ff30] to-[#e0ff50]">
        <Navbar />{" "}
        <div className="pt-32">
          <Welcome />
          <Dash />
        </div>
      </div>
    </div>
  );
};

export default page;
