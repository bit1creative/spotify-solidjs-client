import { Component } from "solid-js";

// data
import { SPOTIFY_AUTH_URL } from "../../../data/constants";

// assets
import spotifyLogo from "../../../assets/images/spotify-logo-text.png";

// styles
import styles from "./Login.module.scss";

export const Login: Component = () => {
  return (
    <div class={styles.loginContainer}>
      <img src={spotifyLogo} alt="spotify" />
      <a href={SPOTIFY_AUTH_URL}>Login via Spotify</a>
    </div>
  );
};
("");
