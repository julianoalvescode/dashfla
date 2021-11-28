import {
  Box,
  Flex,
  Heading,
  Button,
  Icon,
  Table,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
  Checkbox,
  Text,
  useBreakpointValue,
  Spinner,
  Link as LinkChakra,
} from "@chakra-ui/react";
import { Header } from "components/Header";
import { Pagination } from "components/Pagination";
import { Sidebar } from "components/Sidebar";
import { RiAddLine, RiPencilLine } from "react-icons/ri";

import { formatDate } from "helpers";

import Head from "next/head";
import Link from "next/link";

import { useUser } from "hooks";
import { useState } from "react";
import { queryClient } from "services/react-query";
import { HttpClientMirage } from "services/api";

export default function UserList() {
  const [page, setPage] = useState(1);
  const { users, totalCount, isLoading, error, isFetching } = useUser({ page });

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  async function handlePrefetchUser(userId: string) {
    await queryClient.prefetchQuery(
      ["user", userId],
      async () => {
        const { data } = await HttpClientMirage.get(`/users/${userId}`);
        return data;
      },
      {
        staleTime: 1000 * 60 * 10, // 10 minutes,
      }
    );
  }

  return (
    <>
      <Head>
        <title>Clube de Regatas do Flamengo | Usuários</title>
      </Head>
      <Box>
        <Header />
        <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
          <Sidebar />
          <Box flex="1" borderRadius={8} bg="gray.800" p="8">
            <Flex mb="8" justify="space-between" align="center">
              <Heading fontWeight="normal" size="lg">
                Usuários
                {!isLoading && isFetching && (
                  <Spinner size="sm" color="gray.500" ml="4" />
                )}
              </Heading>
              <Link passHref href="/users/create">
                <Button
                  cursor="pointer"
                  as="a"
                  fontSize="sm"
                  size="sm"
                  colorScheme="red"
                  leftIcon={<Icon as={RiAddLine} />}
                >
                  Criar novo
                </Button>
              </Link>
            </Flex>
            {isLoading ? (
              <Flex justify="center">
                <Spinner />
              </Flex>
            ) : error ? (
              <Box flex="1">
                <Flex align="center">
                  <Text>Falha ao obter os dados dos usuários.</Text>
                </Flex>
              </Box>
            ) : (
              <>
                <Table colorScheme="whiteAlpha">
                  <Thead>
                    <Tr>
                      <Th px={["4", "4", "6"]} color="gray.300" width="8">
                        <Checkbox colorScheme="red" />
                      </Th>
                      <Th>Usuário</Th>
                      {isWideVersion && <Th>Data de cadastro</Th>}
                      <Th width="8"></Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {users?.map((user, index) => (
                      <Tr key={index}>
                        <Td px={["4", "4", "6"]}>
                          <Checkbox colorScheme="red" />
                        </Td>
                        <Td>
                          <Box>
                            <LinkChakra
                              color="red.400"
                              onMouseEnter={() => handlePrefetchUser(user?.id)}
                            >
                              <Text fontWeight="bold">{user.name}</Text>
                            </LinkChakra>
                            <Text fontSize="small" color="gray.300">
                              {user.email}
                            </Text>
                          </Box>
                        </Td>
                        {isWideVersion && (
                          <Td>
                            {formatDate({
                              date: user.createdAt || new Date(),
                              props: { format: "Pp" },
                            })}
                          </Td>
                        )}
                        {isWideVersion && (
                          <Td>
                            <Button
                              cursor="pointer"
                              as="a"
                              fontSize="16"
                              size="sm"
                              colorScheme="red"
                              leftIcon={<Icon as={RiPencilLine} />}
                            >
                              Editar
                            </Button>
                          </Td>
                        )}
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
                <Pagination
                  totalCountOfRegisters={totalCount}
                  currentPage={page}
                  registersPerPage={5}
                  onPageChange={setPage}
                />
              </>
            )}
          </Box>
        </Flex>
      </Box>
    </>
  );
}
