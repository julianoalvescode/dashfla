import { UseDisclosureReturn } from "@chakra-ui/hooks";
import React from "react";

export type SidebarContext = UseDisclosureReturn;

export type SidebarContextProviderProps = {
  children: React.ReactNode;
};
