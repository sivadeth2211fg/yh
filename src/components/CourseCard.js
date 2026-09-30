import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import Card from "./Card";

export default function CourseCard({ course }) {
  return (
    <Card className="flex flex-col">
      <span className="inline-flex w-fit items-center gap-1 rounded-full bg-navy/5 px-3 py-1 text-xs font-medium text-navy">
        <Clock className="h-3 w-3" /> {course.duration}
      </span>
      <h3 className="mt-4 font-serif text-xl font-bold text-navy">{course.title}</h3>
      <p className="mt-2 flex-1 text-sm text-navy-light/80">{course.summary}</p>
      <Link
        href={`/courses/${course.slug}`}
        className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-gold-dark hover:gap-2"
      >
        Learn more <ArrowRight className="h-4 w-4" />
      </Link>
    </Card>
  );
}
