"use client";

import React from "react";

import { Draggable, Droppable } from "@hello-pangea/dnd";

import ListHeader from "@/app/(platform)/(dashboard)/board/[id]/components/list-header";
import CardForm from "@/app/(platform)/(dashboard)/board/[id]/components/card-form";
import CardItem from "@/app/(platform)/(dashboard)/board/[id]/components/card-item";

import { type ListWithCards } from "@/types";
import { cn } from "@/lib/utils";

interface ListItemProps {
  data: ListWithCards;
  index: number;
}

function ListItem({ data, index }: ListItemProps) {
  const textareaRef = React.useRef<React.ElementRef<"textarea">>(null);

  const [isEditing, setIsEditing] = React.useState(false);

  const disableEditing = () => {
    setIsEditing(false);
  };

  const enableEditing = () => {
    setIsEditing(true);
    setTimeout(() => {
      textareaRef.current?.focus();
    });
  };

  return (
    <Draggable draggableId={data.id} index={index}>
      {(provided) => (
        <li
          {...provided.draggableProps}
          ref={provided.innerRef}
          className="shrink-0 h-full w-[272px] select-none"
        >
          <div
            {...provided.dragHandleProps}
            className="w-full rounded-md bg-[#f1f2f4] shadow-md pb-2"
          >
            <ListHeader onAddCard={enableEditing} data={data} />
            <Droppable droppableId={data.id} type="card">
              {(provided) => (
                <ol
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className={cn(
                    "mx-1 px-2 py-0.5 flex flex-col gap-y-2",
                    data.cards.length > 0 ? "mt-2" : "mt-0",
                  )}
                >
                  {data.cards.map((card, index) => (
                    <CardItem key={card.id} index={index} data={card} />
                  ))}
                  {provided.placeholder}
                </ol>
              )}
            </Droppable>
            <CardForm
              ref={textareaRef}
              listId={data.id}
              isEditing={isEditing}
              enableEditing={enableEditing}
              disableEditing={disableEditing}
            />
          </div>
        </li>
      )}
    </Draggable>
  );
}

export default ListItem;
