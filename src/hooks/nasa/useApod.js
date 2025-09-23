"use client";
import { useQuery } from "@tanstack/react-query";

export function useApod() {
  return useQuery({
    queryKey: ["apod"],
    queryFn: async () => {
      const res = await fetch("/api/nasa/apod");
      if (!res.ok) throw new Error("Failed to fetch APOD");
      return res.json();
    },
    staleTime: 1000 * 60 * 60, // 1 hour cache
  });
}
