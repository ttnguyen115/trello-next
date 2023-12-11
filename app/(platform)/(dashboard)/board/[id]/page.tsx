import { redirect } from "next/navigation";

import { auth } from "@clerk/nextjs";

import ListContainer from "@/app/(platform)/(dashboard)/board/[id]/components/list-container";

import { AppRoutes } from "@/shared";
import { db } from "@/lib/db";

interface BoardIdPageProps {
  params: {
    id: string;
  };
}

async function BoardIdPage({ params }: BoardIdPageProps) {
  const { orgId } = auth();

  if (!orgId) redirect(AppRoutes.ORGANIZATION_SELECT);

  const lists = await db.list.findMany({
    where: {
      boardId: params.id,
      board: {
        orgId,
      },
    },
    include: {
      cards: {
        orderBy: {
          order: "asc",
        },
      },
    },
    orderBy: {
      order: "asc",
    },
  });

  return (
    <div className="p-4 h-full overflow-x-auto">
      <ListContainer boardId={params.id} data={lists} />
    </div>
  );
}

export default BoardIdPage;
