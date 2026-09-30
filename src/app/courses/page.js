import Section from "@/components/Section";
import CourseCard from "@/components/CourseCard";
import { courses } from "@/data/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Courses",
  description: "Explore our maritime programs.",
  path: "/courses",
});

export default function CoursesPage() {
  return (
    <Section eyebrow="Programs" title="Courses We Offer">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {courses.map((c) => (
          <CourseCard key={c.slug} course={c} />
        ))}
      </div>
    </Section>
  );
}
