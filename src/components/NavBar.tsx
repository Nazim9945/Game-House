import { HStack, Image} from "@chakra-ui/react"
import logo from '../assets/logo.png'
import ColorSwitchMode from "./ColorSwitchMode";

const NavBar = () => {
  return (
    <div>
      <HStack justifyContent='space-between' padding='10px'>
        <Image src={logo} boxSize="60px" />
        <ColorSwitchMode />
      </HStack>
    </div>
  );
}

export default NavBar
