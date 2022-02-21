import axios from "axios"
import { useQuery } from "react-query"
import Layout from "../components/Layout"

function Posts({ queryKey }) {
  const queryInfo = useQuery(queryKey, async () => {
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

export default function QueryKeyCache() {
  return (
    <Layout>
      <>
        {/* This will only make 1 api call */}
        <Posts queryKey="posts1" />
        <Posts queryKey="posts1" />
      </>
    </Layout>
  )
}
