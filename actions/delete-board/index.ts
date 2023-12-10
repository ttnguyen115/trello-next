"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs";

import { db } from "@/lib/db";
import { createSafeAction } from "@/lib/createSafeAction";
import { AppRoutes } from "@/shared";

import { InputType, ReturnType } from "@/actions/delete-board/types";
import { DeleteBoard } from "@/actions/delete-board/schema";

const handler = async (data: InputType): Promise<ReturnType> => {
  const { userId, orgId } = auth();

  if (!userId || !orgId) {
    return {
      error: "Unauthorized",
    };
  }

  const { id } = data;
  let board;

  try {
    board = await db.board.delete({
      where: {
        id,
        orgId,
      },
    });
  } catch (error) {
    return {
      error: "Failed to delete.",
    };
  }

  revalidatePath(`${AppRoutes.ORGANIZATION}/${orgId}`);
  redirect(`${AppRoutes.ORGANIZATION}/${orgId}`);
};

export const deleteBoard = createSafeAction(DeleteBoard, handler);
