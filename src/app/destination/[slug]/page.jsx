import DestinationPage from "@/components/pages/DestinationSlug";

export async function generateMetadata({ params }) {
  // fetch data
  const data = await fetch(
    `https://admin.gyaniholidays.com/api/destination/${params.slug}`
  ).then((res) => res.json());
  return {
    title: "Destinations | Flight Gyani",
    description: data?.data?.seo_description || data?.data?.short_description,
  };
}

export default function Page({ params }) {
  return <DestinationPage params={params} />;
}
