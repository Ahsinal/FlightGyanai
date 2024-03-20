
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

export const globalApi = createApi({
    reducerPath: "globalApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://flightsgyani.paradiseit.com.np/api/",
    }),
    tagTypes: [
        "Package",
    ],
    extractRehydrationInfo(action, { reducerPath }) {
        if (action.type === HYDRATE) {
            return action.payload[reducerPath];
        }
    },
    endpoints: (builder) => ({
        createInquiries: builder.mutation({
            query: (data) => {
                return {
                    url: '/inquiries',
                    method: "POST",
                    body: data,
                    prepareHeaders: (headers) => {
                        headers.set("Content-Type", "multipart/form-data");
                        return headers;
                    },
                };
            },
            invalidatesTags: ["Inquiries"],
        }),

        getPackage: builder.query({
            query: () => ({
                url: "/packages",
                method: "GET",
            }),
            providesTags: ["Package"],
        }),
        getPackageDetail: builder.query({
            query: (id) => {
                return {
                    url: `/package/${id}`,
                    method: "GET",
                };
            },
            providesTags: ["Package"],
        }),

    }),
});

export const {
    useGetPackageQuery,
    useGetPackageDetailQuery,

} = globalApi;