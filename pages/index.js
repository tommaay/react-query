import axios from "axios"
import { useQuery } from "react-query"
import Layout from "../components/Layout"

export default function Home() {
  const queryInfo = useQuery("posts", async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    return axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.data.slice(0, 10))
  })

  return (
    <Layout>
      <>
        {queryInfo.isLoading ? (
          <p>Loading...</p>
        ) : (
          queryInfo.data.map((item) => <p key={item.title}>{item.title}</p>)
        )}
        {queryInfo.isFetching && <p className="mt-5 text-gray-700">Updating...</p>}
      </>
    </Layout>
  )
}
