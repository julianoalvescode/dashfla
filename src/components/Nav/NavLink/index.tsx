import { Link as LinkComponent, Icon, Text } from "@chakra-ui/react";
import Link from "next/link";
import * as I from "./types";

import { ActiveLink } from "components";

export function NavLink({ children, icon, ...rest }: I.NavLink) {
  return (
    <>
      <ActiveLink passHref {...rest}>
        <LinkComponent
          transition="all 300ms ease-in"
          _hover={{ textDecoration: "none", filter: "brightness(0.5)" }}
          _focus={{ boxShadow: 0 }}
          display="flex"
          align="center"
          color="#fff"
        >
          <Icon as={icon} fontSize="20" />
          <Text ml="4" fontWeigh="medium">
            {children}
          </Text>
        </LinkComponent>
      </ActiveLink>
    </>
  );
}
