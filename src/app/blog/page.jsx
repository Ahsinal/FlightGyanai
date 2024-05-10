import Blog from "@/components/pages/BlogPage";

export async function generateMetadata(parent) {
  // fetch data
  const data = await fetch(`https://admin.gyaniholidays.com/api/settings`).then(
    (res) => res.json()
  );
  return {
    title: data.data.blogs_seo_title
      ? data.data.blogs_seo_title
      : "Blogs | Flights Gyani",
    description: data.data.blogs_seo_description,
  };
}

export default function Page() {
  return <Blog />;
}
