import "./globals.css";
import { Montserrat, DM_Serif_Text } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { SITE } from "@/data/site";

const sans = Montserrat({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const serif = DM_Serif_Text({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-serif",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | ${SITE.legalName}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "merchant navy college",
    "marine engineering",
    "nautical science",
    "DNS",
    "ETO",
    "Pune",
  ],
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico", apple: "/logo192.png" },
};

export const viewport = { themeColor: "#0a2540" };

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollegeOrUniversity",
  name: SITE.legalName,
  alternateName: SITE.name,
  url: SITE.url,
  logo: `${SITE.url}/logo512.png`,
  description: SITE.description,
  telephone: SITE.phone,
  email: SITE.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.city,
    addressRegion: SITE.address.region,
    postalCode: SITE.address.postalCode,
    addressCountry: SITE.address.country,
  },
  sameAs: [SITE.social.facebook, SITE.social.instagram],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body>
        <JsonLd data={orgJsonLd} />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
