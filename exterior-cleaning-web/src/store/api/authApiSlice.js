import { apiSlice } from "./apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/auth",
        method: "POST",
        body: { ...credentials },
      }),
    }),
    addMember: builder.mutation({
      query: (member) => ({
        url: "/auth/signup",
        method: "POST",
        body: member,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
    }),
    refresh: builder.query({
      query: () => "/auth/refresh",
    }),
  }),
});

export const { useLoginMutation, useAddMemberMutation, useLogoutMutation } =
  apiSlice;
