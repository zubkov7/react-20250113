import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api" }),
  tagTypes: ["reviews"],
  endpoints: (builder) => ({
    getHeadphones: builder.query({
      query: () => "/products",
    }),
    getHeadphoneById: builder.query({
      query: (headphoneId) => `/product/${headphoneId}`,
    }),
    getReviewsByHeadphoneId: builder.query({
      query: (headphoneId) => `reviews?productId=${headphoneId}`,
      providesTags: [{ type: "reviews", id: "ALL" }],
    }),
    addReview: builder.mutation({
      query: ({ headphoneId, review }) => ({
        url: `/review/${headphoneId}`,
        body: review,
        method: "POST",
      }),
      invalidatesTags: [{ type: "reviews", id: "ALL" }],
    }),
  }),
});

export const {
  useGetHeadphonesQuery,
  useLazyGetHeadphonesQuery,
  useGetHeadphoneByIdQuery,
  useGetReviewsByHeadphoneIdQuery,
  useAddReviewMutation,
} = apiSlice;
