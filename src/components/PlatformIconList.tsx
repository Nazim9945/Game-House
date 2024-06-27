import { Platform } from "../hooks/useGames";
import { HStack, Icon } from "@chakra-ui/react";
import {IconType} from 'react-icons'
import {
  FaWindows,
  FaApple,
  FaXbox,
  FaAndroid,
  FaLinux,
  FaPlaystation,
} from "react-icons/fa";
import {MdPhoneIphone} from 'react-icons/md'
import {SiNintendo} from 'react-icons/si'
import {BsGlobe} from 'react-icons/bs'
interface Props {
  platforms: Platform[];
}
const PlatformIconList = ({ platforms }: Props) => {
    const iconMap:{[key:string]:IconType} = {
      pc:FaWindows,
      mac:FaApple,
      xbox:FaXbox,
      android:FaAndroid,
      linux:FaLinux,
      playstation:FaPlaystation,
      nintendo:SiNintendo,
      ios:MdPhoneIphone,
      web:BsGlobe
    };
  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon key={platform.id} as={iconMap[platform.slug]} color='gray.500'/>
      ))}
    </HStack>
  );
};

export default PlatformIconList;
