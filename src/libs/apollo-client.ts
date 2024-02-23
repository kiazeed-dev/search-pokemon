import { ApolloClient, InMemoryCache } from "@apollo/client";
const URL = process.env.NEXT_PUBLIC_CLIENT_HOST;

const createApolloClient = () => {
	return new ApolloClient({
		uri: URL,
		cache: new InMemoryCache(),
	});
};

export default createApolloClient;
