import Box from "@src/components/box/box";
import Text from "@src/components/text/text";
import Background from "./patterns/background/background";
import Menu from "./patterns/menu/menu";
import Feed from "./patterns/feed/feed";
import Footer from "./patterns/footer/Footer";

export default function HomeScreen(){
    return (
        <Box
            tag="main"
        >
        <Background/>
        <Menu/>
        <Feed>
            <Feed.Header />
            <Text tag="h2" variant="display1">
                Últimas Atualizações
            </Text>
            <Feed.Posts />
        </Feed>
        <Footer />
        </Box>
    )
}