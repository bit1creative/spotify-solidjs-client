import queryString from "simple-query-string";

const redirectUri = "http://localhost:3000";

const clientId = "16996127942c4bac8d5deb63cdbe21df";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-library-read",
  "user-library-modify",
  "user-top-read",
  "user-modify-playback-state",
  "user-read-private",
  "user-read-email",
  "user-follow-read",
  "user-follow-modify",
  "playlist-read-collaborative",
  "playlist-read-private",
  "playlist-modify-private",
  "playlist-modify-public",
];

const SPOTIFY_AUTH_URL = `https://accounts.spotify.com/authorize?${queryString.stringify(
  {
    client_id: clientId,
    redirect_uri: redirectUri,
    scope: scopes.join(" "),
    response_type: "token",
    show_dialog: true,
  }
)}`;

export { SPOTIFY_AUTH_URL };
