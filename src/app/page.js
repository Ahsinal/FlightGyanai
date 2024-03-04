import LandingAbout from "@/components/layouts/LandingAbout";
import LandingBanner from "@/components/layouts/LandingBanner";
import LandingPackage from "@/components/layouts/LandingPackage";

export default function Home() {
  return (
    <>
      <section className="landing-banner">
        <LandingBanner />
      </section>
      <section className="landing-about py-40">
        <LandingAbout />
      </section>
      <section className="py-40 landing-package">
        <LandingPackage />
      </section>
    </>
  );
}
