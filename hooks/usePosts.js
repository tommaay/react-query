import axios from "axios"
import { useQuery } from "react-query"

export function usePosts() {
  return useQuery(
    "posts",
    async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      return axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.data.slice(0, 10))
    },
    {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    }
  )
}
