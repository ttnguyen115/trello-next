"use client";

import { useFormState } from "react-dom";

import { Input } from "@/components/ui/input";

interface FormInputProps {
  errors?: {
    title?: string[];
  };
}

function FormInput({ errors }: FormInputProps) {
  const { pending } = useFormState();

  return (
    <div>
      <Input
        id="title"
        name="title"
        required
        placeholder="Enter a board title"
        disabled={pending}
      />
      {errors?.title ? (
        <div>
          {errors.title.map((error: string) => (
            <p key={error} className="text-rose-500">
              {error}
            </p>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default FormInput;
