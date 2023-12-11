import { z } from "zod";
import { List } from "@prisma/client";

import { ActionState } from "@/lib/createSafeAction";

import { UpdateListOrder } from "@/actions/update-list-order/schema";

export type InputType = z.infer<typeof UpdateListOrder>;
export type ReturnType = ActionState<InputType, List[]>;
