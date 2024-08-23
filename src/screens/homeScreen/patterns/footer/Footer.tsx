import Box from "@src/components/box/box";
import Text from "@src/components/text/text";
import { useTheme } from "@src/theme/ThemeProvider";

export default function mFooter() {
    const theme = useTheme();
    return (
        <Box
            styleSheet={{
                backgroundColor: theme.colors.neutral.x900,
                color: theme.colors.neutral.x000,
                width: '100%',
                alignItems: 'center',
                paddingHorizontal: '24px',
                paddingVertical: '24px',
                jutifyContent: 'center',
                height: '120px',
            }}
        >
            <Text>
                Feito por Alessandro Virmond
            </Text>
        </Box>
    )
}