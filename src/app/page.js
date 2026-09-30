import Hero from "@/components/Hero";
import Section from "@/components/Section";
import CourseCard from "@/components/CourseCard";
import StatsChart from "@/components/StatsChart";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import { courses, highlights } from "@/data/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Merchant Navy College in Pune",
  description:
    "NAAC A Grade, DG Shipping approved college offering B.Tech Marine Engineering, B.Sc Nautical Science, DNS and ETO.",
  path: "/",
});

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What courses are offered?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "B.Tech Marine Engineering, B.Sc Nautical Science, DNS and ETO.",
      },
    },
    {
      "@type": "Question",
      name: "Is the college DG Shipping approved?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, approved by the Directorate General of Shipping.",
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqJsonLd} />
      <Hero />

      <div className="bg-navy-dark py-10 text-white">
        <div className="container-x grid grid-cols-2 gap-6 md:grid-cols-4">
          {highlights.map((h) => (
            <div key={h.label} className="text-center">
              <p className="font-serif text-3xl font-bold text-gold md:text-4xl">{h.value}</p>
              <p className="mt-1 text-sm text-white/70">{h.label}</p>
            </div>
          ))}
        </div>
      </div>

      <Section
        eyebrow="Programs"
        title="Our Courses"
        subtitle="DG Shipping approved maritime programs with global career pathways."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {courses.map((c, i) => (
            <Reveal key={c.slug} delay={i * 0.08}>
              <CourseCard course={c} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section eyebrow="Outcomes" title="Placement Track Record" className="bg-slate-50">
        <Reveal>
          <StatsChart />
        </Reveal>
      </Section>
    </>
  );
}
