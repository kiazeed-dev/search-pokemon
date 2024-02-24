import type { pokemonAttack, attacksInfo } from "@/src/types";
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Button,
	Spinner,
	Text,
	Divider,
	Flex,
	Table,
	Thead,
	Tbody,
	Tr,
	Th,
	Td,
	TableContainer,
} from "@chakra-ui/react";
import { useQuery } from "@apollo/client";
import { GET_ATTACK } from "@/src/query";
import { useEffect, useState } from "react";

export default function PokemonAttacksModel({
	pokemonID,
	openModal,
	closeModal,
}: {
	pokemonID: string;
	openModal: boolean;
	closeModal: () => void;
}) {
	const { loading, error, data } = useQuery(GET_ATTACK, {
		variables: { id: pokemonID },
	});
	const [pokemon, setPokemon] = useState<pokemonAttack>();

	useEffect(() => {
		if (data && data.pokemon != null) {
			setPokemon(data.pokemon);
		}
	}, [data]);

	return (
		<>
			<Modal isOpen={openModal} onClose={closeModal}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Pokemon Attacks</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						{loading ? (
							<Spinner />
						) : (
							<>
								<Flex direction={"column"} gap={"5"}>
									<Text>Fast Attack</Text>
									<TableContainer>
										<Table variant="simple">
											<Thead>
												<Tr>
													<Th>Name</Th>
													<Th>Type</Th>
													<Th isNumeric>Damage</Th>
												</Tr>
											</Thead>
											<Tbody>
												{pokemon?.attacks.fast.map(
													(
														a: attacksInfo,
														index: number
													) => (
														<Tr key={index}>
															<Td>{a.name}</Td>
															<Td>{a.type}</Td>
															<Td isNumeric>
																{a.damage}
															</Td>
														</Tr>
													)
												)}
											</Tbody>
										</Table>
									</TableContainer>
								</Flex>
								<Divider m="1em" />
								<Flex direction={"column"} gap={"5"}>
									<Text>Special Attack</Text>
									<TableContainer>
										<Table variant="simple">
											<Thead>
												<Tr>
													<Th>Name</Th>
													<Th>Type</Th>
													<Th isNumeric>Damage</Th>
												</Tr>
											</Thead>
											<Tbody>
												{pokemon?.attacks.special.map(
													(
														a: attacksInfo,
														index: number
													) => (
														<Tr key={index}>
															<Td>{a.name}</Td>
															<Td>{a.type}</Td>
															<Td isNumeric>
																{a.damage}
															</Td>
														</Tr>
													)
												)}
											</Tbody>
										</Table>
									</TableContainer>
								</Flex>
							</>
						)}
					</ModalBody>
					<ModalFooter>
						<Button colorScheme="blue" mr={3} onClick={closeModal}>
							Close
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
}
