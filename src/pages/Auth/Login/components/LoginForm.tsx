import { createSignal } from "solid-js";
import { useNavigate } from "@solidjs/router";
import { useAuth } from "~/store/auth";

import { Button } from "~/components/button";
import {
  TextField,
  TextFieldLabel,
  TextFieldInput,
} from "~/components/text-field";
import { Checkbox } from "~/components/checkbox";
import { Card } from "~/components/card";

export default function LoginForm() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = createSignal("demo@user.com");
  const [password, setPassword] = createSignal("password");

  function handleSubmit(e: Event) {
    e.preventDefault();
    if (!email() || !password()) {
      alert("Please complete all fields.");
      return;
    }
    console.log("Logging in with:", email(), password());
    login();
    navigate("/");
  }

  return (
    <Card class="max-w-md w-full p-6 space-y-6">
      <form class="space-y-4" onSubmit={handleSubmit}>
        <TextField>
          <TextFieldLabel for="email">Email</TextFieldLabel>
          <TextFieldInput
            id="email"
            type="email"
            value={email()}
            onInput={(e) => setEmail(e.currentTarget.value)}
            required
          />
        </TextField>

        <TextField>
          <TextFieldLabel for="password">Password</TextFieldLabel>
          <TextFieldInput
            id="password"
            type="password"
            value={password()}
            onInput={(e) => setPassword(e.currentTarget.value)}
            required
          />
        </TextField>

        <div class="flex justify-end text-sm">
          <a href="#" class="text-muted-foreground hover:underline">
            Forgot password?
          </a>
        </div>

        <div class="flex items-start text-sm space-x-2">
          <Checkbox id="tos" defaultChecked />
          <label for="tos" class="leading-snug">
            We/I agree to be bound by the terms set out in the{" "}
            <a href="#" class="text-primary underline">
              Terms of Use
            </a>{" "}
            and{" "}
            <a href="#" class="text-primary underline">
              Privacy Policy
            </a>
            .
          </label>
        </div>

        <Button type="submit" class="w-full">
          Login
        </Button>

        <div class="text-center text-sm text-muted-foreground">
          New user?{" "}
          <a href="/signup" class="text-primary underline">
            Sign up
          </a>
        </div>
      </form>
    </Card>
  );
}
