import useData from "./useData";
import { Genre } from "./useGenres";

export interface Platform {
  id: number;
  slug: string;
  name: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  metacritic: number;
  parent_platforms: { platform: Platform }[];
}

const useGames = (selectedgenre: Genre | null) => {
  return useData<Game>("/games", { params: { genres: selectedgenre?.id } }, [
    selectedgenre?.id,
  ]);
};
export default useGames;
