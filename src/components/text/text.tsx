import {ThemeTypographyVariants} from "@src/theme/theme";
import Box from "../box/box";
import { BaseComponent } from "@src/theme/BaseComponent";
import { useTheme } from "@src/theme/ThemeProvider";
import React from "react";

interface TextProps {
    variant?: ThemeTypographyVariants;
    tag?: 'p' | 'li' | 'h1' | 'h2' | 'h3' | string;
    children?: React.ReactNode;
    StyleSheet?: StyleSheet;
    ref: any;
}

const Text = React.forwardRef(({
    tag,
    StyleSheet, 
    variant, 
    ...props
    }: TextProps, ref) => {

    const theme = useTheme();

    const textVariant = theme.typography.variants[variant];

    return (
        <BaseComponent 
        as={tag}
        styleSheet={{ 
            fontFamily: theme.typography.fontFamily, 
            ...textVariant,
            ...StyleSheet
        }} 
        ref ={ref}
            {...props} 

        />
    )
});


Text.defaultProps = {
    tag: 'p',
    variant: 'body2'
}

export default Text;