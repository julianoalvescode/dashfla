import { Text } from "@chakra-ui/react";

export function Logo() {
  return (
    <Text
      cursor="pointer"
      w="64"
      fontSize={["1xl", "3xl"]}
      fontWeight="bold"
      letterSpacing="tight"
      color="#fff"
    >
      dashgo
      <Text as="span" color="pink.500">
        .
      </Text>
    </Text>
  );
}
