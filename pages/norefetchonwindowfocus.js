import axios from "axios"
import { useQuery } from "react-query"
import Layout from "../components/Layout"

export default function Home() {
  const queryInfo = useQuery(
    "posts",
    async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      return axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.data.slice(0, 10))
    },
    {
      refetchOnWindowFocus: false,
    }
  )

  // console.log(queryInfo)

  return (
    <div className="max-w-6xl mx-auto border-2">
      <Layout>
        <div className="p-4 text-center w-full">
          <h1 className="text-xl font-bold mb-4">React Query</h1>
          {queryInfo.isLoading ? (
            <p>Loading...</p>
          ) : (
            queryInfo.data.map((item) => <p key={item.title}>{item.title}</p>)
          )}
          {queryInfo.isFetching && <p className="mt-5 text-gray-700">Updating...</p>}
        </div>
      </Layout>
    </div>
  )
}
