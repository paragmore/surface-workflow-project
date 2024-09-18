import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = (args, api, extraOptions) => {
  return fetchBaseQuery({
    baseUrl: "/api",
    prepareHeaders: (headers, { getState, endpoint }) => {},
  })(args, api, extraOptions);
};

export const surfaceQueries = createApi({
  reducerPath: "surfaceQueries",
  baseQuery: baseQuery,
  tagTypes: ["Tag", "Event"],
  endpoints: (builder) => ({
    getEvents: builder.query({
      query: () => "event",
    }),
    getEventByTagId: builder.query({
      query: ({ tagId }: { tagId: string }) => `event/${tagId}`,
      providesTags: ["Event"],
    }),
    getTagByUser: builder.query({
      query: ({ userName }: { userName: string }) => `tag/${userName}`,
      providesTags: ["Tag"],
    }),
    addTagForUser: builder.mutation({
      query: ({ userName }: { userName: string }) => {
        const body = { userName };
        return { url: "tag", method: "POST", body };
      },
      invalidatesTags: ["Tag"],
    }),
  }),
});

export const {
  useGetEventsQuery,
  useGetTagByUserQuery,
  useAddTagForUserMutation,
  useGetEventByTagIdQuery,
} = surfaceQueries;
