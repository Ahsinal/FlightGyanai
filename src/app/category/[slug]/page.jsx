import CategoryPage from "@/components/pages/CategorySlug";

export async function generateMetadata({ params, searchParams }, parent) {
  // fetch data
  const data = await fetch(
    `https://admin.gyaniholidays.com/api/categorywisepackage/${params.slug}`
  ).then((res) => res.json());
  return {
    title: "Categories | Flight Gyani",
    description: data?.data?.seo_description || data?.data?.short_description,
  };
}

export default function Page({ params, searchParams }) {
  return <CategoryPage params={params} />;
}
