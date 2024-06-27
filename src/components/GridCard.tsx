import { SimpleGrid} from "@chakra-ui/react";
import useGames, { Platform } from "../hooks/useGames";
import GamesCard from "./GamesCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenres";

interface Props{
  selectedGenre:Genre|null,
  selectedPlatform:Platform | null
}
const GridCard = ({selectedGenre,selectedPlatform}:Props) => {
  const { error, data, isLoading } = useGames(selectedGenre,selectedPlatform);
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <div>
      {error && <p>{error}</p>}
      <ul>
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3 }}
          spacing={3}
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
