import Box from '@src/components/box/box';
import Icon from '@src/components/icon/icon';
import Text from '@src/components/text/text';
import React from 'react';
import Image from '@src/components/image/image';
import Button from '@src/components/button/button';

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
            <Button>
                Olá 
            </Button>
            <Button.Base>

            <Image
            styleSheet={{
                width: '128px',
                 height : '128px',
                 borderRadius: '100%'
            }}
            src="https://github.com/alessandrovirmond.png"
            alt="Imagem de Perfil de Alessandro Virmond"
            />
            <Icon name="youtube"/>
            <Text>
                Feed Base
            </Text>
                            
            </Button.Base>
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
