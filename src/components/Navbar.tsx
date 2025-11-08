import Link from "next/link"
import SearchBar from "./SearchBar"
import { Bell, Home, ShoppingCart } from "lucide-react"
import ShoppingCartIcon from "./ShoppingCartIcon"

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between pb-4 border-b border-gray-200">
        {/* LEFT */}
        <Link href={"/"}>
            <p className="text-base font-medium uppercase tracking-wider">Nova Store</p>
        </Link>
        {/* RIGHT */}
        <div className="flex items-center gap-6">
            <SearchBar />
            <Link href={"/"}>
                <Home className="w-4 h-4 text-gray-600" />
            </Link>
            <Bell className="w-4 h-4 text-gray-600" />
            <ShoppingCartIcon/>
            <Link href={"/login"}>Sign in</Link>
        </div>
    </nav>
  )
}

export default Navbar