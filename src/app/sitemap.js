import { courses, SITE } from "@/data/site";

export default function sitemap() {
  const routes = ["", "/about", "/courses", "/admissions", "/placements", "/facilities", "/contact"];
  const pages = routes.map((r) => ({
    url: `${SITE.url}${r}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: r === "" ? 1 : 0.7,
  }));
  const coursePages = courses.map((c) => ({
    url: `${SITE.url}/courses/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));
  return [...pages, ...coursePages];
}
