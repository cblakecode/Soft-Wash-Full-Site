import { setCredentials } from "../slices/authSlice";
import { apiSlice } from "./apiSlice";

export const memberApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMember: builder.query({
      query: (username) => `/members/${username}`,
      onQueryStarted: async (username, { queryFulfilled }) => {
        try {
          const { data } = await queryFulfilled;
          await sessionStorage.setItem("userStorage", JSON.stringify(data));
        } catch (error) {
          console.log(error.error.data.message);
        }
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
      onQueryStarted: async (member, { dispatch }) => {
        await dispatch(setCredentials(member));
      },
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
