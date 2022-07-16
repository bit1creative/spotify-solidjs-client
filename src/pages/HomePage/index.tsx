import { Component, createMemo } from "solid-js";
import { useLocation } from "solid-app-router";
import { useStoreon } from '@storeon/solidjs';

// components
import { Login } from "./Login";

// utils
import { getAccessTokenFromHash } from "../../utils/spotify";

// styles
import themeStyles from "../../styles/theme.module.scss";

// types
import { State, Events } from '../../store';

const HomePage: Component = () => {
  const { hash } = useLocation();
  const [state, dispatch] = useStoreon<State, Events>();
  
  if (!state.token) {
    const access_token = createMemo(() => getAccessTokenFromHash(hash));
    console.log(access_token());

    if (access_token()) {
      window.history.replaceState({}, "", "/");
      dispatch('access-token/set', access_token());      
    }
  };

  return (
    <div class={themeStyles.backgroundMain}>
      <Login />
    </div>
  );
};

export default HomePage;
