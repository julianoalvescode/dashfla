import { Flex, Box, Text, Avatar } from "@chakra-ui/react";
import * as I from "./types";
export function Profile({ showProfileData = true }: I.ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text color="#fff">Juliano Alves</Text>
          <Text color="gray.300" fontSize="small">
            contato@julianoalves.me
          </Text>
        </Box>
      )}
      <Avatar
        cursor="pointer"
        showBorder={true}
        src="https://avatars.githubusercontent.com/u/43914533?v=4"
        size="md"
        name="Juliano Alves"
        borderWidth={3}
        borderColor="#fff"
      />
    </Flex>
  );
}
