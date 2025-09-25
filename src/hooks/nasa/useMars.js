"use client";
import { useQuery } from "@tanstack/react-query";

export function useMars(page = 1) {
  return useQuery({
    queryKey: ["mars", page], // cache per page
    queryFn: async () => {
      const res = await fetch(`/api/nasa/mars?sol=3000&page=${page}`);
      if (!res.ok) throw new Error("Failed to fetch Mars data");
      return res.json();
    },
    keepPreviousData: true, // smooth pagination
    staleTime: 1000 * 60 * 60, // 1 hour cache
  });
}
