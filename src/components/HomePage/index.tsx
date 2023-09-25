import { Heading, Box, ErrorText, Loader } from "@cruk/cruk-react-components";
import { NasaSearchParams } from "../../types";
import Results from "../Results";
import NasaForm, { defaultParams } from "./NasaForm";
import { useState } from "react";
import useNasaQuery from "../../hooks/useNasaQuery";

export const HomePage = () => {
  const [nasaSearchParams, setNasaSearchParams] = useState<NasaSearchParams>(
    defaultParams(),
  );
  const { data: nasaData, error, isFetching } = useNasaQuery(nasaSearchParams);

  const onSubmit: (data: NasaSearchParams) => void = (data) => {
    setNasaSearchParams(data);
  };

  const HandledResults = () => {
    if (isFetching) {
      return <Loader />;
    } else if (error) {
      return (
        <ErrorText>Sorry, there was an error fetching the results.</ErrorText>
      );
    } else {
      return (
        <Results nasaData={nasaData} nasaSearchParams={nasaSearchParams} />
      );
    }
  };

  return (
    <Box  paddingTop="s">
      <Heading h1>Nasa Form</Heading>

      <NasaForm onSubmit={onSubmit} isFetching={isFetching} />

      <HandledResults />
    </Box>
  );
};

export default HomePage;
