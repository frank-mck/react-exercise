import { Box, ErrorText, Pagination } from "@cruk/cruk-react-components";
import { NasaResponse, NasaSearchParams } from "../../types";
import NasaArticle from "./NasaArticle";
import Media from "./Media";
import { useState } from "react";

const ITEMS_PER_PAGE = 10;

export const Results = ({
  nasaData,
  nasaSearchParams,
}: {
  nasaData: NasaResponse | undefined;
  nasaSearchParams: NasaSearchParams;
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const items = nasaData?.collection?.items;

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const itemsToRender = () => {
    return items?.slice(
      (currentPage - 1) * ITEMS_PER_PAGE,
      currentPage * ITEMS_PER_PAGE,
    );
  };

  return (
    <Box paddingBottom="m" marginBottom="xl">
      {itemsToRender()?.map((item, index) => {
        const data = item?.data?.[0];

        return (
          <NasaArticle
            media={
              <Media type={nasaSearchParams.mediaType} href={item?.href} />
            }
            key={`${data?.date_created}${index}`}
            data={data}
          />
        );
      })}

      {(items?.length as number) === 0 ? (
        <ErrorText>Sorry, no results found.</ErrorText>
      ) : null}

      <Pagination
        current={currentPage}
        items={items?.length || 0}
        pagerCallback={handlePageChange}
        perPage={ITEMS_PER_PAGE}
      />
    </Box>
  );
};

export default Results;
