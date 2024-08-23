import Box from '@src/components/box/box';
import Icon from '@src/components/icon/icon';
import Text from '@src/components/text/text';
import React from 'react';
import Image from '@src/components/image/image';
import Button from '@src/components/button/button';
import { useTheme } from '@src/theme/ThemeProvider';


interface FeedProps {
    children: React.ReactNode;
}

export default function Feed({children}){
    const theme = useTheme();
    return (
        <Box
            styleSheet={{
                backgroundColor: theme.colors.neutral.x000,
                marginTop: '-228px',
                width: '100%',
                maxWidth: '683px',
                borderRadius: '8px',
                paddingVertical: '40px',
                paddingHorizontal: '32px',
            }}
        >
            
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
