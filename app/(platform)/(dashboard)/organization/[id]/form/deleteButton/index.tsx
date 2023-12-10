"use client";

import { Button } from "@/components/ui/button";
import { useFormState } from "react-dom";

function FormDelete() {
  const { pending } = useFormState();

  return (
    <Button type="submit" variant="destructive" size="sm" disabled={pending}>
      Delete
    </Button>
  );
}

export default FormDelete;
