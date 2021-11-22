import { Tooltip, IconButton } from "@chakra-ui/react";
import { RiNotificationLine } from "react-icons/ri";

export function Notification() {
  return (
    <>
      <Tooltip hasArrow label="Notificação">
        <IconButton
          bg={{ bg: "none" }}
          _hover={{ bg: "none" }}
          color="#fff"
          icon={<RiNotificationLine />}
          aria-label="Notificação"
          fontSize="20"
        />
      </Tooltip>
    </>
  );
}
