import { useQuery } from "@tanstack/react-query";

import urlNasaSearch from "../services/nasa";
import { NasaResponse, NasaSearchParams } from "../types";

export const useNasaQuery = (params: NasaSearchParams | undefined) => {
  const urlNasaSearchUrl = params ? urlNasaSearch(params) : "";

  // if params is empty then no request happens
  // if urlNasaSearchUrl changes then the results will get refetched
  return useQuery<NasaResponse>(
    ["nasaSearch", urlNasaSearchUrl],
    () => fetch(urlNasaSearchUrl).then((res) => res.json()),
    { enabled: !!params }
  );
};

export default useNasaQuery;
