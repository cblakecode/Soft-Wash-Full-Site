import { apiSlice } from "./apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/auth",
        method: "POST",
        body: { ...credentials },
      }),
      onQueryStarted: async (_, { queryFulfilled }) => {
        try {
          const { data } = await queryFulfilled;
          sessionStorage.setItem(
            "authStorage",
            JSON.stringify(data?.accessToken)
          );
        } catch (error) {
          console.log(error);
        }
      },
    }),
    addMember: builder.mutation({
      query: (user) => ({
        url: "/auth/signup",
        method: "POST",
        body: user,
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
