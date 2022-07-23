import { Component, createMemo, createSignal, Show } from "solid-js";
import { useLocation, Link } from "solid-app-router";

// styles
import theme from "../../../styles/theme.module.scss";
import styles from "./TabBarPhone.module.scss";

// icons
import {
  RiBuildingsHome5Line,
  RiBuildingsHome5Fill,
  RiSystemSearchLine,
  RiSystemSearchFill,
  RiDocumentBook2Line,
  RiDocumentBook2Fill,
} from "solid-icons/ri";

const tabs = new Map([
    ['/', '1'],
    ['/search', '2'],
    ['my-library', '3']
])

export const TabBarPhone: Component = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  
  const activeTab = createMemo(() => tabs.get(`/${pathname.split('/')[0]}`));
  

  return (
    <div class={styles.tabBarContainer}>
      <Link href="/">
        <Show
          when={activeTab}
          fallback={<RiBuildingsHome5Line color={"white"} size={"40px"} />}
        >
          <RiBuildingsHome5Fill color={"white"} size={"40px"} />
        </Show>
      </Link>
      <Link href="/search">
        <Show
          when={pathname === "/search"}
          fallback={<RiSystemSearchLine color={"white"} size={"40px"} />}
        >
          <RiSystemSearchFill color={"white"} size={"40px"} />
        </Show>
      </Link>
      <Link href="/my-library">
        <Show
          when={pathname === "/my-library"}
          fallback={<RiDocumentBook2Line color={"white"} size={"40px"} />}
        >
          <RiDocumentBook2Fill color={"white"} size={"40px"} />
        </Show>
      </Link>
    </div>
  );
};
