import Box from '@src/components/box/box';
import Icon from '@src/components/icon/icon';
import Text from '@src/components/text/text';
import React from 'react';


interface FeedProps {
    children: React.ReactNode;
}

export default function Feed({children}){
    return (
        <Box>
            <Text>
                Feed Base
            </Text>
           {children}
        </Box>
    )
}

Feed.Header = () => {
    return (
        <Box>
            <Icon name="youtube"/>
            <Icon name="twitter"/>
            <Icon name="instagram"/>
            <Icon name="github"/>
            <Text>
                Feed Base
            </Text>
        </Box>
    )
}
Feed.Posts = () => {
    return (
        <Box>
            <Text>
                Feed Base
            </Text>
        </Box>
    )
}
