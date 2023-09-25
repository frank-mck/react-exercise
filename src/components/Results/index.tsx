import { Badge, Box, Button, Text } from "@cruk/cruk-react-components";
import { DataType, ItemsType, NasaResponse } from "../../types";
import { StyledBadge, StyledResultsBox } from "./styles";

export const Results = ({
  nasaData,
}: {
  nasaData: NasaResponse | undefined;
}) => {
  stringifyData();
  const collection = nasaData?.collection;
  const items = collection?.items;

  function stringifyData() {
    const jsonData = JSON.stringify(nasaData);

    try {
      return JSON.parse(jsonData);
    } catch (error) {
      console.error("Invalid JSON:", error);
    }
  }

  const keyWords = (data: string[] | undefined) => {
    return data?.map((word) => {
      return <Badge>{word}</Badge>;
    });
  };

  return (
    <Box>
      {items?.map((item) => {
        const data = item?.data?.[0];
        let showMore = false;

        const keywords = data?.keywords?.[0]
          ?.split(",")
          .map((word) => <StyledBadge>{word}</StyledBadge>);

        // const href = item?.href;
        console.log(data);
        return (
          <Box key={data?.nasa_id} backgroundColor="#F0F0F0">
            <StyledResultsBox margin="none">
              <Text margin="none" textSize="xxl">
                {data?.title}
              </Text>
              <Box margin="none">{keywords}</Box>
            </StyledResultsBox>

            <Text textSize="l">
              {data?.center ? data?.center : "Center unknown"}:{" "}
              {data?.location ? data?.location : "Location unknown"}
            </Text>
            <StyledResultsBox>
              <Text textSize="m">
                {data?.description}

                {showMore
                  ? data?.description
                  : `${data?.description.substring(0, 200)} `}
                {data?.description?.length || (200 >= 200 && !showMore) ? (
                  <button onClick={() => (showMore = true)}>...see more</button>
                ) : (
                  ""
                )}
              </Text>
            </StyledResultsBox>
          </Box>
        );
      })}
    </Box>
  );
};

export default Results;
