import { SignIn } from "@clerk/nextjs";
import ClerkLayout from "@/app/(platform)/(clerk)/layout";

function SignInPage() {
  return (
    <ClerkLayout>
      <SignIn />
    </ClerkLayout>
  );
}

export default SignInPage;
