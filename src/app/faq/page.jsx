import Faq from "@/components/pages/FaqPage";

export async function generateMetadata(parent) {
  // fetch data
  const data = await fetch(`https://admin.gyaniholidays.com/api/faqs`).then(
    (res) => res.json()
  );
  return {
    title:
      data?.data?.faq_seo_title || "Frequently Asked Questions | Flights Gyani",
    description: data?.data?.faq_seo_description || " ",
  };
}

export default function Page() {
  return <Faq />;
}
