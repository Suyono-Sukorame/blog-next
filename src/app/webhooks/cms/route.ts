import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    console.log("payload", payload);

    // Proses payload sesuai kebutuhan...
    
    // Kembalikan 200 OK
    return NextResponse.json({ message: "Webhook received" }, { status: 200 });
    
    // Atau jika tidak perlu body:
    // return NextResponse.json(null, { status: 204 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
