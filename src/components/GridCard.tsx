import { Box, Button, SimpleGrid,Text} from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GamesCard from "./GamesCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";
import React from "react";

interface Props{
  gameQuery:GameQuery
  
}
const GridCard = ({gameQuery}:Props) => {
  const { error, data, isLoading ,isFetchingNextPage,hasNextPage,fetchNextPage} = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];
  if(error) return <Text>{error.message}</Text>
  return (
    <Box padding="10px">
      <div>
        <ul>
          <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={6}>
            {isLoading &&
              skeletons.map((skeleton) => (
                <GameCardContainer key={skeleton}>
                  <GameCardSkeleton />
                </GameCardContainer>
              ))}
            {data?.pages.map((page, index) => (
              <React.Fragment key={index}>
                {page.results.map((data) => (
                  <GameCardContainer key={data.id}>
                    <GamesCard game={data} />
                  </GameCardContainer>
                ))}
              </React.Fragment>
            ))}
          </SimpleGrid>
        </ul>
      </div>
      {hasNextPage && (
        <Button marginY={5} onClick={() => fetchNextPage()}>
          {isFetchingNextPage ? "Loading..." : "Load More"}
        </Button>
      )}
    </Box>
  );
};

export default GridCard;
