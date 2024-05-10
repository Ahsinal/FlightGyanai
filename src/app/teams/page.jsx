
import OurTeams from "@/components/pages/TeamsPage";

export async function generateMetadata(parent) {
  // fetch data
  const data = await fetch(`https://admin.gyaniholidays.com/api/ourteams`).then(
    (res) => res.json()
  );
  return {
    title: data.data.teams_seo_title
      ? data.data.teams_seo_title
      : "Our Teams | AR Education Consultancy",
    description: data.data.teams_seo_description || "",
  };
}

export default function Page() {
  return <OurTeams />;
}
