import { SimpleGrid} from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GamesCard from "./GamesCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";

interface Props{
  gameQuery:GameQuery
  
}
const GridCard = ({gameQuery}:Props) => {
  const { error, data, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <div>
      {error && <p>{error}</p>}
      <ul>
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3 }}
          spacing={6}
          padding="10px"
        >
          {isLoading &&
            skeletons.map((skeleton) => (
              <GameCardContainer key={skeleton}>
                <GameCardSkeleton />
              </GameCardContainer>
            ))}
          {data.map((game) => (
            <GameCardContainer key={game.id}>
              <GamesCard game={game} />
            </GameCardContainer>
          ))}
        </SimpleGrid>
      </ul>
    </div>
  );
};

export default GridCard;
