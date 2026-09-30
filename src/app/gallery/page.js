import Section from "@/components/Section";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({ title: "Gallery", path: "/gallery" });

export default function GalleryPage() {
  return (
    <Section eyebrow="Life on campus" title="Gallery">
      <div className="mx-auto max-w-2xl text-navy-light/80">
        <p>Replace this with a photo grid of campus, events, and training.</p>
      </div>
    </Section>
  );
}
