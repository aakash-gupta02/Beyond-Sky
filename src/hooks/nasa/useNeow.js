"use client";
import { useQuery } from "@tanstack/react-query";

export function useNeow() {
  return useQuery({
    queryKey: ["neow"],
    queryFn: async () => {
      const res = await fetch("/api/nasa/neow");
      if (!res.ok) throw new Error("Failed to fetch NEOs");
      return res.json();
    },
    staleTime: 1000 * 60 * 60, // 1 hour cache
  });
}
