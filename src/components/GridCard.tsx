import { SimpleGrid} from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GamesCard from "./GamesCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

const GridCard = () => {
  const { error, games, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <div>
      {error && <p>{error}</p>}
      <ul>
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3 }}
          spacing={10}
          padding="10px"
        >
          {isLoading &&
            skeletons.map((skeleton) => (
              <GameCardContainer>
                <GameCardSkeleton key={skeleton} />
              </GameCardContainer>
            ))}
          {games.map((game) => (
            <GameCardContainer>
              <GamesCard key={game.id} game={game} />
            </GameCardContainer>
          ))}
        </SimpleGrid>
      </ul>
    </div>
  );
};

export default GridCard;
