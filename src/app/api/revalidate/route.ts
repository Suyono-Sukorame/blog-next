// src/app/api/revalidate/route.ts
import { NextRequest } from "next/server";
import { revalidatePath } from "next/cache";

export async function POST(request: NextRequest) {
  try {
    const { slug } = await request.json();

    if (!slug) {
      return new Response(JSON.stringify({ message: "Missing slug" }), { status: 400 });
    }

    // Revalidate halaman tertentu
    await revalidatePath(`/blog/${slug}`);

    return new Response(JSON.stringify({ message: "Revalidated successfully" }), { status: 200 });
  } catch (err) {
    console.error("Revalidate error:", err);
    return new Response(JSON.stringify({ message: "Error revalidating" }), { status: 500 });
  }
}

