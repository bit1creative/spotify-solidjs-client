import { createStoreon } from "storeon";
import { persistState } from "@storeon/localstorage";

import { accessToken } from "./stores";

import { AccessTokenEvents, AccessTokenState } from "./stores/accessToken";

export interface State extends AccessTokenState {};
export interface Events extends AccessTokenEvents {};

export const store = createStoreon([
  accessToken,
  persistState(["accessToken"], { storage: localStorage }),
]);
