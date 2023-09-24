import { Heading, Box } from "@cruk/cruk-react-components";
import { NasaSearchParams } from "../../types";
import Results from "../Results";
import NasaForm from "./NasaForm";
import { useState } from "react";

export const HomePage = () => {
  const [nasaSearchParams, setNasaSearchParams] = useState<NasaSearchParams>(
    defaultParams(),
  );

  function defaultParams(): NasaSearchParams {
    return { keywords: "moon", yearStart: 2000, mediaType: "image" };
  }

  const onSubmit: (data: NasaSearchParams) => void = (data) => {
    setNasaSearchParams(data);
  };

  return (
    <Box marginTop="s" paddingTop="s">
      <Heading h1>Nasa Form</Heading>

      <NasaForm onSubmit={onSubmit} />

      <Results searchParams={nasaSearchParams} />
    </Box>
  );
};

export default HomePage;
