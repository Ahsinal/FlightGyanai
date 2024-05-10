import AboutPage from "@/components/pages/AboutPage";

export async function generateMetadata(parent) {
  // fetch data
  const data = await fetch(`https://admin.gyaniholidays.com/api/settings`).then(
    (res) => res.json()
  );
  return {
    title: data.data.about_seo_title
      ? data.data.about_seo_title
      : "About Us | Flights Gyani",
    description: data.data.homepage_seo_description,
  };
}

export default function Page() {
  return <AboutPage />;
}
