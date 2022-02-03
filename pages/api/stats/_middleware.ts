import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  if (!process.env.TOKEN) throw new Error("Environment Invalid");

  if (req.headers.get("Token") === process.env.TOKEN)
    return new Response("Stat not counted", { status: 200 });

  NextResponse.next();
}
