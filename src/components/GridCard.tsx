

import { useEffect, useState } from "react"
import apiClient from "../services/api-client";

interface Game{
    id:number,
    name:string
}
interface FetchGamesData{
    count:number,
    results:Game[]
}
const GridCard = () => {
    const[games,setGame]=useState<Game[]>([]);
    const[error,setError]=useState('');
    useEffect(()=>{
        apiClient.get<FetchGamesData>('/games').then((res)=>{
            setGame(res.data.results)
        })
        .catch(err=>setError(err.message))
    },[])
  return (
    <div>
      {error && <p>{error}</p>}
      <ul>
        {games.map(game=>{
            return <li key={game.id}>{game.name}</li>
        })}
      </ul>
    </div>
  )
}

export default GridCard
