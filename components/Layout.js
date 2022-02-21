import Navbar from "./Navbar"

export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen">
      <Navbar />
      {children}
    </div>
  )
}
