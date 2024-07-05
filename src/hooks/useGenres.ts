import { useQuery } from "@tanstack/react-query";
import apiClient, { FetchResponseData } from "../services/api-client";

import {result} from '../services/genres'
 export interface Genre{
    id:number,
    name:string,
    image_background:string

}





const useGenres=()=>{
    return useQuery({
      queryKey: ["Genres"],
      queryFn: () =>
        apiClient
          .get<FetchResponseData<Genre>>("/genres")
          .then((res) =>res.data.results),
      staleTime: 24 * 60 * 60 * 1000,
      initialData:result
    });

}
export default useGenres