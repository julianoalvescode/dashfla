import { Box, Text, Stack } from "@chakra-ui/react";
import * as I from "./types";
export function NavSection({ children, title = "" }: I.NavSectionProps) {
  return (
    <>
      <Box>
        <Text fontWeight="bold" color="gray.400" fontSize="small">
          {title}
          <Stack spacing="4" mt="8" align="stretch">
            {children}
          </Stack>
        </Text>
      </Box>
    </>
  );
}
