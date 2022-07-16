import { StoreonModule } from "storeon";

export interface AccessTokenState {
  token: string;
}

export interface AccessTokenEvents {
  "access-token/set": string;
}

export const accessToken: StoreonModule<AccessTokenState, AccessTokenEvents> = (store) => {
  store.on("@init", () => ({ token: "" }));
  store.on("access-token/set", (state, access_token: string) => ({
    token: access_token,
  }));
};
