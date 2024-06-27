import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import croppedUrl from "../services/image-url";





const GenreList = () => {
    const {data,isLoading,error}=useGenres();

    if(error) return null;
    if(isLoading) return <Spinner/>

  return (
    <List>
      {data.map((genre) => (
        <ListItem paddingY="5px">
          <HStack>
            <Image
              borderRadius={8}
              boxSize="32px"
              src={croppedUrl(genre.image_background)}
            />
            <Text fontSize='lg'>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}

export default GenreList
