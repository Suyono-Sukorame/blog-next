import { NextResponse } from "next/server";

import ( NextResponse )

export function GET() {
    return NextResponse.json({ hello: "world"});
}