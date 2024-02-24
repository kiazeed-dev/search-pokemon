import type { pokemonEvolution } from "@/src/types";
import {
	Drawer,
	DrawerBody,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	Button,
	Spinner,
	Flex,
	Text,
	Image,
	Stack,
} from "@chakra-ui/react";
import { useQuery } from "@apollo/client";
import { GET_EVOLITIONS } from "@/src/query";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSearch } from "@/src/providers/InputProvider";

export default function PokemonEvolutionDrawer({
	pokemonID,
	openDrawer,
	closeDrawer,
}: {
	pokemonID: string;
	openDrawer: boolean;
	closeDrawer: () => void;
}) {
	const { loading, error, data } = useQuery(GET_EVOLITIONS, {
		variables: { id: pokemonID },
	});
	const [pokemon, setPokemon] = useState<pokemonEvolution>();
	const { setSearch } = useSearch();
	const { replace } = useRouter();

	useEffect(() => {
		if (data && data.pokemon != null) {
			setPokemon(data.pokemon);
		}
	}, [data]);

	const handlerClick = (name: string) => {
		setSearch(name);
		replace(`/${name}`);
	};

	return (
		<>
			<Drawer isOpen={openDrawer} placement="right" onClose={closeDrawer}>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader>Evolution</DrawerHeader>

					<DrawerBody>
						<Flex direction={"column"}>
							{loading ? (
								<Spinner />
							) : error || pokemon?.evolutions == null ? (
								<>
									<Text>Pokemon Evolution Not Fouund!</Text>
								</>
							) : (
								<Stack gap={"5"}>
									{pokemon?.evolutions.map((e) => (
										<Flex
											direction={"column"}
											key={e.id}
											onClick={() => handlerClick(e.name)}
											border={"3px solid"}
											borderRadius={"5px"}
											_hover={{
												cursor: "pointer",
												backgroundColor: "teal",
												transition:
													"background-color 0.5s",
											}}
											p={"1em"}
										>
											<Text>{`${e.name} #${e.number}`}</Text>
											<Image
												src={e.image}
												borderRadius={"5"}
												boxSize={"xs"}
												objectFit={"contain"}
											/>
										</Flex>
									))}
								</Stack>
							)}
						</Flex>
					</DrawerBody>

					<DrawerFooter>
						<Button variant="outline" mr={3} onClick={closeDrawer}>
							Cancel
						</Button>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</>
	);
}
