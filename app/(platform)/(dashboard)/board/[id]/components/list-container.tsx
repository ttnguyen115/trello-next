"use client";

import { type ListWithCards } from "@/types";
import ListForm from "@/app/(platform)/(dashboard)/board/[id]/components/list-form";

interface ListContainerProps {
  data: ListWithCards[];
  boardId: string;
}

function ListContainer({ data, boardId }: ListContainerProps) {
  return (
    <ol>
      <ListForm />
      <div className="flex-shrink-0 w-1" />
    </ol>
  );
}

export default ListContainer;
