import { Image, SimpleGrid, Text} from "@chakra-ui/react";
import useScreenShots from "../hooks/useScreenShots";




const ScreenshotsGame = ({gameId}:{gameId:number}) => {
    const {data,error}=useScreenShots(gameId)

    if(error) return(<>
    <Text>No Screen Shots Available for this.</Text>
    </>)
   
  return (
    <>
    <SimpleGrid spacing={2} columns={{base:1,md:2}}>
        {data?.results.map(img=>(<Image key={img.id} src={img.image}/>))}

    </SimpleGrid>
    </>
  )
}

export default ScreenshotsGame