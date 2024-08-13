"use client";

import { UserButton, useUser } from "@clerk/nextjs";
import React from "react";

const page = () => {
  const { user } = useUser();
  return (
    <div className="text-white">
      Hi, {user?.firstName}
      <UserButton />
    </div>
  );
};

export default page;
