import { createHash, timingSafeEqual } from "crypto";

export const OWNER_COOKIE = "portfolio_owner";

export function getOwnerUnlockKey(): string | undefined {
  const key = process.env.OWNER_KEY?.trim();
  return key || undefined;
}

export function ownerTokenFromKey(key: string): string {
  return createHash("sha256").update(`portfolio-owner:${key}`).digest("hex");
}

export function isValidOwnerKey(key: string | undefined | null): boolean {
  const expected = getOwnerUnlockKey();
  if (!expected || !key) return false;
  try {
    const a = Buffer.from(ownerTokenFromKey(key));
    const b = Buffer.from(ownerTokenFromKey(expected));
    return a.length === b.length && timingSafeEqual(a, b);
  } catch {
    return false;
  }
}

export function isValidOwnerToken(token: string | undefined | null): boolean {
  const expectedKey = getOwnerUnlockKey();
  if (!expectedKey || !token) return false;
  try {
    const a = Buffer.from(token);
    const b = Buffer.from(ownerTokenFromKey(expectedKey));
    return a.length === b.length && timingSafeEqual(a, b);
  } catch {
    return false;
  }
}
