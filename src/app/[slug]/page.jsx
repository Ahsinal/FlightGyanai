import SlugPages from "@/components/pages/SlugPage";
export async function generateMetadata({ params }) {
  // fetch data
  const data = await fetch(
    `https://admin.gyaniholidays.com/api/page/${params.slug}`
  ).then((res) => res.json());
  return {
    // Construct title: use seo_title if available, otherwise fallback to title instead of ? ternary use || cuz ? throws undefined error when slug isnot found
    title:
      data?.data?.seo_title ||
      `${data?.data?.title || "404 Error"} | Flights Gyani` ||
      "Flights Gyani",
    description: data?.data?.seo_description || "",
  };
}

export default function Page({ params }) {
  return <SlugPages params={params} />;
}
