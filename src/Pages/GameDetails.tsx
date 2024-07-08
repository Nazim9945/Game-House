import { useParams } from "react-router-dom"
import useGame from "../hooks/useGame"
import { GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import ExpendableText from "../components/ExpendableText";
import GameTrailer from "../components/GameTrailer";
import ScreenshotsGame from "../components/ScreenshotsGame";


const GameDetails = () => {
    const {slug}=useParams();
    const {data:games,isLoading,error}=useGame(slug!)
    if(isLoading) return <Spinner/>
    if(error || !games) throw error;


  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
      <GridItem>
        <Heading as={"h1"}>{games?.name}</Heading>
        <ExpendableText>{games.description_raw}</ExpendableText>
      </GridItem>
      <GridItem>
        <GameTrailer gameId={games.id} />
        <ScreenshotsGame gameId={games.id} />
      </GridItem>
    </SimpleGrid>
  );
}

export default GameDetails