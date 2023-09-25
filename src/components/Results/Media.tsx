import Image from "next/image";
import React from "react";
import { StyledAudio } from "./styles";
import { ErrorText } from "@cruk/cruk-react-components";

const Media = ({
  type,
  nasaMedia,
}: {
  type: string;
  nasaMedia: string[] | undefined;
}) => {
  const MediaView = () => {
    switch (type) {
      case "image":
        return (
          <Image
            alt="nasa-image"
            objectFit="cover"
            src={nasaMedia?.[0] || "/no-image.jpg"}
            width={1000}
            height={1000}
          />
        );
      case "audio":
        return <StyledAudio src={nasaMedia?.[0]} controls />;
      case "video":
        return (
          <video
            style={{ borderRadius: "5px" }}
            width="350"
            height="200"
            controls
          >
            <source src={nasaMedia?.[0]} type="video/mp4"></source>
          </video>
        );
      default:
        return <ErrorText>Not a valid media type.</ErrorText>;
    }
  };
  return <MediaView />;
};

export default Media;
