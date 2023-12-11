"use server";

import { revalidatePath } from "next/cache";
import { auth } from "@clerk/nextjs";

import { db } from "@/lib/db";
import { createSafeAction } from "@/lib/createSafeAction";
import { AppRoutes } from "@/shared";

import { InputType, ReturnType } from "@/actions/update-card-order/types";
import { UpdateCardOrder } from "@/actions/update-card-order/schema";

const handler = async (data: InputType): Promise<ReturnType> => {
  const { userId, orgId } = auth();

  if (!userId || !orgId) {
    return {
      error: "Unauthorized",
    };
  }

  const { items, boardId } = data;
  let updatedCards;

  try {
    const transaction = items.map((card) =>
      db.card.update({
        where: {
          id: card.id,
          list: {
            board: {
              orgId,
            },
          },
        },
        data: {
          order: card.order,
          listId: card.listId,
        },
      }),
    );
    updatedCards = await db.$transaction(transaction);
  } catch (error) {
    return {
      error: "Failed to update the card order.",
    };
  }

  revalidatePath(`${AppRoutes.BOARD}/${boardId}`);
  return { data: updatedCards };
};

export const updateCardOrder = createSafeAction(UpdateCardOrder, handler);
