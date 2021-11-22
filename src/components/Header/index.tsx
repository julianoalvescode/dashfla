import {
  Flex,
  HStack,
  useBreakpointValue,
  Icon,
  IconButton,
} from "@chakra-ui/react";

import {
  Profile,
  Notification,
  SearchBox,
  Logo,
  FriendshipRequests,
} from "components";

import { useSidebarDrawer } from "contexts/Sidebar";
import { RiMenuLine } from "react-icons/ri";

export function Header() {
  const { onOpen } = useSidebarDrawer();

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <>
      <Flex
        w="100%"
        as="header"
        maxWidth={1480}
        h="20"
        mx="auto"
        mt="4"
        px="6"
        align="center"
      >
        {!isWideVersion && (
          <IconButton
            aria-label="Menu sidebar"
            fontSize="24"
            variant="unstyled"
            onClick={onOpen}
            mr="2"
            icon={<Icon as={RiMenuLine} />}
          />
        )}
        <Logo />
        {isWideVersion && <SearchBox />}
        <Flex align="center" ml="auto">
          <HStack
            mx={["6", "8"]}
            spacing={["6", "8"]}
            pr={["6", "8"]}
            py="1"
            color="gray.300"
            borderRightWidth={1}
            borderColor="gray.700"
          >
            <Notification />
            <FriendshipRequests />
          </HStack>
          <Profile showProfileData={isWideVersion} />
        </Flex>
      </Flex>
    </>
  );
}
