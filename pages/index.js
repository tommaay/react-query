import axios from "axios"
import { useQuery } from "react-query"

export default function Home() {
  const queryInfo = useQuery("pokemons", async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    return axios.get("https://pokeapi.co/api/v2/pokemon").then((res) => res.data.results)
  })

  return (
    <div className="max-w-6xl mx-auto p-4 text-center">
      <h1 className="text-xl font-bold mb-4">React Query</h1>
      {queryInfo.isLoading ? (
        <p>Loading...</p>
      ) : (
        queryInfo.data?.map((pokemon) => <p key={pokemon.name}>{pokemon.name}</p>)
      )}
    </div>
  )
}
