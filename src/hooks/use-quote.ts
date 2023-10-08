import { useQuery } from "@tanstack/react-query";
import { Quote } from "../types/quote";

function useQuote() {
  return useQuery({
    queryKey: ["quote"],
    queryFn: async (): Promise<Quote> => {
      const response = await fetch("https://api.quotable.io/random");
      if (response.ok) {
        return response.json();
      }
      throw new Error("Failed to fetch quote.");
    },
    refetchOnWindowFocus: false,
  });
}

export default useQuote;
