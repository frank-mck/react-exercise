import React, { useState } from "react";
import { DataType } from "../../types";
import { Box, Button, Heading, Text } from "@cruk/cruk-react-components";
import {
  StyledBadge,
  GidColumnWrapper,
  JustifiedBetweenWrapper,
} from "./styles";
import Image from "next/image";

const MAX_DESCRIPTION = 900;

const DataItem = ({
  data,
  imageUrl,
}: {
  data: DataType | undefined;
  imageUrl: string | undefined;
}) => {
  const [showMore, setShowMore] = useState(false);

  const keywords = data?.keywords?.[0]
    ?.split(",")
    .map((word, index) => (
      <StyledBadge key={`${imageUrl}${index}`}>{word}</StyledBadge>
    ));

  const toggleShowMore = () => {
    setShowMore((current) => !current);
  };

  const Description = () => {
    if (showMore) {
      return data?.description;
    } else {
      return `${data?.description?.substring(0, MAX_DESCRIPTION)}`;
    }
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
      <GidColumnWrapper padding="none" margin="none">
        <Image
          alt="nasa-image"
          objectFit="cover"
          src={imageUrl || "/no-image.jpg"}
          width={1000}
          height={1000}
        />

        <Text textSize="m">
          <Description />
          {data?.description && data?.description.length >= MAX_DESCRIPTION ? (
            <ToggleDescriptionLengthBtns />
          ) : null}
        </Text>
      </GidColumnWrapper>
    </Box>
  );
};

export default DataItem;
