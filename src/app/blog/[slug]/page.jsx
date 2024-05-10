import BlogDetail from "@/components/pages/BlogDetailPage";

export async function generateMetadata({ params, searchParams }, parent) {
  // fetch data
  const data = await fetch(
    `https://admin.gyaniholidays.com/api/blog/${params.slug}`
  ).then((res) => res.json());
  return {
    title:
      data?.data?.seo_title || data?.data?.title
        ? data?.data?.seo_title || `${data?.data?.title} | Flights Gyani`
        : "",
    description: data?.data?.seo_description || "",
  };
}

export default function Page({ params, searchParams }) {
  return <BlogDetail params={params} />;
}
