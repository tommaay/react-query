import axios from "axios"
import { useQuery } from "react-query"
import Layout from "../components/Layout"

export default function Home() {
  const queryInfo = useQuery("posts", async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    if (true) {
      throw new Error("ERROR: Mocking an error here")
    }
    return axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => res.data)
  })

  console.log(queryInfo)

  return (
    <div className="max-w-6xl mx-auto border">
      <Layout>
        <div className="p-4 text-center w-full">
          <h1 className="text-xl font-bold mb-4">React Query</h1>
          {queryInfo.isLoading ? (
            <p>Loading...</p>
          ) : queryInfo.isError ? (
            <p className="text-red-700">{queryInfo.error.message}</p>
          ) : (
            queryInfo.data?.map((item) => <p key={item.title}>{item.title}</p>)
          )}
        </div>
      </Layout>
    </div>
  )
}
