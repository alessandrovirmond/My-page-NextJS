import { useTheme } from "@src/theme/ThemeProvider";
import ButtonBase, { ButtonBaseProps } from "./buttonBase";
import { ColorVariant, colorVariantBy, Variant } from "./colorVariantBy";
import { buttonSize, ButtonSize } from "./buttonSize";

interface ButtonProps extends ButtonBaseProps {
    fullWith?: boolean;
    children: React.ReactNode;
    colorVariant?: ColorVariant;
    variant?: Variant;
    size?: ButtonSize;
}

export default function Button({ styleSheet, children, fullWith, colorVariant, variant, size }: ButtonProps) {
    const theme = useTheme();
    return (
        <ButtonBase
            styleSheet={{
                alignSelf: 'flex-start',
                ...colorVariantBy(theme, colorVariant, variant),
                ...buttonSize[size],
                ...(fullWith && {
                    alignSelf: 'initial',
                }),
                ...styleSheet,
            }}>
            {children}
        </ButtonBase>
    );
}

Button.defaultProps = {
    fullWith: false,
    variant: 'contained',
    colorVariant: 'primary'
}

Button.Base = ButtonBase;