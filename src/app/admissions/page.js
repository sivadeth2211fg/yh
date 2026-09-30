import Section from "@/components/Section";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({ title: "Admissions", path: "/admissions" });

export default function AdmissionsPage() {
  return (
    <Section eyebrow="Join us" title="Admissions & Fee Structure">
      <div className="mx-auto max-w-2xl text-navy-light/80">
        <p>Replace this with eligibility, the admission process, fees, and important dates.</p>
      </div>
    </Section>
  );
}
