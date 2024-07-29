import theme from "@src/theme/theme";
import Box from "../box/box";

interface TextProps {
    tag?: 'p' | 'li' | 'h1' | string;
    childen?: React.ReactNode;
}

export default function Text(props: TextProps) {
    return (
        <Box styleSheet={{ fontFamily: theme.typography.fontFamily }} {...props} >

        </Box>
    )
} 

Text.defaultProps = {
    tag: 'p'
}