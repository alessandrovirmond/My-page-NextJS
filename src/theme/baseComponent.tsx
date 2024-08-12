import React from 'react'; 
import styled from 'styled-components';
import { StyleSheet } from "@src/theme/styleSheet"
import { parseStyleSheet } from '@skynexui/responsive_stylesheet';

interface StyledBaseComponent{
    ref: any;
    styleSheet?: StyleSheet;
}

const StyledBaseComponent = styled.div<StyledBaseComponent>`
    ${({styleSheet}) => parseStyleSheet(styleSheet)}
`;

const BaseComponent = React.forwardRef<unknown, any>((props, ref) => {
    return (
        <StyledBaseComponent ref={ref} {...props} />
    )
});

BaseComponent.defaultProps = {
    styleSheet: {},
}