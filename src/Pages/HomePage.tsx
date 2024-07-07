import { Grid, Show, GridItem, Box, HStack } from '@chakra-ui/react';
import DynamicHeading from '../components/DynamicHeading';
import GenreList from '../components/GenreList';
import GridCard from '../components/GridCard';
import PlatformSelector from '../components/PlatformSelector';
import SortSelector from '../components/SortSelector';

const HomePage = () => {
   return (
     <>
       <Grid
         templateAreas={{
           base: `"main"`,
           lg: `"aside main"`,
         }}
         templateColumns={{
           base: "1fr",
           lg: "200px 1fr",
         }}
       >
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
}

export default HomePage