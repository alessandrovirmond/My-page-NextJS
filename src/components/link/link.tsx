import React from "react";
import NextLink from 'next/link';
import Text from "../text/text";
import { StyleSheet } from '@src/theme/styleSheet';
import { ThemeTypographyVariants } from "@src/theme/theme";
import { useTheme } from "styled-components";

interface LinkProps {
    href: string;
    children: React.ReactNode;
    styleSheet: StyleSheet;
    viariant?: ThemeTypographyVariants;
    colorVariant?: 'primary' | 'accent' | 'neutral' | 'sucess' | 'warning' | 'negative';
    colorVariantEnabled?: boolean;
}

const Link = React.forwardRef(({ href, children, colorVariant, colorVariantEnabled, styleSheet, ...props }: LinkProps, ref) => {

    const theme = useTheme();
    const isInternalLink = href.startsWith('http');


    const currentColorSet = {
        color: theme.colors[colorVariant].x500,
        hover: {
            color: theme.colors[colorVariant].x400,
        },
        focus: {
            color: theme.colors[colorVariant].x600,
        }
    }

    const linkProps = {
        tag: 'a',
        ref,
        children,
        href,
        styleSheet: {
            textDecoration: 'none',
            ...colorVariantEnabled && {
                color: currentColorSet.color,
            },
            hover: {
                ...styleSheet?.hover,
                ...colorVariantEnabled && {
                    color: theme.colors[colorVariant].x400,
                }
            },
            focus: {
                ...styleSheet?.focus,
                ...colorVariantEnabled && {
                    color: theme.colors[colorVariant].x600,
                }
            },

        },
        ...props
    }

    if (isInternalLink) return (<Text 
    {...{
        target: '_blank',
        ...linkProps
    }} />)

    return (
        <NextLink href={href} passHref>
            <Text  {...linkProps} />
        </NextLink>
    )
});

Link.defaultProps = {
    colorVariantEnabled: true,
    colorVariant: 'primary'
}

export default Link;