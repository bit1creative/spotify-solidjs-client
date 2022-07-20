import { Component, createMemo, Show } from "solid-js";
import { useLocation } from "solid-app-router";
import { useStoreon } from "@storeon/solidjs";

// utils
import { getAccessTokenFromHash } from "../../utils/spotify";

// data
import { SPOTIFY_AUTH_URL } from "../../data/constants";

// assets
import spotifyLogo from "../../assets/images/spotify-logo-text.png";

// styles
import styles from "./Login.module.scss";

// types
import { State, Events } from "../../store";

const LoginPage: Component = () => {
    const { hash } = useLocation();
    const [state, dispatch] = useStoreon<State, Events>();

    if (!state.token) {
        const accessTokenData = createMemo(() => getAccessTokenFromHash(hash));

        if (accessTokenData().access_token) {
        window.history.replaceState({}, "", "/");
        dispatch("accessToken/set", accessTokenData());
        }
    }

  return (
    <div class={styles.loginContainer}>
      <img src={spotifyLogo} alt="spotify" />
      <a href={SPOTIFY_AUTH_URL} class={styles.loginButton}>
        Login via Spotify
      </a>
    </div>
  );
};

export default LoginPage;
