"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Anchor } from "lucide-react";
import { navLinks, SITE } from "@/data/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-navy text-white shadow-md">
      <nav className="container-x flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-serif text-xl font-bold">
          <Anchor className="h-6 w-6 text-gold" /> {SITE.name}
        </Link>

        <ul className="hidden items-center gap-6 md:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="text-sm font-medium text-white/90 hover:text-gold">
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/admissions" className="btn btn-gold py-2 text-sm">
              Apply Now
            </Link>
          </li>
        </ul>

        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <ul className="space-y-1 bg-navy-light px-4 pb-4 md:hidden">
          {navLinks.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-white/90 hover:text-gold"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
