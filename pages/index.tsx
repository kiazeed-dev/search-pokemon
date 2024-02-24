import { Flex, Center, Input, Image, Stack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useSearch } from "@/src/providers/InputProvider";
import Pagetransition from "@/src/components/transitions/PageTransitions";

export default function Home() {
	const { replace } = useRouter();
	const { search, setSearch } = useSearch();

	const handlerChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value);
	};

	const handlerkeyDown = (e: React.KeyboardEvent) => {
		if (e.key === "Enter") {
			if (search == "") return;
			replace(search);
		}
	};

	return (
		<Pagetransition>
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
								value={search}
							/>
						</Flex>
					</Stack>
				</Flex>
			</Flex>
		</Pagetransition>
	);
}
