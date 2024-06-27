import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import croppedUrl from "../services/image-url";





const GenreList = () => {
    const {data}=useGenres();

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
