import Navbar from "./Navbar"

export default function Layout({ children }) {
  return (
    <div className="py-4">
      <h1 className="text-xl font-bold mb-4 text-center">React Query</h1>
      <div className="flex min-h-screen max-w-6xl mx-auto border-2">
        <Navbar />
        {children}
      </div>
    </div>
  )
}
