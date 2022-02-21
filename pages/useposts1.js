import Layout from "../components/Layout"
import { usePosts } from "../hooks/usePosts"

export default function UsePosts1() {
  const queryInfo = usePosts()

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
