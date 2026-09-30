import Section from "@/components/Section";
import EnquiryForm from "@/components/EnquiryForm";
import { MapPin, Phone, Mail } from "lucide-react";
import { SITE } from "@/data/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({ title: "Contact", path: "/contact" });

export default function ContactPage() {
  return (
    <Section eyebrow="Get in touch" title="Contact Us">
      <div className="grid gap-10 md:grid-cols-2">
        <div className="space-y-4 text-navy-light/90">
          <p className="flex gap-2">
            <MapPin className="text-gold-dark" /> {SITE.address.street}, {SITE.address.city},{" "}
            {SITE.address.region} {SITE.address.postalCode}
          </p>
          <p className="flex gap-2">
            <Phone className="text-gold-dark" /> {SITE.phone}
          </p>
          <p className="flex gap-2">
            <Mail className="text-gold-dark" /> {SITE.email}
          </p>
        </div>
        <EnquiryForm />
      </div>
    </Section>
  );
}
