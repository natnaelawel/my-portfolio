import { NextRequest, NextResponse } from "next/server";

export async function GET(request: Request) {
    const { name = "World" } = await request.json();
    return NextResponse.json({ message: `Hello, ${name}!` });
}
