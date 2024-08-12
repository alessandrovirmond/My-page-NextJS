import { BaseComponent } from "@src/theme/BaseComponent";
import { StyleSheet } from "@src/theme/styleSheet";

interface ImageProps{
    src: string;
    alt: string;
    styleSheet?: StyleSheet;
}

export default function Image({ src, alt, ...props}){
    return (
        <BaseComponent
            as="img"
            src={src}
            alt={alt}
            {...props}
        />
    )
}