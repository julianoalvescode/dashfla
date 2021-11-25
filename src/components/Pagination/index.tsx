import { useCallback } from "react";
import { Stack, Box, Text } from "@chakra-ui/react";

import { PaginationItem } from "components/Pagination/Item";
import * as I from "./types";

import { generatePagesArray } from "helpers";

const siblingsCount = 1;
export function Pagination({
  onPageChange,
  totalCountOfRegisters,
  currentPage = 1,
  registersPerPage,
}: I.PaginationProps) {
  const lastPage = Math.ceil(totalCountOfRegisters / registersPerPage);

  const previousPage =
    currentPage > 1
      ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
      : [];

  const nextPage =
    currentPage < lastPage
      ? generatePagesArray(currentPage, Math.min(currentPage + siblingsCount))
      : [];

  return (
    <Stack
      direction={["column", "row"]}
      mt="8"
      justify="space-between"
      align="center"
      spacing="6"
    >
      <Box>
        <strong>{currentPage}</strong> -<strong> {lastPage}</strong>
      </Box>
      <Stack direction="row" spacing="2">
        {currentPage > 1 + siblingsCount && (
          <>
            <PaginationItem onPageChange={onPageChange} number={1} />
            {currentPage > 2 + siblingsCount && (
              <Text color="gray.300" width="8" textAlign="center">
                ....
              </Text>
            )}
          </>
        )}
        {previousPage.length > 0 &&
          previousPage.map((page, index) => (
            <PaginationItem
              onPageChange={onPageChange}
              key={index}
              number={page}
            />
          ))}
        <PaginationItem
          onPageChange={onPageChange}
          number={currentPage}
          isCurrent
        />
        {nextPage.length > 0 &&
          nextPage.map((page, index) => (
            <PaginationItem
              onPageChange={onPageChange}
              key={index}
              number={page}
            />
          ))}
        {currentPage + siblingsCount < lastPage && (
          <>
            {currentPage + 1 + siblingsCount < lastPage && (
              <Text color="gray.300" width="8" textAlign="center">
                ....
              </Text>
            )}
            <PaginationItem onPageChange={onPageChange} number={lastPage} />
          </>
        )}
      </Stack>
    </Stack>
  );
}
