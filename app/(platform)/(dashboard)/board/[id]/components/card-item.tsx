"use client";

import { Draggable } from "@hello-pangea/dnd";
import { Card } from "@prisma/client";

import { useCardModal } from "@/hooks/useCardModal";

interface CardItemProps {
  data: Card;
  index: number;
}

function CardItem({ data, index }: CardItemProps) {
  const cardModal = useCardModal();

  const handleClickCardItem = () => cardModal.onOpen(data.id);

  return (
    <Draggable draggableId={data.id} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          role="button"
          onClick={handleClickCardItem}
          className="truncate border-2 border-transparent hover:border-black py-2 px-3 text-sm bg-white rounded-md shadow-sm"
        >
          {data.title}
        </div>
      )}
    </Draggable>
  );
}

export default CardItem;
