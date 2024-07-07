import { Button, HStack, Heading, Image, List, ListItem, Spinner} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import croppedUrl from "../services/image-url";
import useGameQueryStore from "../GameQueryStore";





const GenreList = () => {
    const {data,isLoading,error}=useGenres();
   const genreId=useGameQueryStore(s=>s.gameQuery.genreId)
   const setGenreId=useGameQueryStore(s=>s.setGenreId)

    if(error) return <p>{error.message}</p>;
    if(isLoading) return <Spinner/>

  return (
    <>
      <Heading fontSize='2xl' marginBottom={3}>Genres</Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                borderRadius={8}
                boxSize="32px"
                src={croppedUrl(genre.image_background)}
                objectFit={"cover"}
              />
              <Button
                whiteSpace="normal"
                textAlign={"left"}
                fontWeight={genre.id ===genreId ? "bold" : "normal"}
                fontSize="lg"
                variant={"link"}
                onClick={() => setGenreId(genre.id)}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default GenreList
