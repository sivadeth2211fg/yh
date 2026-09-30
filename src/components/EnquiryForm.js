"use client";

import { useState } from "react";

export default function EnquiryForm() {
  const [status, setStatus] = useState("idle");

  async function onSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    const payload = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      setStatus(res.ok ? "sent" : "error");
      if (res.ok) e.target.reset();
    } catch {
      setStatus("error");
    }
  }

  const field = "w-full rounded-lg border border-navy/15 px-4 py-3";

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <input name="name" required placeholder="Full name" className={field} />
      <input name="email" type="email" required placeholder="Email" className={field} />
      <input name="phone" placeholder="Phone" className={field} />
      <select name="course" className={field} defaultValue="">
        <option value="">Interested course…</option>
        <option>B.Tech Marine Engineering</option>
        <option>B.Sc Nautical Science</option>
        <option>DNS</option>
        <option>ETO</option>
      </select>
      <textarea name="message" rows={4} placeholder="Message" className={field} />
      <button disabled={status === "sending"} className="btn btn-gold w-full justify-center">
        {status === "sending" ? "Sending…" : "Submit Enquiry"}
      </button>
      {status === "sent" && <p className="text-green-600">Thanks! We&apos;ll be in touch soon.</p>}
      {status === "error" && <p className="text-red-600">Something went wrong. Please try again.</p>}
    </form>
  );
}
