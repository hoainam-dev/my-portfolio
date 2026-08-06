import { NextResponse } from "next/server";
import { OWNER_COOKIE, getOwnerUnlockKey, isValidOwnerKey, ownerTokenFromKey } from "@/lib/owner";

export async function POST(request: Request) {
  const expectedKey = getOwnerUnlockKey();
  if (!expectedKey) {
    return NextResponse.json(
      { ok: false, message: "OWNER_KEY is not configured." },
      { status: 503 },
    );
  }

  let key = "";
  try {
    const body = (await request.json()) as { key?: string };
    key = body.key?.trim() ?? "";
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid request body." }, { status: 400 });
  }

  if (!isValidOwnerKey(key)) {
    return NextResponse.json({ ok: false, message: "Invalid unlock key." }, { status: 401 });
  }

  const response = NextResponse.json({ ok: true, unlocked: true });
  response.cookies.set({
    name: OWNER_COOKIE,
    value: ownerTokenFromKey(expectedKey),
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 365, // 1 year
  });

  return response;
}
