import { useQuery } from "@tanstack/react-query";
import apiClient, { FetchResponseData } from "../services/api-client";

import platforms from "../services/platforms";



interface Platform {
  id: number;
  name: string;
  slug: string;
}


const usePlatform = () =>
  useQuery({
    queryKey: ["Platform"],
    queryFn: () => apiClient.get<FetchResponseData<Platform>>("/platforms/lists/parents").then((res)=>res.data.results),
    staleTime:24*60*60*1000,
    initialData:platforms
  });

export default usePlatform
