import { deleteBoard } from "@/actions/delete-board";
import FormDelete from "@/app/(platform)/(dashboard)/organization/[id]/form/deleteButton";

interface BoardProps {
  id: string;
  title: string;
}

function Board({ id, title }: BoardProps) {
  const deleteBoardWithId = deleteBoard.bind(null, id);

  return (
    <form action={deleteBoardWithId} className="flex items-center gap-x-2">
      <p>Board title: {title}</p>
      <FormDelete />
    </form>
  );
}

export default Board;
