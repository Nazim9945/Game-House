import { HStack, Image} from "@chakra-ui/react"
import logo from '../assets/logo.png'
import ColorSwitchMode from "./ColorSwitchMode";
import SearchInput from "./SearchInput";


const NavBar = () => {
  return (
    <div>
      <HStack padding='10px'>
        <Image src={logo} boxSize="60px" />
        <SearchInput/>
        <ColorSwitchMode />
      </HStack>
    </div>
  );
}

export default NavBar
