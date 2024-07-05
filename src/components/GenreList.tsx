import { Button, HStack, Heading, Image, List, ListItem, Spinner} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import croppedUrl from "../services/image-url";



interface Props{
    onSelectedGenre:(genre:Genre)=>void,
    selectedGenre:Genre|null
}

const GenreList = ({onSelectedGenre,selectedGenre}:Props) => {
    const {data,isLoading,error}=useGenres();
    // console.log(data)

    if(error) return <p>{error.message}</p>;
    if(isLoading) return <Spinner/>

  return (
    <>
      <Heading fontSize='2xl' marginBottom={3}>Genres</Heading>
      <List>
        {data?.map((genre) => (
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
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                fontSize="lg"
                variant={"link"}
                onClick={() => onSelectedGenre(genre)}
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
