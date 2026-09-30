import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { SITE, navLinks } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white/80">
      <div className="container-x grid gap-8 py-12 md:grid-cols-3">
        <div>
          <h3 className="font-serif text-lg text-white">{SITE.name}</h3>
          <p className="mt-2 text-sm">{SITE.legalName}</p>
        </div>
        <div>
          <h4 className="mb-3 font-semibold text-white">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-gold">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-semibold text-white">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex gap-2">
              <MapPin className="h-4 w-4 text-gold" />
              {SITE.address.street}, {SITE.address.city}
            </li>
            <li className="flex gap-2">
              <Phone className="h-4 w-4 text-gold" />
              {SITE.phone}
            </li>
            <li className="flex gap-2">
              <Mail className="h-4 w-4 text-gold" />
              {SITE.email}
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs">
        © {new Date().getFullYear()} {SITE.name}. All rights reserved.
      </div>
    </footer>
  );
}
