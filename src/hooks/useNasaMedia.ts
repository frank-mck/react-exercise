import { useQuery } from "@tanstack/react-query";

export const useNasaMedia = (href: string | undefined) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    Authentication: `Bearer ${process.env.NEXT_PUBLIC_NASA_API_KEY}`,
    "Content-Type": "application/json",
  };

  return useQuery<string[]>(
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
