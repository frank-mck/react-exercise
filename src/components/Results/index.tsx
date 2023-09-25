import { Box } from "@cruk/cruk-react-components";
import { NasaResponse, NasaSearchParams } from "../../types";
import DataItem from "./DataItem";
import useNasaMedia from "../../hooks/useNasaMedia";

export const Results = ({
  nasaData,
  nasaSearchParams,
}: {
  nasaData: NasaResponse | undefined;
  nasaSearchParams: NasaSearchParams;
}) => {
  stringifyData();
  const items = nasaData?.collection?.items;
  const { data } = useNasaMedia(items?.[0]?.href)
console.log(data)
  function stringifyData() {
    const jsonData = JSON.stringify(nasaData);

    try {
      return JSON.parse(jsonData);
    } catch (error) {
      console.error("Invalid JSON:", error);
    }
  }

  return (
    <Box>
      {items?.map((item, index) => {
        const data = item?.data?.[0];
        const link = item?.links?.[0]?.href;

        return <DataItem key={`${data?.date_created}${index}`} data={data} imageUrl={link} />;
      })}
    </Box>
  );
};

export default Results;
