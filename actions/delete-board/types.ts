import { z } from "zod";
import { Board } from "@prisma/client";

import { ActionState } from "@/lib/createSafeAction";

import { DeleteBoard } from "@/actions/delete-board/schema";

export type InputType = z.infer<typeof DeleteBoard>;
export type ReturnType = ActionState<InputType, Board>;
