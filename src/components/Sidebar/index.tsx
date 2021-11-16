import { Box, Stack, Text, Link, Icon } from "@chakra-ui/react";
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from "react-icons/ri";

export function Sidebar() {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <Box>
          <Text fontWeight="bold" color="gray.400" fontSize="small">
            GERAL
            <Stack spacing="4" mt="8" align="stretch">
              <Link
                _hover={{ textDecoration: "none" }}
                display="flex"
                align="center"
                color="#fff"
              >
                <Icon as={RiDashboardLine} fontSize="20" />
                <Text ml="4" fontWeigh="medium">
                  Dashboard
                </Text>
              </Link>
              <Link
                _hover={{ textDecoration: "none" }}
                display="flex"
                align="center"
                color="#fff"
              >
                <Icon as={RiContactsLine} fontSize="20" />
                <Text ml="4" fontWeigh="medium">
                  Usuários
                </Text>
              </Link>
            </Stack>
          </Text>
        </Box>
        <Box>
          <Text fontWeight="bold" color="gray.400" fontSize="small">
            Automação
            <Stack spacing="4" mt="8" align="stretch">
              <Link
                _hover={{ textDecoration: "none" }}
                display="flex"
                align="center"
                color="#fff"
              >
                <Icon as={RiInputMethodLine} fontSize="20" />
                <Text ml="4" fontWeigh="medium">
                  Formulários
                </Text>
              </Link>
              <Link
                _hover={{ textDecoration: "none" }}
                display="flex"
                align="center"
                color="#fff"
              >
                <Icon as={RiGitMergeLine} fontSize="20" />
                <Text ml="4" fontWeigh="medium">
                  Automação
                </Text>
              </Link>
            </Stack>
          </Text>
        </Box>
      </Stack>
    </Box>
  );
}
