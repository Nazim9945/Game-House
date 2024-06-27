import useData from "./useData";


export interface Platform{
    id:number,
    slug:string,
    name:string
}
export interface Game{
    id:number,
    name:string,
    background_image:string,
    metacritic:number,
    parent_platforms:{platform:Platform}[]
}


const useGames=()=>{
    return useData<Game>('/games');
}
export default useGames