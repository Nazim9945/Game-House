import { Heading } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import usePlatform from "../hooks/usePlatform";
import useGameQueryStore from "../GameQueryStore";

const DynamicHeading = () => {
  const { data: genres } = useGenres();

  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const genre = genres.results.find((g) => g.id === genreId);
  const { data: platforms } = usePlatform();
  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const platform = platforms.results.find((g) => g.id === platformId);
  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading as="h1" marginBottom={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default DynamicHeading;
