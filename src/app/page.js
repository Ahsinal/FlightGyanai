import Card from "@/components/cards/Card";
import LandingAbout from "@/components/layouts/LandingAbout";
import LandingBanner from "@/components/layouts/LandingBanner";
import LandingBlog from "@/components/layouts/LandingBlog";
import LandingBucketList from "@/components/layouts/LandingBucketList";
import LandingPackage from "@/components/layouts/LandingPackage";
import { FaArrowAltCircleLeft } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <section className="landing-banner">
        <LandingBanner />
      </section>
      <section className="landing-about pt-80 pb-40">
        <LandingAbout />
      </section>
      <section className="py-40 landing-package">
        <LandingPackage />
      </section>
      <section className="landing-bucket-list py-40">
        <LandingBucketList />
      </section>
      <section className="">
        <LandingBlog />
      </section>
    </>
  );
}
