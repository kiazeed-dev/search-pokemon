import { Box, Flex, useColorMode, Button, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export default function Nav() {
	const { replace } = useRouter();
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<Box position={"relative"} zIndex={2}>
			<Box px={2} boxShadow="md">
				<Flex
					h={16}
					alignItems={"center"}
					justifyContent={"space-between"}
				>
					<Flex onClick={() => replace("/")}>
						<Text>Pokemon Searching</Text>
					</Flex>
					<Button
						display={{ base: "none", md: "flex" }}
						onClick={toggleColorMode}
						variant={"unstyled"}
						colorScheme="Black"
					>
						{colorMode === "light" ? (
							<MoonIcon w={5} h={5} />
						) : (
							<SunIcon w={5} h={5} />
						)}
					</Button>
				</Flex>
			</Box>
		</Box>
	);
}
