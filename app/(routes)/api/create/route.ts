import { formSchema } from "@/components/dashboard/Navbar";
import { currentProfile } from "@/lib/currentProfile";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const profile = await currentProfile();

    if (!profile) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const { userId } = profile;

    const { name } = await req.json();
    console.log({ name });
    const createVictim = await db.victim.create({
      data: {
        name,
        // planet,
        userId,
        // details,
      },
    });

    return NextResponse.json(createVictim);
  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}
