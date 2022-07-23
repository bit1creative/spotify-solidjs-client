import { Component, JSX } from "solid-js";

// components
import { TabBarPhone } from "../navigation";

// styles
import theme from "../../styles/theme.module.scss";
import layoutStyles from "./Layout.module.scss";

type LayoutProps<P = {}> = P & { children?: any };
type LayoutComponent<P = {}> = Component<LayoutProps<P>>;

export const Layout: LayoutComponent = ({ children }) => {
  return (
    <div
      class={`${theme.backgroundMain} ${layoutStyles.mobileTabBarPositioning}`}
    >
      {children}
      <TabBarPhone />
    </div>
  );
};
