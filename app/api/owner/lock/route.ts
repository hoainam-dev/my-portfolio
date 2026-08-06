import { NextResponse } from "next/server";
import { OWNER_COOKIE } from "@/lib/owner";

export async function POST() {
  const response = NextResponse.json({ ok: true, unlocked: false });
  response.cookies.set({
    name: OWNER_COOKIE,
    value: "",
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 0,
  });
  return response;
}
