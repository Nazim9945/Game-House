import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../hooks/usePlatform";


interface Props{
    onSelectedPlatform:(platform:number)=>void,
        selectedPlatformId?:number
}
const PlatformSelector = ({onSelectedPlatform,selectedPlatformId}:Props) => {
  const { data, error } = usePlatform();
  const platforms=data.results.find(platform=>platform.id===selectedPlatformId);
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {platforms?.name || 'Platforms'}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem onClick={()=>onSelectedPlatform(platform.id)} key={platform.id}>{platform.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
