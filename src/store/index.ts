import { createStoreon } from "storeon";

import { accessToken } from "./slices";

import { AccessTokenEvents, AccessTokenState } from "./slices/accessToken";

export interface State extends AccessTokenState {}
export interface Events extends AccessTokenEvents {}

export const store = createStoreon([accessToken]);
