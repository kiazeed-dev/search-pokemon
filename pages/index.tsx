import { Flex, Center, Input } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function Home() {
	const [searchInput, setSearchInput] = useState<string>("");
	const { replace } = useRouter();

	useEffect(() => {
		console.log(searchInput);
	}, [searchInput]);

	const handlerChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchInput(e.target.value);
	};

	const handlerkeyDown = (e: React.KeyboardEvent) => {
		if (e.key === "Enter") {
			replace(searchInput);
		}
	};

	return (
		<Flex padding={"2rem"} width={"100%"} height={"100%"}>
			<Center width={"100%"} height={"100%"}>
				<Flex w="30em">
					<Input
						onChange={handlerChangeInput}
						onKeyDown={handlerkeyDown}
						placeholder="Search here"
						size={"lg"}
					/>
				</Flex>
			</Center>
		</Flex>
	);
}
