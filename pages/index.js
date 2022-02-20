import axios from "axios"
import { useQuery } from "react-query"

export default function Home() {
  const queryInfo = useQuery("pokemons", () =>
    axios.get("https://pokeapi.co/api/v2/pokemon").then((res) => res.data.results)
  )

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1>React Query</h1>
      {queryInfo?.data.map((pokemon) => (
        <p key={pokemon.name}>{pokemon.name}</p>
      ))}
    </div>
  )
}
