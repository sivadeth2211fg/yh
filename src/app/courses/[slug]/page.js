import { notFound } from "next/navigation";
import { CheckCircle } from "lucide-react";
import Section from "@/components/Section";
import JsonLd from "@/components/JsonLd";
import { courses, SITE } from "@/data/site";
import { pageMeta } from "@/lib/seo";

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const course = courses.find((c) => c.slug === slug);
  return course
    ? pageMeta({ title: course.title, description: course.summary, path: `/courses/${slug}` })
    : {};
}

export default async function CoursePage({ params }) {
  const { slug } = await params;
  const course = courses.find((c) => c.slug === slug);
  if (!course) notFound();

  const courseJsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.summary,
    provider: { "@type": "CollegeOrUniversity", name: SITE.name, sameAs: SITE.url },
  };

  return (
    <>
      <JsonLd data={courseJsonLd} />
      <Section eyebrow={course.duration} title={course.title}>
        <div className="mx-auto max-w-2xl">
          <p className="text-lg text-navy-light/80">{course.summary}</p>
          <ul className="mt-6 space-y-3">
            {course.highlights.map((h) => (
              <li key={h} className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-gold-dark" /> {h}
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </>
  );
}
