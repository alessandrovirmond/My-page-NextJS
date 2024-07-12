import React from 'react'; 
import { StyleSheet } from "@src/theme/styleSheet";
import { BaseComponent } from '@src/theme/baseComponent';

interface BoxProps{
    tag?: any;
    children?: React.ReactNode;
    styleSheet?: StyleSheet;
}

export default function Box({styleSheet, children, tag, ...props} : BoxProps){
    const Tag = tag || 'div';
    return (
        <BaseComponent as={Tag} styleSheet={styleSheet} {...props}>
            {children}
        </BaseComponent>
    );
}