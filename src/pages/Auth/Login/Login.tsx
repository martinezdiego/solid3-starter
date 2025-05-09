import { Flex } from "~/components/flex";
import LoginForm from "./components/LoginForm";

export default function LoginPage() {
  return (
    <Flex
      direction="col"
      // alignItems="center"
      justifyContent="center"
      class="px-4 bg-background text-foreground h-full"
    >
      <div class="w-full max-w-md">
        <h1 class="text-2xl font-semibold text-center mb-6">Login</h1>
        <LoginForm />
      </div>
    </Flex>
  );
}
