"use client";

import { createBoard } from "@/actions/create-board";

import FormInput from "@/app/(platform)/(dashboard)/organization/[id]/form/input";
import FormButton from "@/app/(platform)/(dashboard)/organization/[id]/form/button";
import { useAction } from "@/hooks/useAction";

function Form() {
  const { execute, fieldErrors } = useAction(createBoard, {
    onSuccess: (data) => {
      console.log(data, "Success");
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const onSubmit = (formData: FormData) => {
    const title = formData.get("title") as string;
    execute({ title });
  };

  return (
    <form action={onSubmit}>
      <div className="flex">
        <FormInput errors={fieldErrors} />
      </div>
      <FormButton />
    </form>
  );
}

export default Form;
