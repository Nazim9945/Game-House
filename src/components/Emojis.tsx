import smile from '../assets/smile.png'
import bullseye from '../assets/bullseye.png'
import thumbsup from '../assets/thumbsup.png'
import { Image, ImageProps } from '@chakra-ui/react'

interface Props{
    rating:number
}

const Emojis = ({rating}:Props) => {
    if(rating<3) return null

    const emojisMap:{[key:number]:ImageProps} = {
      3: { src: thumbsup, alt: "normal" },
      4: { src: smile, alt: "Better" },
      5: { src: bullseye, alt: "Exceptional" }
    };
  return (
   
      <Image {...emojisMap[rating]} boxSize='25px' marginTop={2}/>
    
  )
}

export default Emojis
