import {useQuery } from "@tanstack/react-query"
import APIClient from "../services/api-client"
import { Game } from "./useGames"


const usegame = (slug:string) => {
    const apiClient=new APIClient<Game>('/games')
  return useQuery({
    queryKey:['games',slug],
    queryFn:()=>apiClient.get(slug)
  })
}

export default usegame