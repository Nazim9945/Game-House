import { useParams } from "react-router-dom"
import useGame from "../hooks/useGame"
import { Heading, Spinner } from "@chakra-ui/react";
import ExpendableText from "../components/ExpendableText";
import GameTrailer from "../components/GameTrailer";


const GameDetails = () => {
    const {slug}=useParams();
    const {data:games,isLoading,error}=useGame(slug!)
    if(isLoading) return <Spinner/>
    if(error || !games) throw error;


  return (
    <>
    <Heading as={'h1'}>{games?.name}</Heading>
    <ExpendableText>{games.description_raw}</ExpendableText>
    <GameTrailer gameId={games.id}/>
    </>
  )
}

export default GameDetails