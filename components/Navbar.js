import Link from "next/link"
import { useRouter } from "next/router"

export default function Navbar() {
  const { route } = useRouter()

  return (
    <nav className="w-80 border-r-2 p-6">
      <Link href="/">
        <a className={route === "/" ? "text-orange-500" : ""}>Home</a>
      </Link>
      <Link href="/witherror">
        <a className={route === "/witherror" ? "text-orange-500" : ""}>With error</a>
      </Link>
      <Link href="/norefetchonwindowfocus">
        <a className={route === "/norefetchonwindowfocus" ? "text-orange-500" : ""}>
          No refetch on focus
        </a>
      </Link>
      <Link href="/staletime">
        <a className={route === "/staletime" ? "text-orange-500" : ""}>Stale time</a>
      </Link>
    </nav>
  )
}
