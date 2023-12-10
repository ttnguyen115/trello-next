import { useFormStatus } from "react-dom";

import { Button } from "@/components/ui/button";

function FormButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending}>
      Submit
    </Button>
  );
}

export default FormButton;
