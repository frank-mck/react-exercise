import { Box } from "@cruk/cruk-react-components";
import { NasaResponse, NasaSearchParams } from "../../types";
import DataItem from "./DataItem";
import useNasaMedia from "../../hooks/useNasaMedia";
import Media from "./Media";

export const Results = ({
  nasaData,
  nasaSearchParams,
}: {
  nasaData: NasaResponse | undefined;
  nasaSearchParams: NasaSearchParams;
}) => {
  stringifyData();
  const items = nasaData?.collection?.items;

  function stringifyData() {
    const jsonData = JSON.stringify(nasaData);

    try {
      return JSON.parse(jsonData);
    } catch (error) {
      console.error("Invalid JSON:", error);
    }
  }

  return (
    <Box paddingBottom="m" marginBottom="xl">
      {items?.map((item, index) => {
        const { data: nasaMedia } = useNasaMedia(item?.href);

        const data = item?.data?.[0];

        return (
          <DataItem
            media={
              <Media type={nasaSearchParams.mediaType} nasaMedia={nasaMedia} />
            }
            key={`${data?.date_created}${index}`}
            data={data}
          />
        );
      })}
    </Box>
  );
};

export default Results;
