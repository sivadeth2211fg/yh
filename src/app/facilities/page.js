import Section from "@/components/Section";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({ title: "Facilities", path: "/facilities" });

export default function FacilitiesPage() {
  return (
    <Section eyebrow="Campus" title="Infrastructure & Hostel">
      <div className="mx-auto max-w-2xl text-navy-light/80">
        <p>Replace this with details on labs, simulators, hostel, and campus facilities.</p>
      </div>
    </Section>
  );
}
