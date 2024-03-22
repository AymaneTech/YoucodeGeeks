import { Bell, Menu, Moon, Search } from "lucide-react"
import { Discord } from "../../pages/icons/Discord"

const Navbar = () => {
  return (
    <nav className="col-span-12 flex justify-between items-center gap-2 mx-4 my-4">
      <div className="logo">
        <h2 className="font-bold font-mono text-lg md:text-2xl">Youcode <span className="text-[#1B4CD2]">{"{"}Geeks{"}"}</span></h2>
      </div>

      <form>
        <div className="bg-[#1C1E27] rounded-xl focus:border focus:border-gray-50 p-3 flex items-center gap-4">
          <Search />
          <input type="text" placeholder="Type to search" className="bg-[#1C1E27] focus:outline-none focus:border-none w-full" />
          <div className="shortuct flex gap-2">
            <span className="bg-[#363939] px-2 py-1 text-xs rounded-sm ">Ctrl</span>
            +
            <span className="bg-[#363939] px-2 py-1 text-xs rounded-sm ">K</span>
          </div>
        </div>
      </form>

      <ul className="other-icons flex items-center gap-4">
        <li className="transition duration-300 ease-in-out transform hover:scale-110">
          <Bell />
        </li>
        <li className="transition duration-300 ease-in-out transform hover:scale-110">
          <Moon />
        </li>
        <li className="transition duration-300 ease-in-out transform hover:scale-110">
          <Discord />
        </li>
        <li className="block md:hidden">
          <Menu />
        </li>
      </ul>
    </nav>

  )
}

export default Navbar
