import { HStack, Image} from "@chakra-ui/react"
import logo from '../assets/logo.png'
import ColorSwitchMode from "./ColorSwitchMode";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}
const NavBar = ({onSearch}:Props) => {
  return (
    <div>
      <HStack padding='10px'>
        <Image src={logo} boxSize="60px" />
        <SearchInput onSearch={onSearch}/>
        <ColorSwitchMode />
      </HStack>
    </div>
  );
}

export default NavBar
