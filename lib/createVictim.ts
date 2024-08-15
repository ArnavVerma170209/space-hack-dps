import { currentUser } from "@clerk/nextjs/server";
import { db } from "./db";
import { date, string } from "zod";
import { Planets } from "@prisma/client";
import { NextResponse } from "next/server";

type params = {
  victimName: string;
  details?: string;
  planet: Planets[];
};

export const createVictim = async ({ req } : {req : Request}) => {
  try {
    const user = await currentUser();

    if (!user) {
      return null;
    }

    const { victimName, details, planet } = await req.json();

    const newVictim = await db.victim.create({
      data: {
        userId: user.id,
        name: victimName,
        details: details,
        planet: planet,
      },
    });
    return NextResponse.json(newVictim);
    // return new NextResponse("Succesful");
  } catch {
    return new NextResponse("Internal Error", { status: 500 });
  }
};
