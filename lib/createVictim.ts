import { currentUser } from "@clerk/nextjs/server";
import { db } from "./db";
import { date, string } from "zod";
import { NextResponse } from "next/server";

type params = {
  victimName: string;

};

export const createVictim = async ({ req } : {req : Request}) => {
  try {
    const user = await currentUser();

    if (!user) {
      return null;
    }

    const { victimName} = await req.json();

    const newVictim = await db.victim.create({
      data: {
        userId: user.id,
        name: victimName
      },
    });
    return NextResponse.json(newVictim);
    // return new NextResponse("Succesful");
  } catch {
    return new NextResponse("Internal Error", { status: 500 });
  }
};
