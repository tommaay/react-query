import { useState } from "react"
import axios, { CancelToken } from "axios"
import { useQuery } from "react-query"
import Layout from "../components/Layout"

function PokemonInfo({ pokemon }) {
  const queryInfo = useQuery(
    ["pokemon", pokemon],
    () => {
      const source = CancelToken.source()

      const promise = new Promise((resolve) => setTimeout(resolve, 1000)).then(() => {
        return axios
          .get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`, { cancelToken: source.token })
          .then((res) => res.data)
      })

      promise.cancel = () => {
        source.cancel("Query was canceled")
      }

      return promise
    },
    { enabled: !!pokemon, retry: 2, retryDelay: 1000 } // prevents an initial call when the input is empty on load
  )

  return queryInfo.isLoading ? (
    <p>Loading...</p>
  ) : queryInfo.isError ? (
    queryInfo.error.message
  ) : (
    <div>
      {queryInfo.data?.sprites?.front_default ? (
        <img src={queryInfo.data.sprites.front_default} alt="pokemon" />
      ) : (
        "Pokemon not found."
      )}
      {queryInfo.isFetching && <p className="mt-5 text-gray-700">Updating...</p>}
    </div>
  )
}

export default function PokemonSearch() {
  const [pokemon, setPokemon] = useState("")

  return (
    <Layout>
      <input value={pokemon} onChange={(e) => setPokemon(e.target.value)} className="border mb-2" />
      <PokemonInfo pokemon={pokemon} />
    </Layout>
  )
}
