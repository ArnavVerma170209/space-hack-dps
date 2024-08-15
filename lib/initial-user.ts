import { currentUser } from "@clerk/nextjs/server";
import { db } from "./db";
import { date } from "zod";

export const initialProfile = async () => {
  const user = await currentUser();

  if (!user) {
    return null;
  }

  const profile = await db.user.findFirst({
    where: {
      userId: user.id,
    },
  });

  if (profile) {
    return profile;
  }

  const newProfile = await db.user.create({
    data: {
      userId: user.id,
      name: `${user.firstName} ${user.lastName}`,
      email: user.emailAddresses[0].emailAddress,
    },
  });

  return newProfile;
};
