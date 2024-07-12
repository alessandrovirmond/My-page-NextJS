import Box from "@src/components/box/box";
import Background from "./patterns/background/background";
import Menu from "./patterns/menu/menu";

export default function HomeScreen(){
    return (
        <Box
            tag="main"
        >
        <Background/>
        <Menu/>
        </Box>
    )
}