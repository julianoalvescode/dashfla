import { Tooltip, IconButton } from "@chakra-ui/react";
import { RiUserAddLine } from "react-icons/ri";

export function FriendshipRequests() {
  return (
    <>
      <Tooltip hasArrow label="Pedidos de amizade">
        <IconButton
          bg={{ bg: "none" }}
          _hover={{ bg: "none" }}
          color="#fff"
          icon={<RiUserAddLine />}
          aria-label="Solicitações"
          fontSize="20"
        />
      </Tooltip>
    </>
  );
}
