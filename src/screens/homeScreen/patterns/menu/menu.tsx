import Box from "@src/components/box/box";
import Button from "@src/components/button/button";
import Icon from "@src/components/icon/icon";
import Text from "@src/components/text/text"
import { useTheme } from "@src/theme/ThemeProvider";

export default function Menu(){
    const theme = useTheme();
    const baseSize = '40px';

    return (
        <Box
            styleSheet={{
                position: 'absolute',
                left: 0, top: 0, right: 0,
                flexDirection: 'row',
                justifyContent:'space-between',
                paddingVertical: '16px',
                paddingHorizontal: '20px',
                color: theme.colors.neutral.x000
            }}
        >
        <Button.Base
            styleSheet={{
                borderRadius:'100%',
                width: baseSize,
                height: baseSize,
                backgroundColor: theme.colors.primary.x500,
                alignItems: 'center',
                jutifyContent: 'center',
                paddingHorizontal: '8px',
                paddingVertical: '8px',
                hover: {
                    backroundColro: theme.colors.primary.x400,
                },
                focus:{
                    backgroundColor : theme.colors.primary.x600
                }
            }}
        >
            <Text>
                MS
            </Text>
        </Button.Base>
        <Button.Base
             styleSheet={{
                borderRadius:'100%', 
                width: baseSize,
                height: baseSize,
                backgroundColor: theme.colors.neutral.x500,
                alignItems: 'center',
                jutifyContent: 'center',
                paddingHorizontal: '8px',
                paddingVertical: '8px',
                hover: {
                    backroundColro: theme.colors.neutral.x400,
                },
                focus:{
                    backgroundColor : theme.colors.neutral.x600
                }
            }}
        >
            <Icon name="youtube"/>
        </Button.Base>
           
        </Box>
    )
}