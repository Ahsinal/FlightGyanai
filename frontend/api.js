
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

export const globalApi = createApi({
    reducerPath: "globalApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://flightsgyani.paradiseit.com.np/api/",
    }),
    tagTypes: [
        "Inquiries",
        "Booking",
        "Package",
        "Blog",
        "Teams",
        "Services",
        "ChooseUs",
        "Pages",
        "Testimonial",
        "Faq",
        "Banner",
        "Setting",
        "SocialMedia",
        "CategoryPackage",
        "Partners",
        "Destination",
        "Tour",
        "Menu"

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
        createBooking: builder.mutation({
            query: (data) => {
                return {
                    url: '/bookings',
                    method: "POST",
                    body: data,
                    prepareHeaders: (headers) => {
                        headers.set("Content-Type", "multipart/form-data");
                        return headers;
                    },
                };
            },
            invalidatesTags: ["Booking"],
        }),

        getSettings: builder.query({
            query: () => ({
                url: "/settings",
                method: "GET",
            }),
            providesTags: ["Setting"],
        }),
        getDestination: builder.query({
            query: () => ({
                url: "/destinations",
                method: "GET",
            }),
            providesTags: ["Destination"],
        }),
        getDestinationSlug: builder.query({
            query: (id) => {
                return {
                    url: `/destination/${id}`,
                    method: "GET",
                };
            },
            providesTags: ["Destination"],
        }),
        getMenuSlug: builder.query({
            query: (id) => {
                return {
                    url: `/menus/${id}`,
                    method: "GET",
                };
            },
            providesTags: ["Menu"],
        }),
        getTourPackage: builder.query({
            query: () => ({
                url: "/tourtype",
                method: "GET",
            }),
            providesTags: ["Tour"],
        }),
        getTourPackageDetail: builder.query({
            query: (id) => {
                return {
                    url: `/tourtype/${id}`,
                    method: "GET",
                };
            },
            providesTags: ["Tour"],
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
        getCategoryPackage: builder.query({
            query: () => ({
                url: "/packagecategories",
                method: "GET",
            }),
            providesTags: ["CategoryPackage"],
        }),
        getCategoryPackageDetail: builder.query({
            query: (id) => {
                return {
                    url: `/categorywisepackage/${id}`,
                    method: "GET",
                };
            },
            providesTags: ["CategoryPackage"],
        }),
        getBlog: builder.query({
            query: () => ({
                url: "/blogs",
                method: "GET",
            }),
            providesTags: ["Blog"],
        }),
        getBlogDetail: builder.query({
            query: (id) => {
                return {
                    url: `/blog/${id}`,
                    method: "GET",
                };
            },
            providesTags: ["Blog"],
        }),
        getTeams: builder.query({
            query: () => ({
                url: "/ourteams",
                method: "GET",
            }),
            providesTags: ["Teams"],
        }),
        getServices: builder.query({
            query: () => ({
                url: "/services",
                method: "GET",
            }),
            providesTags: ["Services"],
        }),
        getChooseUs: builder.query({
            query: () => ({
                url: "/whychooseus",
                method: "GET",
            }),
            providesTags: ["ChooseUs"],
        }),
        getPage: builder.query({
            query: () => ({
                url: "/pages",
                method: "GET",
            }),
            providesTags: ["Pages"]
        }),
        getPageDetail: builder.query({
            query: (id) => {
                return {
                    url: `page/${id}`,
                    method: "GET",
                };
            },
            providesTags: ["Pages"],
        }),
        getTestimonial: builder.query({
            query: () => ({
                url: "/testimonials",
                method: "GET",
            }),
            providesTags: ["Testimonial"]
        }),
        getFaq: builder.query({
            query: () => ({
                url: "/faqs",
                method: "GET",
            }),
            providesTags: ["Faq"]
        }),
        getBanner: builder.query({
            query: () => ({
                url: "/sliders",
                method: "GET",
            }),
            providesTags: ["Banner"]
        }),
        getPartners: builder.query({
            query: () => ({
                url: "/partners",
                method: "GET",
            }),
            providesTags: ["Partners"]
        }),
        getSocial: builder.query({
            query: () => ({
                url: "/socialmedias",
                method: "GET",
            }),
            providesTags: ["SocialMedia"]
        }),
        
    }),
});

export const {
    useCreateInquiriesMutation,
    useCreateBookingMutation,
    useGetPackageQuery,
    useGetPackageDetailQuery,
    useGetBlogQuery,
    useGetBlogDetailQuery,
    useGetTeamsQuery,
    useGetServicesQuery,
    useGetChooseUsQuery,
    useGetPageQuery,
    useGetPageDetailQuery,
    useGetTestimonialQuery,
    useGetFaqQuery,
    useGetBannerQuery,
    useGetSettingsQuery,
    useGetSocialQuery,
    useGetCategoryPackageQuery,
    useGetCategoryPackageDetailQuery,
    useGetPartnersQuery,
    useGetDestinationQuery,
    useGetDestinationSlugQuery,
    useGetTourPackageQuery,
    useGetTourPackageDetailQuery,
    useGetMenuSlugQuery,


} = globalApi;