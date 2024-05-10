import ContactUs from "@/components/pages/ContactPage";

export async function generateMetadata(parent) {
  // fetch data
  const data = await fetch(`https://admin.gyaniholidays.com/api/settings`).then(
    (res) => res.json()
  );
  return {
    title: data.data.contactpage_seo_title
      ? data.data.contactpage_seo_title
      : "Contact Us | Flights Gyani",
    description: data.data.contactpage_seo_description,
  };
}

export default function Page() {
  return <ContactUs />;
}
