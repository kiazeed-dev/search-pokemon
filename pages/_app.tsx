import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, Box, Flex } from "@chakra-ui/react";
import { theme } from "@/src/theme";
import Nav from "@/src/components/Nav";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider theme={theme}>
            <Box style={{ height: "100vh" }}>
                <Flex flexDirection="column" height="100%">
                    <Nav />
                    <Component {...pageProps} />
                </Flex>
            </Box>
        </ChakraProvider>
    );
}
