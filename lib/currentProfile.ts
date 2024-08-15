
import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export const currentProfile = async () => {
  const user = await currentUser();

  if (!user) {
    return redirect('/login');
  }

  const profile = await db.user.findFirst({
    where: {
      userId: user.id,
    },
  });

  return profile;
};
