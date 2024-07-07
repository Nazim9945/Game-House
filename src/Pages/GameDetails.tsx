import { useParams } from "react-router-dom"
import useGame from "../hooks/useGame"
import { Heading, Spinner, Text } from "@chakra-ui/react";


const GameDetails = () => {
    const {slug}=useParams();
    const {data:games,isLoading,error}=useGame(slug!)
    if(isLoading) return <Spinner/>
    if(error || !games) throw error;


  return (
    <>
    <Heading as={'h1'}>{games?.name}</Heading>
    <Text>{games.description_raw}</Text>
    </>
  )
}

export default GameDetails