import React from "react";
import NextLink from 'next/link';
import Text from "../text/text";

interface LinkProps{
    href: string;
    children: React.ReactNode;
}

const Link = React.forwardRef(({href, children,...props} : LinkProps, ref) => {

    const isInternalLink = href.startsWith('http');

    const linkProps = {
        tag: 'a',
        ref,
        children,
        href,
        ...props
    }

    if(isInternalLink) return <Text {...linkProps} />

    return (
        <NextLink href={href} passHref>
            <Text  {...linkProps} />
        </NextLink>
    )
});

export default Link;