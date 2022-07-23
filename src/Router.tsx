import { Component, lazy, Show } from "solid-js";
import { Routes, Route } from "solid-app-router";
import { useStoreon } from "@storeon/solidjs";

// pages
const LoginPage = lazy(() => import("./pages/Login"));
const HomePage = lazy(() => import("./pages/Home"));

// types
import { State, Events } from "./store";

const RouterWrapper: Component = () => {
  const [state] = useStoreon<State, Events>();

  return (
    <Routes>
      <Show
        when={!!state.token}
        fallback={<Route path="/" component={LoginPage} />}
      >
        <Route path="/" component={HomePage} />
        <Route path="*" component={HomePage} />
      </Show>
    </Routes>
  );
};

export default RouterWrapper;
