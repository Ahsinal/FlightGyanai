"use client";
import { UseQuery } from "@reduxjs/toolkit/query/react";
import {
  useGetBannerQuery,
  useGetChooseUsQuery,
  useGetPackageQuery,
  useGetSettingsQuery,
  useGetCategoryPackageQuery,
  useGetCategoryPackageDetailQuery,
  useGetBlogQuery,
  useGetBlogDetailQuery,
  useGetTestimonialQuery,
  useGetPartnersQuery,
  useGetPackageDetailQuery,
} from "../../frontend/api";
import Card from "@/components/cards/Card";
import LandingAbout from "@/components/layouts/LandingAbout";
import LandingBanner from "@/components/layouts/LandingBanner";
import LandingBlog from "@/components/layouts/LandingBlog";
import LandingBucketList from "@/components/layouts/LandingAllPackageList";
import LandingPackage from "@/components/layouts/LandingPackage";
import PaymentPartner from "@/components/layouts/PaymentPartner";
import TestimonialNew from "../components/layouts/TestimonialNew";
import Loading from "@/components/layouts/Loading";
export default function Home() {
  //useRTk Query hook to fetch data
  const { data: bannerData, isLoading: bannerLoading } = useGetBannerQuery();
  const { data: chooseData, isLoading: chooseLoading } = useGetChooseUsQuery();
  const { data: packageData, isLoading: packageLoading } = useGetPackageQuery();
  const { data: packageDetailData, isLoading: packageDetailLoading } =
    useGetPackageDetailQuery();
  const { data: settingData, isLoading: settingLoading } =
    useGetSettingsQuery();
  const { data: categoryData, isLoading: categoryLoading } =
    useGetCategoryPackageQuery();
  const { data: categoryDetailData, isLoading: categoryDetailLoading } =
    useGetCategoryPackageDetailQuery();
  const { data: blogData, isLoading: blogLoading } = useGetBlogQuery();
  const { data: blogDetailData, isLoading: blogDetailLoading } =
    useGetBlogDetailQuery();
  const { data: testimonialData, isLoading: testimonialLoading } =
    useGetTestimonialQuery();
  const { data: partnerData, isLoading: partnerLoading } =
    useGetPartnersQuery();

  // Check if any query is still loading
  const isLoading =
    bannerLoading ||
    chooseLoading ||
    packageLoading ||
    packageDetailLoading ||
    settingLoading ||
    categoryLoading ||
    categoryDetailLoading ||
    blogLoading ||
    blogDetailLoading ||
    testimonialLoading ||
    partnerLoading;

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <section className="landing-banner">
        <LandingBanner />
      </section>
      <section className="py-40 landing-package">
        <LandingPackage />
      </section>
      <section className="landing-bucket-list py-40 bg-gray50">
        <LandingBucketList />
      </section>
      <section className="landing-blog py-40 ">
        <LandingBlog />
      </section>
      <section className="landing-testimonial py-40 bg-gray50 ">
        {/* <LandingTestimonial /> */}
        <TestimonialNew />
      </section>
      <section className="py-40 ">
        <PaymentPartner />
      </section>
    </>
  );
}
