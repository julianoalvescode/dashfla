import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "styles/theme";
import { GlobalContext } from "contexts";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <GlobalContext>
        <Component {...pageProps} />
      </GlobalContext>
    </ChakraProvider>
  );
}

export default MyApp;
