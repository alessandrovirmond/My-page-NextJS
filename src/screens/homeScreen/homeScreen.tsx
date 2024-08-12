import Box from "@src/components/box/box";
import Text from "@src/components/text/text";
import Background from "./patterns/background/background";
import Menu from "./patterns/menu/menu";
import Feed from "./patterns/feed/feed";
import Footer from "./patterns/footer/Footer";
import { useTheme } from "styled-components";
import Link from "next/link";

export default function HomeScreen(){
    const theme = useTheme();

    return (
        <Box
            tag="main"
            styleSheet={{
                backgroundColor: theme.colors.neutral,
                flex: 1, 
                alignItems: 'center'
            }}
        >
            <Link href={"/sobre"}>
            Vá para a página Sobre
            </Link>
        <Background/>
        <Menu/>
        <Feed>
            <Feed.Header />
            <Text tag="h2" variant="heading1">
                Últimas Atualizações
            </Text>
            <Feed.Posts />
        </Feed>
        <Footer />
        </Box>
    )
}