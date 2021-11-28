import { Box } from "@chakra-ui/react";
import Image from "next/image";

export function Logo() {
  return (
    <Box height={["40px", "60px", "70px"]} width={["40px", "60px", "70px"]}>
      <Image
        height="100%"
        width="100%"
        layout="responsive"
        src="/images/logo.png"
        alt="Logo Flamengo"
      />
    </Box>
  );
}
