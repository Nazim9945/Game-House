import useGames from "../hooks/useGames"


const GridCard = () => {
    const {error,games}=useGames();
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
