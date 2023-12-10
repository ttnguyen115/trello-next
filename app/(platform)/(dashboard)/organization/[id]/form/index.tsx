"use client";

import { useFormState } from "react-dom";

import { create } from "@/actions/create-board";
import FormInput from "@/app/(platform)/(dashboard)/organization/[id]/form/input";
import FormButton from "@/app/(platform)/(dashboard)/organization/[id]/form/button";
import { State } from "@/actions/types";

function Form() {
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(create, initialState);

  return (
    <form action={dispatch}>
      <div className="flex">
        <FormInput errors={state?.errors} />
      </div>
      <FormButton />
    </form>
  );
}

export default Form;
