import { NextResponse } from "next/server";

export async function POST(request) {
  const data = await request.json();

  if (!data?.name || !data?.email) {
    return NextResponse.json({ error: "Name and email are required." }, { status: 400 });
  }

  // TODO: save to a database, or forward to email / CRM / headless CMS.
  console.log("New enquiry:", data);

  return NextResponse.json({ ok: true });
}
