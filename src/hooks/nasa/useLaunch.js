"use client";
import { useQuery } from "@tanstack/react-query";

export function useLaunch() {
  return useQuery({
    queryKey: ["launch"],
    queryFn: async () => {
      const res = await fetch("/api/nasa/launch");
      if (!res.ok) throw new Error("Failed to fetch Launch");
      return res.json();
    },
    staleTime: 1000 * 60 * 60, // 1 hour cache
  });
}
