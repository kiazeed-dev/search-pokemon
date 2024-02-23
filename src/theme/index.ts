import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    config: {
        initialColorMode: "dark",
        useSystemColorMode: false,
    },
    fonts: {
        heading: `'Inter','Prompt', sans-serif`,
        body: `'Inter', 'Prompt', sans-serif`,
    },
});
