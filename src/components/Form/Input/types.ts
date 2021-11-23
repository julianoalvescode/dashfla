import { InputProps as Props } from "@chakra-ui/react";
import { HTMLInputTypeAttribute } from "react";

import { UseFormRegister, FieldValues, Control } from "react-hook-form";

export interface InputProps extends Props {
  label?: string;
  name: string;
  error?: string;
  type?: HTMLInputTypeAttribute;
  control: Control;
}
