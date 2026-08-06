import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { OWNER_COOKIE, isValidOwnerToken } from "@/lib/owner";

export async function GET() {
  const jar = await cookies();
  const token = jar.get(OWNER_COOKIE)?.value;
  return NextResponse.json({ unlocked: isValidOwnerToken(token) });
}
