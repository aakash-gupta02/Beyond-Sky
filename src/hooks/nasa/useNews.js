"use client";
import { useQuery } from "@tanstack/react-query";

export function useNews(page = 1, pageSize = 10) {
  return useQuery({
    queryKey: ["news", page, pageSize], // cache per page
    queryFn: async () => {
      const res = await fetch(`/api/nasa/news?page=${page}&pageSize=${pageSize}`);
      if (!res.ok) throw new Error("Failed to fetch News");
      return res.json();
    },
    keepPreviousData: true, // smooth pagination
    staleTime: 1000 * 60 * 60, // 1 hour cache
  });
}
