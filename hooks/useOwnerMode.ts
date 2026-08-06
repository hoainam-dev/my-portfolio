"use client";

import { useCallback, useEffect, useState } from "react";

export function useOwnerMode() {
  const [unlocked, setUnlocked] = useState(false);
  const [ready, setReady] = useState(false);

  const refreshStatus = useCallback(async () => {
    try {
      const res = await fetch("/api/owner/status", { cache: "no-store" });
      const data = (await res.json()) as { unlocked?: boolean };
      setUnlocked(Boolean(data.unlocked));
    } catch {
      setUnlocked(false);
    } finally {
      setReady(true);
    }
  }, []);

  useEffect(() => {
    let cancelled = false;

    const bootstrap = async () => {
      const params = new URLSearchParams(window.location.search);
      const key = params.get("owner")?.trim();

      if (key) {
        try {
          await fetch("/api/owner/unlock", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ key }),
          });
        } catch {
          // ignore network errors; status check below still runs
        }

        params.delete("owner");
        const next = `${window.location.pathname}${params.toString() ? `?${params}` : ""}${window.location.hash}`;
        window.history.replaceState({}, "", next);
      }

      if (!cancelled) {
        await refreshStatus();
      }
    };

    void bootstrap();
    return () => {
      cancelled = true;
    };
  }, [refreshStatus]);

  const lock = useCallback(async () => {
    try {
      await fetch("/api/owner/lock", { method: "POST" });
    } finally {
      setUnlocked(false);
    }
  }, []);

  return {
    ready,
    isOwner: unlocked,
    lock,
    refreshStatus,
  };
}
