
import Header from "@/components/Header";
import "./globals.scss"
import { Providers } from "../../frontend/providers";
import Footer from "@/components/Footer";

export async function generateMetadata(parent) {
  // fetch data
  const data = await fetch(`https://admin.gyaniholidays.com/api/settings`).then(
    (res) => res.json()
  );
  return {
    title: data.data.homepage_seo_title ? data.data.homepage_seo_title : "Flights Gyani",
    description: data.data.homepage_seo_description,
  };
}

export default function RootLayout({ children }) {
  return (
    <Providers>
      <html lang="en">
        <body>
          <Header />
          <main>
            {children}
          </main>
          <Footer />
        </body>
      </html>
    </Providers>
  );
}
