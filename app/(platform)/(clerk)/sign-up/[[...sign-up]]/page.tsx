import { SignUp } from "@clerk/nextjs";
import ClerkLayout from "@/app/(platform)/(clerk)/layout";

function SignUpPage() {
  return (
    <ClerkLayout>
      <SignUp />
    </ClerkLayout>
  );
}

export default SignUpPage;
