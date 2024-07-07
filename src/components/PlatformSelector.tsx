import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../hooks/usePlatform";
import useGameQueryStore from "../GameQueryStore";



const PlatformSelector = () => {
  const { data, error } = usePlatform();
  const platformId=useGameQueryStore(s=>s.gameQuery.platformId)
  const setPlatformId=useGameQueryStore(s=>s.setPlateformId)
  const platforms=data.results.find(platform=>platform.id===platformId);
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {platforms?.name || 'Platforms'}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem onClick={()=>setPlatformId(platform.id)} key={platform.id}>{platform.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
