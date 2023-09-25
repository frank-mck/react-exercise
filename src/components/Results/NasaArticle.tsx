import React, { useState } from "react";
import { DataType } from "../../types";
import { Box, Button, Heading, Text } from "@cruk/cruk-react-components";
import {
  StyledBadge,
  GridColumnWrapper,
  JustifiedBetweenWrapper,
} from "./styles";

const MAX_DESCRIPTION_LENGTH = 600;

const NasaArticle = ({
  media,
  data,
}: {
  media: JSX.Element;
  data: DataType | undefined;
}) => {
  const [showMore, setShowMore] = useState(false);

  const keywords = data?.keywords?.[0]
    ?.split(",")
    .map((word, index) => (
      <StyledBadge key={`${media}${index}`}>{word}</StyledBadge>
    ));

  const toggleShowMore = () => {
    setShowMore((current) => !current);
  };

  const Description = () => {
    if (showMore) {
      return data?.description;
    } else {
      return `${data?.description?.substring(0, MAX_DESCRIPTION_LENGTH)}`;
    }
  };

  const ToggleDescriptionLengthBtn = (): JSX.Element => {
    return (
      <Button size="m" appearance="tertiary" onClick={toggleShowMore}>
        {showMore ? "...see less" : "...see more"}
      </Button>
    );
  };

  return (
    <Box key={data?.nasa_id} backgroundColor="#F0F0F0">
      <JustifiedBetweenWrapper margin="none">
        <Heading h2 margin="none">
          {data?.title}
        </Heading>
        <Box margin="none">{keywords}</Box>
      </JustifiedBetweenWrapper>

      <Text textSize="l">
        {data?.center ? data?.center : "Center unknown"}:{" "}
        {data?.location ? data?.location : "Location unknown"}
      </Text>
      <GridColumnWrapper padding="none" margin="none">
        {media}
        <Text textSize="m">
          <Description />
          {data?.description &&
          data?.description.length >= MAX_DESCRIPTION_LENGTH ? (
            <ToggleDescriptionLengthBtn />
          ) : null}
        </Text>
      </GridColumnWrapper>
    </Box>
  );
};

export default NasaArticle;
