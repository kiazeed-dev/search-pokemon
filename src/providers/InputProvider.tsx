import {
	PropsWithChildren,
	createContext,
	useContext,
	useEffect,
	useState,
} from "react";
import { InputSearch } from "../types";
import { useRouter } from "next/router";

export const InputContext = createContext<InputSearch>({
	search: "",
	setSearch: () => {},
});

export const InputProvider = (props: PropsWithChildren) => {
	const { query } = useRouter();
	const [search, setSearch] = useState<string>("");

	useEffect(() => {
		if (!!query.search && typeof query.search == "string") {
			setSearch(query.search);
		}
	}, [query]);

	return (
		<InputContext.Provider
			value={{
				search: search,
				setSearch: setSearch,
			}}
		>
			{props.children}
		</InputContext.Provider>
	);
};

export const useSearch = () => {
	let context = useContext(InputContext);
	if (!context) {
		throw new Error("You need to wrap InputProvider.");
	}
	return context;
};
