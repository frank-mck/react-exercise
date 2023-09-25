import Image from "next/image";
import React from "react";
import { StyledAudio } from "./styles";
import { ErrorText } from "@cruk/cruk-react-components";
import useNasaMedia from "../../hooks/useNasaMedia";

const Media = ({ type, href }: { type: string; href: string | undefined }) => {
  const { data: nasaMedia } = useNasaMedia(href);

  const MediaView = () => {
    const validImageUrl = nasaMedia?.find((url) =>
      ["medium", "small", "large"].some((size) => url.includes(size)),
    );

    switch (type) {
      case "image":
        return (
          <Image
            alt="nasa-image"
            objectFit="cover"
            src={validImageUrl || "/no-image.jpg"}
            width={1000}
            height={1000}
          />
        );
      case "audio":
        return <StyledAudio src={nasaMedia?.[0]} controls />;
      case "video":
        return (
          <video width="100%" height="200" controls>
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
