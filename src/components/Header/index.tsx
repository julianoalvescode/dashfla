import {
  Flex,
  Text,
  Input,
  Icon,
  HStack,
  IconButton,
  Box,
  Avatar,
  Tooltip,
} from "@chakra-ui/react";

import {
  RiNotificationLine,
  RiSearchLine,
  RiUserAddLine,
} from "react-icons/ri";

export function Header() {
  return (
    <>
      <Flex
        w="100%"
        as="header"
        maxWidth={1480}
        h="20"
        mx="auto"
        mt="4"
        px="6"
        align="center"
      >
        <Text
          cursor="pointer"
          w="64"
          fontSize="3xl"
          fontWeight="bold"
          color="#fff"
        >
          dashgo
          <Text as="span" color="pink.500">
            .
          </Text>
        </Text>
        <Flex
          flex="1"
          py="4"
          px="8"
          ml="6"
          as="label"
          maxWidth={400}
          color="gray.200"
          position="relative"
          bg="gray.800"
          borderRadius="full"
        >
          <Input
            color="gray.50"
            variant="unstyled"
            placeholder="Buscar na plataforma"
            px="4"
            mr="4"
            _placeholder={{ color: "gray.400" }}
          />
          <Icon cursor="pointer" fontSize="20" as={RiSearchLine} />
        </Flex>
        <Flex align="center" ml="auto">
          <HStack
            mx="8"
            spacing="8"
            pr="8"
            py="1"
            color="gray.300"
            borderRightWidth={1}
            borderColor="gray.700"
          >
            <Tooltip hasArrow label="Notificação">
              <IconButton
                bg={{ bg: "none" }}
                _hover={{ bg: "none" }}
                color="#fff"
                icon={<RiNotificationLine />}
                aria-label="Notificação"
                fontSize="20"
              />
            </Tooltip>
            <Tooltip hasArrow label="Pedidos de amizade">
              <IconButton
                bg={{ bg: "none" }}
                _hover={{ bg: "none" }}
                color="#fff"
                icon={<RiUserAddLine />}
                aria-label="Solicitações"
                fontSize="20"
              />
            </Tooltip>
          </HStack>
          <Flex align="center">
            <Box mr="4" textAlign="right">
              <Text color="#fff">Juliano Alves</Text>
              <Text color="gray.300" fontSize="small">
                contato@julianoalves.me
              </Text>
            </Box>
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
        </Flex>
      </Flex>
    </>
  );
}
