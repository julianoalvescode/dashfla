import { Input as InputCustom, FormControl, FormLabel } from "@chakra-ui/react";

import * as I from "./types";

export function Input({ label, name, ...rest }: I.InputProps) {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <InputCustom
        name={name}
        variant="filled"
        bgColor="gray.900"
        focusBorderColor="pink.500"
        _hover={{ bgColor: "gray.900" }}
        size="lg"
        {...rest}
      />
    </FormControl>
  );
}
