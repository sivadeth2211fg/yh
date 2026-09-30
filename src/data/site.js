// src/data/site.js — single source of content; swap for a CMS/API later.

export const SITE = {
  name: "MANET Pune", // <-- your name
  legalName: "Maharashtra Academy of Naval Education and Training",
  url: "https://www.example.edu.in", // <-- your real domain
  description:
    "DG Shipping approved merchant navy college offering B.Tech Marine Engineering, B.Sc Nautical Science, DNS and ETO courses.",
  ogImage: "/og-image.jpg",
  phone: "+91-20-30273600",
  email: "info@example.edu.in",
  address: {
    street: "MIT Campus, Loni Kalbhor",
    city: "Pune",
    region: "Maharashtra",
    postalCode: "412201",
    country: "IN",
  },
  social: {
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
  },
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Courses", href: "/courses" },
  { label: "Admissions", href: "/admissions" },
  { label: "Placements", href: "/placements" },
  { label: "Facilities", href: "/facilities" },
  { label: "Contact", href: "/contact" },
];

export const courses = [
  {
    slug: "btech-marine-engineering",
    title: "B.Tech Marine Engineering",
    duration: "4 Years",
    summary:
      "Design, operate and maintain the machinery that powers modern ships.",
    highlights: ["DG Shipping approved", "University affiliated", "Onboard training"],
  },
  {
    slug: "bsc-nautical-science",
    title: "B.Sc Nautical Science",
    duration: "3 Years",
    summary: "Train to navigate and command merchant vessels across the world.",
    highlights: ["Deck cadet pathway", "Simulator training", "100% placement assistance"],
  },
  {
    slug: "dns",
    title: "Diploma in Nautical Science (DNS)",
    duration: "1 Year",
    summary: "A fast-track entry into the merchant navy as a deck cadet.",
    highlights: ["1-year residential", "Sponsorship support", "IMU CET based"],
  },
  {
    slug: "eto",
    title: "Electro Technical Officer (ETO)",
    duration: "4 Months",
    summary: "Specialise in the electrical and electronic systems on board ships.",
    highlights: ["Short duration", "High-demand role", "Hands-on labs"],
  },
];

export const highlights = [
  { value: "30+", label: "Recruiters on board" },
  { value: "3500+", label: "Alumni placed worldwide" },
  { value: "100%", label: "Placement assistance" },
  { value: "A", label: "NAAC grade" },
];

export const placementStats = [
  { year: "2021", placed: 210 },
  { year: "2022", placed: 265 },
  { year: "2023", placed: 320 },
  { year: "2024", placed: 380 },
];
