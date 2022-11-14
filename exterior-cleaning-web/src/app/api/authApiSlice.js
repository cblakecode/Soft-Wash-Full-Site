import { loggedIn } from "../slices/authSlice";
import { apiSlice } from "./apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/auth",
        method: "POST",
        body: { ...credentials },
      }),
      onQueryStarted: async (credentials, { queryFulfilled, dispatch }) => {
        try {
          const { data } = await queryFulfilled;
          await sessionStorage.setItem("authStorage", JSON.stringify(data));
          dispatch(loggedIn());
        } catch (error) {
          console.log(error.error.data.message);
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
  }),
});

export const { useLoginMutation, useAddMemberMutation, useLogoutMutation } =
  apiSlice;
