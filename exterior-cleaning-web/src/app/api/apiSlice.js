import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { logOut } from "../slices/authSlice";

const customBaseQuery = fetchBaseQuery({
  baseUrl: "https://exterior-cleaning-web.onrender.com",
  credentials: "include",
  prepareHeaders: (headers) => {
    const token = JSON.parse(sessionStorage.getItem("authStorage"));
    if (token) {
      headers.set("authorization", `Bearer ${token.accessToken}`);
    }
    return headers;
  },
});

export const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await customBaseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 403) {
    const refreshResult = await customBaseQuery(
      "/auth/refresh",
      api,
      extraOptions
    );
    if (refreshResult?.data) {
      sessionStorage.setItem(
        "authStorage",
        JSON.stringify({ ...refreshResult.data })
      );
      result = await customBaseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logOut());
    }
  }
  return result;
};

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["Members", "Auth"],
  endpoints: (builder) => ({}),
});
