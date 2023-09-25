import { useQuery } from "@tanstack/react-query";
import { NasaResponse } from "../types";

export const useNasaMedia = (href: string | undefined) => {
  const headers = {
    Authentication: `Bearer ${process.env.NEXT_PUBLIC_NASA_API_KEY}`,
    "Content-Type": "application/json",
  };

  return useQuery<NasaResponse>(
    ["nasaMedia", href],
    () =>
      fetch(href as string, {
        method: "GET",
        headers: headers,
      }).then((res) => res.json()),
    { enabled: !!href },
  );
};

export default useNasaMedia;
