import { useDisclosure } from "@chakra-ui/hooks";
import { createContext, useContext, useEffect } from "react";
import * as I from "./types";

export const SidebarContext = createContext({} as I.SidebarContext);

import { useRouter } from "next/router";

export function SidebarContextProvider({
  children,
}: I.SidebarContextProviderProps) {
  const disclosure = useDisclosure();
  const router = useRouter();

  useEffect(() => {
    disclosure.onClose();
  }, [router.asPath]);

  return (
    <SidebarContext.Provider value={disclosure}>
      {children}
    </SidebarContext.Provider>
  );
}

export const useSidebarDrawer = () => useContext(SidebarContext);
