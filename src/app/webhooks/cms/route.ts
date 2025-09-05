// src/app/webhooks/cms/route.ts
import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function POST(request: Request) {
  const payload = await request.json();

  if (!payload.slug) {
    if (payload.event === "trigger-test") {
      return new Response(JSON.stringify({ message: "Test trigger received" }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }
    return new Response(JSON.stringify({ message: "Slug not found in payload", payload }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  // Revalidation logic...
  await revalidatePath(`/blog/${payload.slug}`);
  return new Response(JSON.stringify({ message: `Revalidation triggered for slug: ${payload.slug}` }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

