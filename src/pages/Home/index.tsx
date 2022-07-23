import { Component } from "solid-js";

// layout
import { Layout } from "../../components";

// styles
import themeStyles from "../../styles/theme.module.scss";

const HomePage: Component = () => {
  return (
    <Layout>
      <span>Logged in</span>
    </Layout>
  );
};

export default HomePage;
