import { apiSlice } from "./apiSlice";

export const memberApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMember: builder.query({
      queryFn: async (arg, api, extraOptions, baseQuery) => {
        const { username } = await JSON.parse(
          sessionStorage.getItem("userStorage")
        );
        // const user = await api.getState().auth.user?.username;
        const result = await baseQuery(`members/${username}`);
        if (result?.data) {
          sessionStorage.setItem(
            "userStorage",
            JSON.stringify({ ...result.data, isLoggedIn: true })
          );
        }
        return result.data ? { data: result.data } : { error: result.error };
      },
      validateStatus: (res, result) => {
        return res.status === 200 && !result.isError;
      },
      providesTags: ["Members"],
    }),
    updateMember: builder.mutation({
      query: (member) => ({
        url: "/members",
        method: "PATCH",
        body: member,
      }),
      invalidatesTags: ["Members"],
    }),
    deleteMember: builder.mutation({
      query: ({ _id }) => ({
        url: "/members",
        method: "DELETE",
        body: _id,
      }),
      invalidatesTags: ["Members"],
    }),
  }),
});

export const {
  useLazyGetMemberQuery,
  useGetMemberQuery,
  useUpdateMemberMutation,
  useDeleteMemberMutation,
} = apiSlice;