import { Box } from "@cruk/cruk-react-components";
import { NasaResponse } from "../../types";
import DataItem from "./DataItem";

export const Results = ({
  nasaData,
}: {
  nasaData: NasaResponse | undefined;
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
    <Box>
      {items?.map((item) => {
        // const href = item?.href;
        return <DataItem data={item?.data?.[0]} />;
      })}
    </Box>
  );
};

export default Results;
