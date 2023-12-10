"use client";

import React from "react";

import { toast } from "sonner";
import { Board } from "@prisma/client";

import { Button } from "@/components/ui/button";
import { FormInput } from "@/components/form/formInput";

import { useAction } from "@/hooks/useAction";
import { updateBoard } from "@/actions/update-board";

interface BoardTitleFormProps {
  data: Board;
}

function BoardTitleForm({ data }: BoardTitleFormProps) {
  const { execute } = useAction(updateBoard, {
    onSuccess: (data) => {
      toast.success(`Board "${data.title}" updated.`);
      setTitle(data.title);
      disableEditing();
    },
    onError: (error) => {
      toast.error(error);
    },
  });
  const formRef = React.useRef<React.ElementRef<"form">>(null);
  const inputRef = React.useRef<React.ElementRef<"input">>(null);
  const [title, setTitle] = React.useState(data.title);
  const [isEditing, setIsEditing] = React.useState(false);

  const enableEditing = () => {
    setIsEditing(true);
    setTimeout(() => {
      inputRef.current?.focus();
      inputRef.current?.select();
    });
  };
  const disableEditing = () => {
    setIsEditing(false);
  };

  const onSubmit = (formData: FormData) => {
    const title = formData.get("title") as string;
    execute({ title, id: data.id });
  };

  const onBlur = () => {
    formRef.current?.requestSubmit();
  };

  if (isEditing) {
    return (
      <form
        ref={formRef}
        action={onSubmit}
        className="flex items-center gap-x-2"
      >
        <FormInput
          ref={inputRef}
          id="title"
          onBlur={onBlur}
          defaultValue={title}
          className="text-lg font-bold px-[7px] py-1 h-7 bg-transparent focus-visible:outline-none focus-visible:ring-transparent border-none"
        />
      </form>
    );
  }

  return (
    <Button
      onClick={enableEditing}
      variant="transparent"
      className="font-bold text-lg h-auto w-auto p-1 px-2"
    >
      {title}
    </Button>
  );
}

export default BoardTitleForm;
