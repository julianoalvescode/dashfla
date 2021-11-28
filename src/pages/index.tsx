import { Flex, Button, Stack } from "@chakra-ui/react";
import { Input } from "components/Form";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "hooks";

import * as yup from "yup";

const schemaSignIn = yup.object().shape({
  email: yup.string().email("E-mail inválido").required("Campo obrigatório"),
  password: yup.string().required("Campo obrigatório"),
});

export default function SignIn() {
  const { signIn } = useAuth();

  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schemaSignIn),
  });

  return (
    <>
      <Flex w="100vw" h="100vh" align="center" justify="center" color="#fff">
        <Flex
          as="form"
          maxW={360}
          bg="gray.800"
          width="100%"
          p="8"
          borderRadius={8}
          flexDirection="column"
          gridGap={8}
          onSubmit={handleSubmit(signIn)}
        >
          <Stack spacing="8">
            <Input
              control={control}
              error={errors?.email?.message}
              label="E-mail"
              name="email"
              type="email"
            />
            <Input
              control={control}
              error={errors?.password?.message}
              label="Senha"
              name="password"
              type="password"
            />
            <Button
              colorScheme="pink"
              isLoading={isSubmitting}
              type="submit"
              mt="6"
            >
              Entrar
            </Button>
          </Stack>
        </Flex>
      </Flex>
    </>
  );
}
