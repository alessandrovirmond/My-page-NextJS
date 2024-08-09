import { BaseComponent } from "@src/theme/BaseComponent";

interface ImageProps{
    src: string;
    alt: string;
}

export default function Image({ src, alt, ...props}){
    return (
        <BaseComponent
            src={src}
            alt={alt}
            {...props}
        />
    )
}