import { useQuery } from "@tanstack/react-query";
import { Quote } from "../types/quote";

function useQuote(id?: string) {
  return useQuery({
    queryKey: ["quote", id],
    queryFn: async (): Promise<Quote> => {
      const path = id ? `quotes/${id}` : "random";
      const response = await fetch(`https://api.quotable.io/${path}`);
      if (response.ok) {
        return response.json();
      }
      throw new Error("Failed to fetch quote.");
    },
    refetchOnWindowFocus: false,
  });
}

export default useQuote;
