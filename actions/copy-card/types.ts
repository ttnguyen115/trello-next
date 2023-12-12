import { z } from "zod";
import { Card } from "@prisma/client";

import { ActionState } from "@/lib/createSafeAction";

import { CopyCard } from "@/actions/copy-card/schema";

export type InputType = z.infer<typeof CopyCard>;
export type ReturnType = ActionState<InputType, Card>;
