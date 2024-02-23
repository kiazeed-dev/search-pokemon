import { dataSearchType } from "@/src/context";
import type { pokemon } from "@/src/context";
import {
	Button,
	Card,
	CardBody,
	CardFooter,
	Flex,
	Heading,
	Image,
	Input,
	Spinner,
	Stack,
	Table,
	TableContainer,
	Tbody,
	Td,
	Text,
	Th,
	Thead,
	Tr,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import POKEMON from "@/src/mock/charmander.json";

export default function SearchPage() {
	const { query, replace } = useRouter();
	const [searchInput, setSearchInput] = useState("");
	const [data, setData] = useState<dataSearchType>({
		isLoading: true,
		isError: false,
		data: "",
	});

	console.log(data.data);

	useEffect(() => {
		if (query.search && query.search == "pokemon") {
			setTimeout(() => {
				let thePokemon: pokemon = POKEMON.data.pokemon;
				setData((): dataSearchType => {
					return {
						isLoading: false,
						isError: false,
						data: thePokemon,
					};
				});
			}, 1000);
		} else {
			setData((): dataSearchType => {
				return {
					isLoading: false,
					isError: true,
					data: `The "${query.search}" not found!`,
				};
			});
		}
	}, [query]);

	const handlerInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchInput(e.target.value);
	};

	const handlerkeyDown = (e: React.KeyboardEvent) => {
		if (e.key === "Enter") {
			setData((): dataSearchType => {
				return {
					isLoading: true,
					isError: false,
					data: "",
				};
			});
			replace(searchInput);
		}
	};

	return (
		<Flex padding={"2rem"} width={"100%"} height={"100%"}>
			<Flex
				w={"100%"}
				direction={"column"}
				gap={"5"}
				alignItems={"center"}
			>
				<Flex w="35em">
					<Input
						onChange={handlerInput}
						onKeyDown={handlerkeyDown}
						placeholder="Search here"
						size={"lg"}
					/>
				</Flex>

				{data.isLoading ? (
					<Flex justifyContent={"center"}>
						<Spinner boxSize={"20"} />
					</Flex>
				) : data.isError ? (
					<Flex justifyContent={"center"}>
						<Text fontSize={"20px"}>{data.data.toString()}</Text>
					</Flex>
				) : (
					<Flex
						justifyContent={"center"}
						alignItems="center"
						direction={"column"}
					>
						<Card
							maxW="xl"
							direction={{ base: "column", sm: "row" }}
						>
							{typeof data.data === "string" ? (
								<Text>{data.data}</Text>
							) : (
								<>
									<Image
										objectFit="cover"
										maxW={{ base: "100%", sm: "200px" }}
										src={data.data.image}
										alt="Caffe Latte"
									/>
									<Stack>
										<CardBody>
											<Heading size="md">
												{data.data.name}
											</Heading>
											<TableContainer mt="2">
												<Table
													variant="striped"
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
																{
																	data.data
																		.weight
																		.minimum
																}
															</Td>
															<Td isNumeric>
																{
																	data.data
																		.weight
																		.maximum
																}
															</Td>
														</Tr>
														<Tr>
															<Td>height</Td>
															<Td isNumeric>
																{
																	data.data
																		.height
																		.minimum
																}
															</Td>
															<Td isNumeric>
																{
																	data.data
																		.height
																		.maximum
																}
															</Td>
														</Tr>
													</Tbody>
												</Table>
											</TableContainer>
										</CardBody>

										<CardFooter>
											<Button
												variant="solid"
												colorScheme="blue"
											>
												Buy Latte
											</Button>
										</CardFooter>
									</Stack>
								</>
							)}
						</Card>
					</Flex>
				)}
			</Flex>
		</Flex>
	);
}
