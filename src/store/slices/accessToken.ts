import { StoreonModule } from "storeon";
import Cookies from "js-cookie";

import { AccessTokenDataType } from "../../types/spotify.types";

export interface AccessTokenState {
  token: string;
}

export interface AccessTokenEvents {
  "accessToken/set": AccessTokenDataType;
}

export const accessToken: StoreonModule<AccessTokenState, AccessTokenEvents> = (
  store
) => {
  store.on("@init", () => {

    const tokenFromCookies = Cookies.get("accessToken") ?? "";

    return {
      token: tokenFromCookies,
    };
  });

  store.on("accessToken/set", (state, accessTokenData: AccessTokenDataType) => {
    
    const { access_token, expires_in } = accessTokenData;

    Cookies.set("accessToken", access_token, {
      expires: new Date(Date.now() + +expires_in * 1000),
    });

    return {
      token: access_token,
    };
  });
};
