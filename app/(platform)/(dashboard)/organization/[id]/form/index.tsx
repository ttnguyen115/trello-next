"use client";

import { createBoard } from "@/actions/create-board";

import { useAction } from "@/hooks/useAction";
import { FormInput } from "@/components/form/formInput";
import { FormSubmit } from "@/components/form/formSubmit";

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
        <FormInput id="title" label="title" errors={fieldErrors} />
      </div>
      <FormSubmit>Submit</FormSubmit>
    </form>
  );
}

export default Form;
