import { apiSlice } from "./apiSlice";

export const memberApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMember: builder.query({
      // queryFn: async (_, { getState }, extraOptions, baseQuery) => {
      //   const { username } = await getState().auth.user;
      //   console.log(username);
      //   const result = await baseQuery(`members/${username}`);
      //   sessionStorage.setItem("userStorage", JSON.stringify(result?.data));
      //   return result.data ? { data: result.data } : { error: result.error };
      // },
      query: (username) => `/members/${username}`,
      onQueryStarted: async (_, { queryFulfilled }) => {
        const { data } = await queryFulfilled;
        sessionStorage.setItem("userStorage", JSON.stringify(data));
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
      query: (_id) => ({
        url: "/members",
        method: "DELETE",
        body: { _id },
      }),
    }),
  }),
});

export const selectUserResult = (state, id) =>
  memberApiSlice.endpoints.getMember.select(id)(state)?.data ?? {};

export const {
  useGetMemberQueryState,
  useLazyGetMemberQuery,
  useGetMemberQuery,
  useUpdateMemberMutation,
  useDeleteMemberMutation,
} = apiSlice;
