"use client";

import { useParams } from "next/navigation";

import { Copy, Trash } from "lucide-react";

import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";

import { useAction } from "@/hooks/useAction";
import { useCardModal } from "@/hooks/useCardModal";
import { copyCard } from "@/actions/copy-card";
import { deleteCard } from "@/actions/delete-card";

import { type CardWithList } from "@/types";
import { toast } from "sonner";

interface ActionsProps {
  data: CardWithList;
}

function Actions({ data }: ActionsProps) {
  const params = useParams();
  const cardModal = useCardModal();

  const { execute: executeCopyCard, isLoading: isLoadingCopy } = useAction(
    copyCard,
    {
      onSuccess: () => {
        toast.success(`Card "${data.title}" copied`);
        cardModal.onClose();
      },
      onError: (error) => {
        toast.error(error);
      },
    },
  );

  const { execute: executeDeleteCard, isLoading: isLoadingDelete } = useAction(
    deleteCard,
    {
      onSuccess: () => {
        toast.success(`Card "${data.title}" deleted`);
        cardModal.onClose();
      },
      onError: (error) => {
        toast.error(error);
      },
    },
  );

  const onCopy = () => {
    const boardId = params.id as string;
    executeCopyCard({ id: data.id, boardId });
  };

  const onDelete = () => {
    const boardId = params.id as string;
    executeDeleteCard({ id: data.id, boardId });
  };

  return (
    <div className="space-y-2 mt-2">
      <p className="text-xs font-semibold">Actions</p>
      <Button
        variant="gray"
        size="inline"
        onClick={onCopy}
        disabled={isLoadingCopy}
        className="w-full justify-start"
      >
        <Copy className="h-4 w-4 mr-2" />
        Copy
      </Button>
      <Button
        variant="gray"
        size="inline"
        onClick={onDelete}
        disabled={isLoadingDelete}
        className="w-full justify-start"
      >
        <Trash className="h-4 w-4 mr-2" />
        Delete
      </Button>
    </div>
  );
}

Actions.Skeleton = function ActionsSkeleton() {
  return (
    <div className="space-y-2 mt-2">
      <Skeleton className="w-20 h-4 bg-neutral-200" />
      <Skeleton className="w-full h-8 bg-neutral-200" />
      <Skeleton className="w-full h-8 bg-neutral-200" />
    </div>
  );
};

export default Actions;
