import {
  Input as InputCustom,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";

import * as I from "./types";

import { Controller } from "react-hook-form";

export function Input({ label, name, error, control, type }: I.InputProps) {
  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: true }}
      render={({ field }) => (
        <FormControl isInvalid={error && true}>
          {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
          <InputCustom
            type={type}
            variant="filled"
            bgColor="gray.900"
            focusBorderColor="pink.500"
            _hover={{ bgColor: "gray.900" }}
            size="lg"
            {...field}
          />
          <FormErrorMessage>{error && error}</FormErrorMessage>
        </FormControl>
      )}
    />
  );
}
