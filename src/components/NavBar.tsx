import { HStack, Image} from "@chakra-ui/react"
import logo from '../assets/logo.png'
import ColorSwitchMode from "./ColorSwitchMode";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";


const NavBar = () => {
  return (
    <div>
      <HStack padding="10px">
        <Link to='/'>
          <Image src={logo} boxSize="60px" objectFit='contain'/>
        </Link>
        <SearchInput />
        <ColorSwitchMode />
      </HStack>
    </div>
  );
}

export default NavBar
