import { Box, SimpleGrid,Spinner,Text} from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GamesCard from "./GamesCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";



const GridCard = () => {
  
  const { error, data, isLoading ,hasNextPage,fetchNextPage} = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];
  const fetchdataLength=data?.pages.reduce((total,page)=>total+page.results.length,0) || 0
  if(error) return <Text>{error.message}</Text>
  return (
    <Box padding="10px">
      <div>
          <InfiniteScroll 
          dataLength={fetchdataLength}
          hasMore={hasNextPage}
          next={fetchNextPage}
          loader={<Spinner marginY={5}/>}>
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
          </InfiniteScroll>
      </div>
    </Box>
  );
};

export default GridCard;
