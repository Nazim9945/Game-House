import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GridCard from "./components/GridCard";
import GenreList from "./components/GenreList";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import DynamicHeading from "./components/DynamicHeading";

const App = () => {
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
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <GenreList />
          </GridItem>
        </Show>
        <GridItem area="main">
          <Box paddingX={2}>
            <DynamicHeading />
            <HStack spacing={5} marginBottom={5}>
              <PlatformSelector />
              <SortSelector />
            </HStack>
          </Box>
          <GridCard />
        </GridItem>
      </Grid>
    </>
  );
};

export default App;
