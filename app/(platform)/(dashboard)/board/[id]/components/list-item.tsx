"use client";

import ListHeader from "@/app/(platform)/(dashboard)/board/[id]/components/list-header";

import { type ListWithCards } from "@/types";

interface ListItemProps {
  data: ListWithCards;
  index: number;
}

function ListItem({ data, index }: ListItemProps) {
  return (
    <li className="shrink-0 h-full w-[272px] select-none">
      <div className="w-full rounded-md bg-[#f1f2f4] shadow-md pb-2">
        <ListHeader data={data} />
      </div>
    </li>
  );
}

export default ListItem;