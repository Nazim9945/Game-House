import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";


interface ScreenShots{
    id:number,
    image:string,
    width:number,
    height:number
}
const useScreenShots = (gameId: number) => {
const apiClient=new APIClient<ScreenShots>(`/games/${gameId}/screenshots`)
 return useQuery({
    queryKey:["ScreenShots",gameId],
    queryFn:apiClient.getAll
 })
};

export default useScreenShots