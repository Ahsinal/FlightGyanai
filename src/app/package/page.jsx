import Package from "@/components/pages/PackagePage";


export async function generateMetadata(parent) {
  // fetch data
  const data = await fetch(`https://admin.gyaniholidays.com/api/packages`).then(
    (res) => res.json()
  );
  return {
    title:  "Packages | Flights Gyani",
    description: data.data.package_seo_description || "",
  };
}

export default function Page() {
  return <Package />;
}
