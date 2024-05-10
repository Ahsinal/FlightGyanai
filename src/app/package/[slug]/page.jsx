import PackageDetail from "@/components/pages/PackageDetailPage";


export async function generateMetadata({ params, searchParams }, parent) {
  // fetch data
  const data = await fetch(
    `https://admin.gyaniholidays.com/api/package/${params.slug}`
  ).then((res) => res.json());
  return {
    title:
      // `${data?.data?.seo_title } | Flights Gyani`||
      `${data?.data?.name || "404 Error"} | Flights Gyani` ||
      "404 Error | Flights Gyani",
    description: data?.data?.seo_description,
  };
}

export default function Page({ params, searchParams }) {
  return <PackageDetail params={params} />;
}
