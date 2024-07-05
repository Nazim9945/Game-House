import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

import platforms from "../services/platforms";
const apiClient = new APIClient<Platform>("/games");


interface Platform {
  id: number;
  name: string;
  slug: string;
}


const usePlatform = () =>
  useQuery({
    queryKey: ["Platform"],
    queryFn: apiClient.getAll,
    staleTime:24*60*60*1000,
    initialData:platforms
  });

export default usePlatform
