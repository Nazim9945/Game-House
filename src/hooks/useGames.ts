import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";

import APIClient from "../services/api-client";

const apiClient=new APIClient<Game>('/games')
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
  rating_top:number
}

const useGames = (gameQuery: GameQuery) => {
  return useQuery({
    queryKey: ["games",gameQuery],
    queryFn: () =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
        }
      }),
    staleTime: 24 * 60 * 60 * 1000,
  });
};
export default useGames;
