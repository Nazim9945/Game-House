import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames"
import GamesCard from "./GamesCard";


const GridCard = () => {
    const {error,games}=useGames();
  return (
    <div>
      {error && <p>{error}</p>}
      <ul>
        <SimpleGrid columns={{sm:1 , md:2 ,lg:3}} spacing={10} padding='10px'>
        {games.map(game=>(
          <GamesCard key={game.id} game={game}/>
        ))}
        </SimpleGrid>
      </ul>
    </div>
  )
}

export default GridCard
