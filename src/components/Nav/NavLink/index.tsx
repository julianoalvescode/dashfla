import { Link as LinkComponent, Icon, Text } from "@chakra-ui/react";
import Link from "next/link";
import * as I from "./types";

import { ActiveLink } from "components";

export function NavLink({ children, icon, ...rest }: I.NavLink) {
  return (
    <>
      <ActiveLink passHref {...rest}>
        <LinkComponent
          transition="all 0.3s ease-in"
          _hover={{ textDecoration: "none", filter: "brightness(0.5)" }}
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
