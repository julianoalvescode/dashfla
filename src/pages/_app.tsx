import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "styles/theme";
import { GlobalContext } from "contexts";
import { makeServer } from "services/mirage";

import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { queryClient } from "services/react-query";

if (process.env.NODE_ENV === "development") {
  makeServer();
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <ChakraProvider theme={theme}>
        <GlobalContext>
          <Component {...pageProps} />
        </GlobalContext>
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
