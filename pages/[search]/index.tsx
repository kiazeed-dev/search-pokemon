import { dataSearchType } from "@/src/types";
import type { pokemonInfo } from "@/src/types";
import { Flex, Input, Spinner, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import PokemonCard from "@/src/components/common/PokemonCard";
import { useQuery } from "@apollo/client";
import { GET_POKEMON } from "@/src/query";
// * mock data
// import POKEMON from "@/src/mock/charmander.json";

export default function SearchPage() {
	const { query, replace } = useRouter();
	const { loading, error, data } = useQuery(GET_POKEMON, {
		variables: { name: query?.search },
	});
	const [searchInput, setSearchInput] = useState("");
	const [pokemon, setPokemon] = useState<dataSearchType>({
		isError: false,
		data: "",
	});

	useEffect(() => {
		if (data && data.pokemon) {
			let thePokemon: pokemonInfo = data.pokemon;
			setPokemon(() => {
				return {
					isError: false,
					data: thePokemon,
				};
			});
		} else if (error || data?.pokemon == null) {
			setPokemon(() => {
				return {
					isError: true,
					data: `${error}`,
				};
			});
		}
	}, [loading, error, data]);

	const handlerInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchInput(e.target.value);
	};

	const handlerkeyDown = (e: React.KeyboardEvent) => {
		if (e.key === "Enter") {
			setPokemon((): dataSearchType => {
				return {
					isError: false,
					data: "",
				};
			});
			replace(searchInput);
		}
	};

	return (
		<Flex p={"2em"} width={"100%"} height={"100%"}>
			<Flex
				w={"100%"}
				direction={"column"}
				gap={"5"}
				alignItems={"center"}
			>
				<Flex w={{ base: "20em", md: "35em" }}>
					<Input
						onChange={handlerInput}
						onKeyDown={handlerkeyDown}
						placeholder="Search here"
						size={{ base: "md", md: "lg" }}
					/>
				</Flex>

				{loading ? (
					<Flex justifyContent={"center"}>
						<Spinner boxSize={"20"} />
					</Flex>
				) : pokemon.isError ? (
					<Flex justifyContent={"center"}>
						<Text
							fontSize={"20px"}
						>{`The ${query?.search} Not Found!`}</Text>
					</Flex>
				) : (
					<Flex
						justifyContent={"center"}
						alignItems="center"
						direction={"column"}
					>
						{typeof pokemon.data === "string" ? (
							<Spinner boxSize={"20"} />
						) : (
							<PokemonCard pokemonData={pokemon.data} />
						)}
					</Flex>
				)}
			</Flex>
		</Flex>
	);
}
