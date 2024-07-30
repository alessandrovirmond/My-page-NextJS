import {ThemeTypographyVariants} from "@src/theme/theme";
import Box from "../box/box";
import { BaseComponent } from "@src/theme/BaseComponent";
import { useTheme } from "@src/theme/ThemeProvider";

interface TextProps {
    variant?: ThemeTypographyVariants;
    tag?: 'p' | 'li' | 'h1' | 'h2' | 'h3' | string;
    children?: React.ReactNode;
    StyleSheet?: StyleSheet;
}

export default function Text({
    StyleSheet, 
    variant, 
    ...props
    }: TextProps) {

    const theme = useTheme();

    const textVariant = theme.typography.variants[variant];

    return (
        <BaseComponent 
        styleSheet={{ 
            fontFamily: theme.typography.fontFamily, 
            ...textVariant,
            ...StyleSheet
        }} 
            {...props} 

        />
    )
}

Text.defaultProps = {
    tag: 'p'
}