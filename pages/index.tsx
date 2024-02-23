import { Flex, Center, Input, Image, Stack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useState } from "react";

export default function Home() {
	const { replace } = useRouter();
	const [searchInput, setSearchInput] = useState<string>("");

	const handlerChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchInput(e.target.value);
	};

	const handlerkeyDown = (e: React.KeyboardEvent) => {
		if (e.key === "Enter") {
			replace(searchInput);
		}
	};

	return (
		<Flex
			padding={"2rem"}
			width={"100%"}
			height={"100%"}
			justifyContent={"center"}
		>
			<Flex justifyContent={"center"} mt={"15em"}>
				<Stack alignItems={"center"}>
					<Image
						objectFit={"contain"}
						h="10em"
						w="20em"
						src="/Images/logo.png"
					/>
					<Flex w={{ base: "20em", md: "35em" }}>
						<Input
							onChange={handlerChangeInput}
							onKeyDown={handlerkeyDown}
							placeholder="Search here..."
							size={"lg"}
						/>
					</Flex>
				</Stack>
			</Flex>
		</Flex>
	);
}
