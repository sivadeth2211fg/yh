import { SITE } from "@/data/site";

export function pageMeta({ title, description, path = "/" }) {
  const url = SITE.url + path;
  const desc = description || SITE.description;
  return {
    title,
    description: desc,
    alternates: { canonical: url },
    openGraph: {
      title,
      description: desc,
      url,
      siteName: SITE.name,
      type: "website",
      locale: "en_IN",
      images: [{ url: SITE.ogImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: desc,
      images: [SITE.ogImage],
    },
  };
}
