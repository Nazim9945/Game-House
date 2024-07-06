import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GridCard from "./components/GridCard";
import GenreList from "./components/GenreList";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import DynamicHeading from "./components/DynamicHeading";

export interface GameQuery{
  genreId?:number,
  platformId?:number,
  sortOrder:string,
  searchText:string
}
const App=()=> {
 
  const [gameQuery,setgameQuery]=useState<GameQuery>({} as GameQuery)
  

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area="nav">
          <NavBar
            onSearch={(searchText) =>
              setgameQuery({ ...gameQuery, searchText })
            }
          />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <GenreList
              selectedGenreId={gameQuery.genreId}
              onSelectedGenre={(genreId) => setgameQuery({ ...gameQuery, genreId })}
            />
          </GridItem>
        </Show>
        <GridItem area="main">
          <Box paddingX={2}>
            <DynamicHeading gameQuery={gameQuery} />
            <HStack spacing={5} marginBottom={5}>
              <PlatformSelector
                selectedPlatformId={gameQuery.platformId}
                onSelectedPlatform={(platformId) =>
                  setgameQuery({ ...gameQuery, platformId })
                }
              />
              <SortSelector
                sortOrder={gameQuery.sortOrder}
                onSortSelected={(sortOrder) =>
                  setgameQuery({ ...gameQuery, sortOrder })
                }
              />
            </HStack>
          </Box>
          <GridCard gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App
