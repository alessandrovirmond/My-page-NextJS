import ButtonBase, { ButtonBaseProps } from "./buttonBase";

interface ButtonProps extends ButtonBaseProps {
    fullWith?: boolean;
    children: React.ReactNode;
    colorVariant?: 'primary' | 'accent' | 'neutral' | 'sucess' | 'warning' | 'negative';

}

export default function Button({ styleSheet,  children, fullWith }: ButtonProps){
    return(
        <ButtonBase
        styleSheet={{
            alignSelf: 'flex-start',
            ...(fullWith && {
                alignSelf: 'initial',
            }),
            ...styleSheet,
        }}>
           {children}
        </ButtonBase>
    );
}

Button.defaultProps ={
    fullWith: false,
}

Button.Base = ButtonBase;