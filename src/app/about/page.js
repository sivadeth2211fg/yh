import Section from "@/components/Section";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({ title: "About", path: "/about" });

export default function AboutPage() {
  return (
    <Section eyebrow="Who we are" title="About the Academy">
      <div className="mx-auto max-w-2xl text-navy-light/80">
        <p>Replace this with your institution&apos;s story, vision, and approvals.</p>
      </div>
    </Section>
  );
}
