import { useInfiniteQuery} from "@tanstack/react-query";


import APIClient, { FetchResponseData } from "../services/api-client";
import useGameQueryStore from "../GameQueryStore";


const apiClient=new APIClient<Game>('/games')
export interface Platform {
  id: number;
  slug: string;
  name: string;
}
export interface Game {
  id: number;
  name: string;
  slug: string;
  description_raw:string,
  background_image: string;
  metacritic: number;
  parent_platforms: { platform: Platform }[];
  rating_top: number;
}

const useGames = () => {
  const gameQuery=useGameQueryStore(s=>s.gameQuery)
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
