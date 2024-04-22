"use client";
import Card from "@/components/cards/Card";
import LandingAbout from "@/components/layouts/LandingAbout";
import LandingBanner from "@/components/layouts/LandingBanner";
import LandingBlog from "@/components/layouts/LandingBlog";
import LandingBucketList from "@/components/layouts/LandingAllPackageList";
import LandingPackage from "@/components/layouts/LandingPackage";
import LandingTestimonial from "@/components/layouts/LandingTestimonial";
import PaymentPartner from "@/components/layouts/PaymentPartner";
import TestimonialSection from "@/components/layouts/TestimonialSection";
export default function Home() {
  return (
    <>
      <section className="landing-banner">
        <LandingBanner />
      </section>
      <section className="py-40 landing-package">
        <LandingPackage />
      </section>
      <section className="landing-bucket-list py-40">
        <LandingBucketList />
      </section>
      <section className="landing-blog py-40">
        <LandingBlog />
      </section>
      <section className="landing-testimonial py-40 bg-gray50">
        {/* <LandingTestimonial /> */}
        <TestimonialSection/>
      </section>
      <section className="py-40 ">
        <PaymentPartner />
      </section>
    </>
  );
}
