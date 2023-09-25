import React, { useState } from "react";
import { DataType } from "../../types";
import { Box, Button, Text } from "@cruk/cruk-react-components";
import { StyledBadge, StyledResultsBox } from "./styles";

const MAX_DESCRIPTION = 500;

const DataItem = ({ data }: { data: DataType | undefined }) => {
  const [showMore, setShowMore] = useState(false);

  const keywords = data?.keywords?.[0]
    ?.split(",")
    .map((word) => <StyledBadge>{word}</StyledBadge>);

  const Description = () => {
    if (showMore) {
      return data?.description;
    } else {
      return `${data?.description?.substring(0, MAX_DESCRIPTION)}`;
    }
  };

  const toggleShowMore = () => {
    setShowMore((current) => !current);
  };

  const ToggleDescriptionLengthBtns = (): JSX.Element => {
    return (
      <Button size="m" appearance="tertiary" onClick={toggleShowMore}>
        {showMore ? "...see less" : "...see more"}
      </Button>
    );
  };

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
          <Description />
          {data?.description && data?.description.length >= MAX_DESCRIPTION ? (
            <ToggleDescriptionLengthBtns />
          ) : null}
        </Text>
      </StyledResultsBox>
    </Box>
  );
};

export default DataItem;
