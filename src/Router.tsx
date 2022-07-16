import { Component, lazy } from "solid-js";
import { Routes, Route } from "solid-app-router";

const HomePage = lazy(() => import("./pages/HomePage"));

const RouterWrapper: Component = () => {
  return (
    <Routes>
      <Route path="/" component={HomePage} />
    </Routes>
  );
};

export default RouterWrapper;
