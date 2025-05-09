import { createSignal } from "solid-js";

const [isLogged, setIsLogged] = createSignal(false);

export function useAuth() {
  return {
    isLogged,
    login: () => setIsLogged(true),
    logout: () => setIsLogged(false),
  };
}
