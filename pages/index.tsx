import Box from "../src/components/box";
import theme from "../src/theme/theme";

export default function HomeScreen() {
    return (
        <Box
            tag="main"
            styleSheet={{
                fontFamily: theme.typography.fontFamily,
            }}
        >
            Oi
        </Box>
    )
}