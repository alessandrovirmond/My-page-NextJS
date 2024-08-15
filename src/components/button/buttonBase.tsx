import { ThemeTypographyVariants } from "@src/theme/theme";
import styled from 'styled-components';
import Text from "../text/text";
import { useRipple } from "react-use-ripple";
import React from "react";
import { useRouter } from "next/router";

const StyledButton = styled(Text) <any>`

`;

export interface ButtonBaseProps {
    children: React.ReactNode;
    textVariant?: ThemeTypographyVariants;
    styleSheet?: StyleSheet;
    href?: string,
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function ButtonBase({
    children,
    textVariant,
    styleSheet,
    href,

    ...props
}: ButtonBaseProps) {
    
    const router = useRouter();
    const ref = React.useRef();
    const isLink = Boolean(href);
    const Tag = isLink? 'a' : 'button';
    useRipple(ref);

    return (
        <StyledButton 
        tag={Tag} 
        ref={ref} 
        href={href}
        styleSheet={{
            border: 0,
            backgroundColor: 'transparent',
            color: 'inherit',
            outline: '0',
            cursor: 'pointer',
            textDecoration: 'none',
            ...styleSheet
        }}
        onClick={(event) => {
            isLink && event.preventDefault();
            isLink && router.push(href);
            !isLink && props.onClick && props.onClick(event);
        }}
        {...props} 
        >
            {children}
        </StyledButton>
    );
}