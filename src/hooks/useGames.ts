import { useInfiniteQuery} from "@tanstack/react-query";
import { GameQuery } from "../App";

import APIClient, { FetchResponseData } from "../services/api-client";

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
  return useInfiniteQuery<FetchResponseData<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({pageParam}) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page:pageParam
        },
      }),
    initialPageParam: 1,
    getNextPageParam: (lastpage, allpage) => {
      return lastpage.next?allpage.length + 1:undefined;
    },
  });
};
export default useGames;
