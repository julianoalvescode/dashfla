import {
  Box,
  Flex,
  Heading,
  Divider,
  VStack,
  HStack,
  SimpleGrid,
  Button,
} from "@chakra-ui/react";
import { Header, Sidebar, Input } from "components";

import Link from "next/link";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "react-query";
import { HttpClientMirage } from "services/api";
import { queryClient } from "services/react-query";
import { useRouter } from "next/router";

const schemaCreateUser = yup.object().shape({
  name: yup.string().required("Campo obrigatório"),
  email: yup.string().email("E-mail inválido").required("Campo obrigatório"),
  password: yup
    .string()
    .min(6, "No minimo de 6 caracteres")
    .required("Campo obrigatório"),
  password_confirmation: yup.string().required("Campo obrigatório"),
});

type CreateUserFormData = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
};

export default function CreateUser() {
  const router = useRouter();

  const createUser = useMutation(
    async (user: CreateUserFormData) => {
      await HttpClientMirage.post("users", {
        user: {
          ...user,
          created_at: new Date(),
        },
      });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("users");
      },
    }
  );

  const {
    control,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schemaCreateUser),
  });

  async function onCreateUser(user: CreateUserFormData): Promise<void> {
    await createUser.mutateAsync(user);

    router.push("/users");
  }

  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />
        <Box
          as="form"
          onSubmit={handleSubmit(onCreateUser)}
          flex="1"
          borderRadius={8}
          bg="gray.800"
          p={["6", "8"]}
        >
          <Heading fontSize="lg" fontWeight="normal">
            Criar usuário
          </Heading>
          <Divider my="6" borderColor="gray.700" />
          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input
                error={errors?.name?.message}
                control={control}
                name="name"
                label="Nome Completo"
              />
              <Input
                error={errors?.email?.message}
                control={control}
                name="email"
                type="email "
                label="E-mail"
              />
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input
                error={errors?.password?.message}
                control={control}
                name="password"
                type="password"
                label="Senha"
              />
              <Input
                error={errors?.password_confirmation?.message}
                control={control}
                name="password_confirmation"
                type="password"
                label="Confirmar senha"
              />
            </SimpleGrid>
          </VStack>
          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Link passHref href="/users">
                <Button as="a" colorScheme="whiteAlpha">
                  Cancelar
                </Button>
              </Link>
              <Button isLoading={isSubmitting} type="submit" colorScheme="pink">
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
