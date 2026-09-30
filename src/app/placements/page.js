import Section from "@/components/Section";
import StatsChart from "@/components/StatsChart";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({ title: "Placements", path: "/placements" });

export default function PlacementsPage() {
  return (
    <Section eyebrow="Outcomes" title="Placements">
      <div className="mx-auto mb-10 max-w-2xl text-center text-navy-light/80">
        <p>Replace this with your recruiters, packages, and success stories.</p>
      </div>
      <StatsChart />
    </Section>
  );
}
