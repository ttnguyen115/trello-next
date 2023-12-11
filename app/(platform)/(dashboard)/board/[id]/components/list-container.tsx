"use client";

import React from "react";

import ListForm from "@/app/(platform)/(dashboard)/board/[id]/components/list-form";
import ListItem from "@/app/(platform)/(dashboard)/board/[id]/components/list-item";

import { type ListWithCards } from "@/types";

interface ListContainerProps {
  data: ListWithCards[];
  boardId: string;
}

function ListContainer({ data, boardId }: ListContainerProps) {
  const [orderedData, setOrderedData] = React.useState(data);

  React.useEffect(() => {
    setOrderedData(data);
  }, [data]);

  return (
    <ol className="flex gap-x-3 h-full">
      {orderedData.map((list, index) => {
        return <ListItem key={list.id} index={index} data={list} />;
      })}
      <ListForm />
      <div className="flex-shrink-0 w-1" />
    </ol>
  );
}

export default ListContainer;
