import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import qs from "qs";

const baseQuery = fetchBaseQuery({
  baseUrl: "/api",
  prepareHeaders: (headers, { getState, endpoint }) => {},
});

export const surfaceQueries = createApi({
  reducerPath: "surfaceQueries",
  baseQuery: baseQuery,
  tagTypes: ["Tag", "Event"],
  endpoints: (builder) => ({
    getEvents: builder.query({
      query: (payload: { tagId: string }) => {
        return `event?${qs.stringify(payload, { arrayFormat: "comma" })}`;
      },
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
