import { Component, lazy, Show } from "solid-js";
import { Routes, Route } from "solid-app-router";
import { useStoreon } from "@storeon/solidjs";

// pages
const LoginPage = lazy(() => import('./pages/Login'));
const HomePage = lazy(() => import("./pages/Home"));

// layout
import { Layout } from "./components";

// types
import { State, Events } from "./store";

const RouterWrapper: Component = () => {

  const [state] = useStoreon<State, Events>();
  console.log(state.token);

  return (
    <Routes>
      {/* <Show when={state.token} fallback={<Route path="/" component={LoginPage} />}> */}
        {/* <Layout> */}
          <Route path="/" component={HomePage} />
        {/* </Layout> */}
      {/* </Show> */}
      {/* <Layout>
        </Layout> */}
    </Routes>
  );
};

export default RouterWrapper;
