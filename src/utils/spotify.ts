import queryString from "simple-query-string";

const getAccessTokenFromHash = (hash: string): string => {
  const access_token = (queryString.parse(hash)?.access_token as string) ?? "";

  return access_token;
};

export { getAccessTokenFromHash };
