import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, Box, Flex } from "@chakra-ui/react";
import { theme } from "@/src/theme";
import Nav from "@/src/components/Nav";
import { ApolloProvider } from "@apollo/client";
import createApolloClient from "@/src/libs/apollo-client";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
	const client = createApolloClient();
	const { route } = useRouter();
	return (
		<ChakraProvider theme={theme}>
			<ApolloProvider client={client}>
				<Box
					w="100%"
					h="100vh"
					position="relative"
					background={`url('Images/background.jpg') fixed center/contain no-repeat`}
				>
					<Flex flexDirection="column" height="100%" bg={"#000000e3"}>
						{route != "/" && <Nav />}
						<Component {...pageProps} />
					</Flex>
				</Box>
			</ApolloProvider>
		</ChakraProvider>
	);
}
