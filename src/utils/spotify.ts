import queryString from "simple-query-string";

import { AccessTokenDataType } from "../types/spotify.types";

const getAccessTokenFromHash = (hash: string): AccessTokenDataType => {
  const accessTokenData =
    (queryString.parse(hash) as AccessTokenDataType) ?? {};

  return accessTokenData;
};

export { getAccessTokenFromHash };
