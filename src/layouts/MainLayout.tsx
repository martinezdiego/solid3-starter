import { Show } from "solid-js";
import { useAuth } from "~/store/auth";
import AppLayout from "./AppLayout";
import CustomFooter from "./components/CustomFooter";

type Props = {
  children: any;
};

export default function MainLayout({ children }: Props) {
  const { isLogged } = useAuth();

  return (
    <div class="flex flex-col min-h-screen bg-background text-foreground">
      <main class="flex-1">
        <Show when={isLogged()} fallback={children}>
          <AppLayout>{children}</AppLayout>
        </Show>
      </main>
      <CustomFooter />
    </div>
  );
}
