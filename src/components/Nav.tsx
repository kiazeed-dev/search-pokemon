import { Box, Flex, Image } from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function Nav() {
	const { replace, route } = useRouter();
	return (
		<Box position={"relative"} zIndex={2}>
			<Box px={12} boxShadow="md">
				<Flex
					h={20}
					alignItems={"center"}
					justifyContent={"space-between"}
				>
					{route != "/" && (
						<Flex onClick={() => replace("/")}>
							<Image
								objectFit={"contain"}
								h="5em"
								w="12em"
								src="/Images/logo.png"
							/>
						</Flex>
					)}
				</Flex>
			</Box>
		</Box>
	);
}
