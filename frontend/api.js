
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

export const globalApi = createApi({
    reducerPath: "globalApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://admin.rightoptionedu.com/api/",
    }),
    tagTypes: [
        "",
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

        getServices: builder.query({
            query: () => ({
                url: "/services",
                method: "GET",
            }),
            providesTags: ["Services"],
        }),
        getServiceDetail: builder.query({
            query: (id) => {
                return {
                    url: `/service/${id}`,
                    method: "GET",
                };
            },
            providesTags: ["Services"],
        }),

    }),
});

export const {

} = globalApi;