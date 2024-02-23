import type { pokemonInfo } from "@/src/types";
import {
	Button,
	Card,
	CardBody,
	CardFooter,
	Flex,
	Heading,
	Image,
	Stack,
	Table,
	TableContainer,
	Tbody,
	Td,
	Text,
	Th,
	Thead,
	Tooltip,
	Tr,
	Icon,
	Divider,
} from "@chakra-ui/react";
import { GiArmorDowngrade, GiArmorUpgrade } from "react-icons/gi";

export default function PokemonCard({
	pokemonData,
}: {
	pokemonData: pokemonInfo;
}) {
	const pokemon: pokemonInfo = pokemonData;
	return (
		<>
			<Card
				w={{ base: "300px", md: "900px" }}
				direction={{ base: "column", sm: "row" }}
			>
				{typeof pokemon === "string" ? (
					<Text>{pokemon}</Text>
				) : (
					<>
						<Flex alignItems={"center"} p="1em">
							<Image
								objectFit="cover"
								boxSize={{ base: "300px", md: "100%" }}
								src={pokemon.image}
								alt="Caffe Latte"
							/>
						</Flex>

						<Stack>
							<CardBody>
								<Stack gap={"0.75em"}>
									<Flex alignItems={"center"} gap={"0.5em"}>
										<Heading size="lg">
											{pokemon.name}
										</Heading>
										<Flex gap={"0.25em"}>
											{pokemon.types.map(
												(e: string, index: number) => (
													<Tooltip
														key={index}
														label={e}
													>
														<Image
															w={"2em"}
															h={"2em"}
															src={`/images/icons/${e.toLowerCase()}.svg`}
														/>
													</Tooltip>
												)
											)}
										</Flex>
									</Flex>
									<Flex justifyContent={"space-between"}>
										<Flex
											direction={"column"}
											alignItems={"center"}
											gap={"1em"}
											border={"2px"}
											borderRadius={"1em"}
											w="6em"
											m="0.25em"
										>
											<Text>Max HP</Text>
											<Text>{pokemon.maxHP}</Text>
										</Flex>
										<Flex
											direction={"column"}
											alignItems={"center"}
											gap={"1em"}
											border={"2px"}
											borderRadius={"1em"}
											w="6em"
											m="0.25em"
										>
											<Text>Max CP</Text>
											<Text>{pokemon.maxCP}</Text>
										</Flex>
										<Flex
											direction={"column"}
											alignItems={"center"}
											gap={"1em"}
											border={"2px"}
											borderRadius={"1em"}
											w="6em"
											m="0.25em"
										>
											<Text>FleeRate</Text>
											<Text>{pokemon.fleeRate}</Text>
										</Flex>
									</Flex>
									<TableContainer my="5">
										<Table
											variant="simple"
											colorScheme="teal"
										>
											<Thead>
												<Tr>
													<Th>Topic</Th>
													<Th>minimum</Th>
													<Th>Maximum</Th>
												</Tr>
											</Thead>
											<Tbody>
												<Tr>
													<Td>weight</Td>
													<Td isNumeric>
														{pokemon.weight.minimum}
													</Td>
													<Td isNumeric>
														{pokemon.weight.maximum}
													</Td>
												</Tr>
												<Tr>
													<Td>height</Td>
													<Td isNumeric>
														{pokemon.height.minimum}
													</Td>
													<Td isNumeric>
														{pokemon.height.maximum}
													</Td>
												</Tr>
											</Tbody>
										</Table>
									</TableContainer>
									<Flex direction={"column"} gap={"1em"}>
										<Flex
											alignItems={"center"}
											gap={"0.25em"}
										>
											<Icon
												as={GiArmorUpgrade}
												boxSize={"1.5em"}
											/>
											<Text>Resistant</Text>
										</Flex>
										<Flex gap={"0.25em"}>
											{pokemon.resistant.map(
												(e: string, index: number) => (
													<Tooltip
														key={index}
														label={e}
													>
														<Image
															w={"2em"}
															h={"2em"}
															src={`/images/icons/${e.toLowerCase()}.svg`}
														/>
													</Tooltip>
												)
											)}
										</Flex>
									</Flex>
									<Divider />
									<Flex direction={"column"} gap={"1em"}>
										<Flex
											alignItems={"center"}
											gap={"0.25em"}
										>
											<Icon
												as={GiArmorDowngrade}
												boxSize={"1.5em"}
											/>
											<Text>Weaknesses</Text>
										</Flex>
										<Flex gap={"0.25em"}>
											{pokemon.weaknesses.map(
												(e: string, index: number) => (
													<Tooltip
														key={index}
														label={e}
													>
														<Image
															w={"2em"}
															h={"2em"}
															src={`/images/icons/${e.toLowerCase()}.svg`}
														/>
													</Tooltip>
												)
											)}
										</Flex>
									</Flex>
									<Divider />
								</Stack>
							</CardBody>

							<CardFooter>
								<Flex
									direction={{ base: "column", md: "row" }}
									gap={"1em"}
									alignItems={"center"}
									justifyContent={"center"}
									w="100%"
								>
									<Button variant="solid" colorScheme="blue">
										Pokemon Attacks
									</Button>
									<Button variant="solid" colorScheme="red">
										Pokemon Evolutions
									</Button>
								</Flex>
							</CardFooter>
						</Stack>
					</>
				)}
			</Card>
		</>
	);
}
