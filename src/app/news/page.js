import Section from "@/components/Section";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({ title: "News & Notices", path: "/news" });

export default function NewsPage() {
  return (
    <Section eyebrow="Updates" title="News, Notices & Events">
      <div className="mx-auto max-w-2xl text-navy-light/80">
        <p>Replace this with announcements, notices, and event updates.</p>
      </div>
    </Section>
  );
}
