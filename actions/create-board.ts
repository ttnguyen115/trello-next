"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { db } from "@/lib/db";
import { type State } from "@/actions/types";

const CreateBoard = z.object({
  title: z.string().min(3, {
    message: "Minimum length of 3 letters",
  }),
});

export const create = async (
  prevState: State,
  formData: FormData,
): Promise<State> => {
  const validatedFields = CreateBoard.safeParse({
    title: formData.get("title"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing fields.",
    };
  }

  const { title } = validatedFields.data;
  try {
    await db.board.create({
      data: {
        title,
      },
    });
  } catch (e) {
    return {
      message: "Database Error",
    };
  }
  revalidatePath("/organization/org_2ZGSg181MtRQzddSlcGICs92elB");
  redirect("/organization/org_2ZGSg181MtRQzddSlcGICs92elB");
};
