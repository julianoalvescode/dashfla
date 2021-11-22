import { Button } from "@chakra-ui/react";
import * as I from "./types";

export function PaginationItem({
  number,
  isCurrent = false,
}: I.PaginationItem) {
  switch (isCurrent) {
    case true:
      return (
        <Button
          size="sm"
          fontSize="xs"
          width="4"
          colorScheme="pink"
          disabled
          _disabled={{ bgColor: "pink.500", cursor: "default" }}
        >
          {number}
        </Button>
      );
    default:
      return (
        <Button
          size="sm"
          fontSize="xs"
          width="4"
          bgColor="gray.700"
          _hover={{ bgColor: "gray.500" }}
        >
          {number}
        </Button>
      );
  }
}
