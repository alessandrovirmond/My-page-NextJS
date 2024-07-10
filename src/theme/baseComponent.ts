import React from 'react'; 
import { StyleSheet } from "@src/theme/styleSheet"
import styled from 'styled-components';
import { parseStyleSheet } from '@skynexui/responsive_stylesheet';

interface StyledBaseComponent{
    styleSheet?: StyleSheet;
}

const StyledBaseComponent = styled.div<StyledBaseComponent>`
    ${({styleSheet}) => parseStyleSheet(styleSheet)}
`;

export const BaseComponent = (props) => {
    return (
        <StyledBaseComponent {...props} />
    )
}

BaseComponent.defaultProps = {
    styleSheet: {},
}