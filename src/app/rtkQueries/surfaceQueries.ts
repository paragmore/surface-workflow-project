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
  endpoints: (builder) => ({
    getEvents: builder.query({
      query: () => "event",
    }),
  }),
});

export const { useGetEventsQuery } = surfaceQueries;
