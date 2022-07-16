import { Component, ErrorBoundary } from "solid-js";
import { Router } from "solid-app-router";
import { StoreonProvider } from "@storeon/solidjs";

import { ErrorBoundaryFallback } from "./components";
import RouterWrapper from "./Router";

import { store } from "./store";

const App: Component = () => {
  return (
    <ErrorBoundary
      fallback={(err, reset) => {
        return <ErrorBoundaryFallback err={err} reset={reset} />;
      }}
    >
      <StoreonProvider store={store}>
        <Router>
          <RouterWrapper />
        </Router>
      </StoreonProvider>
    </ErrorBoundary>
  );
};

export default App;
