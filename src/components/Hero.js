import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#123a63,transparent_60%)]" />
      <div className="container-x relative flex min-h-[80vh] flex-col justify-center py-20">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-gold">
          NAAC A Grade · DG Shipping Approved
        </p>
        <h1 className="max-w-3xl font-serif text-4xl font-bold leading-tight md:text-6xl">
          Launch Your Career on the High Seas
        </h1>
        <p className="mt-6 max-w-xl text-lg text-white/80">
          A premier merchant navy college in Pune — B.Tech Marine Engineering, B.Sc
          Nautical Science, DNS and ETO with 100% placement assistance.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link href="/admissions" className="btn btn-gold">
            Apply Now <ArrowRight className="h-5 w-5" />
          </Link>
          <Link href="/courses" className="btn btn-outline">
            Explore Courses
          </Link>
        </div>
      </div>
    </section>
  );
}
