import { db } from "@/lib/db";
import Board from "@/app/(platform)/(dashboard)/organization/[id]/board";
import Form from "@/app/(platform)/(dashboard)/organization/[id]/form";

async function OrganizationIdPage() {
  const boards = await db.board.findMany();

  return (
    <div className="flex flex-col space-y-4">
      <Form />
      <div className="space-y-2">
        {boards?.map((board) => (
          <Board key={board.id} id={board.id} title={board.title} />
        ))}
      </div>
    </div>
  );
}

export default OrganizationIdPage;
