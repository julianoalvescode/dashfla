import { Flex, Button, Stack } from "@chakra-ui/react";

import { Input } from "components/Form";

export default function SignIn() {
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
        >
          <Stack spacing="8">
            <Input label="E-mail" id="email " name="email" type="email" />
            <Input
              label="Senha"
              id="password"
              name="password"
              type="password"
            />
            <Button colorScheme="pink" type="submit" mt="6">
              Entrar
            </Button>
          </Stack>
        </Flex>
      </Flex>
    </>
  );
}
