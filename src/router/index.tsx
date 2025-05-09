import { Router, Route } from "@solidjs/router";
import { Show } from "solid-js";
import { Navigate } from "@solidjs/router";

import { useAuth } from "~/store/auth";

import MainLayout from "~/layouts/MainLayout";
import LoginPage from "~/pages/Auth/Login/Login";

export default function AppRouter() {
  const { isLogged } = useAuth();

  return (
    <Router>
      <Route
        path="/"
        component={() => (
          <Show when={isLogged()} fallback={<Navigate href="/login" />}>
            <MainLayout />
          </Show>
        )}
      />
      <Route path="/login" component={() => <LoginPage />} />
    </Router>
  );
}
