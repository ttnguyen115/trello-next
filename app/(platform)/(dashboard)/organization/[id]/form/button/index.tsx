import { Button } from "@/components/ui/button";
import { useFormState } from "react-dom";

function FormButton() {
  const { pending } = useFormState();

  return (
    <Button type="submit" disabled={pending}>
      Submit
    </Button>
  );
}

export default FormButton;
