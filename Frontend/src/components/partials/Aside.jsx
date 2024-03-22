import { MoreVertical, ChevronLast, ChevronFirst, Menu } from "lucide-react"
import { useContext, createContext, useState } from "react"
import { Link } from "react-router-dom"

const SidebarContext = createContext()

export function Aside({ children }) {
  const [expanded, setExpanded] = useState(true)

  return (
    <aside className={`hidden lg:block fixed ${expanded ? "w-75" : "w-[70px]"} `}>
      <nav className="h-full flex flex-col  text-[#F8FAF9] border-r border-[#353838] shadow-sm ">
        <div className="p-4 pb-2 flex justify-between items-center">

          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="py-2 px-3 rounded-lg  hover:bg-[#1a4cd3] hover:text-[#7b71f93]"
          >
            {expanded ? <Menu /> : <Menu />}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>
      </nav>
    </aside>
  )
}

export function SidebarItem({ item }) {
  const { to, icon, text, active, alert } = item;
  const { expanded } = useContext(SidebarContext)

  return (
    <Link
      to={`/${to}`}
      className={`
      relative flex items-center py-2 px-3 my-1
      font-medium rounded-md cursor-pointer
      transition-colors group
      ${active
          ? "bg-gradient-to-tr from-[#1B4CD2] to-[#4767c0] text-indigo-800"
          : "hover:bg-indigo-50 hover:text-[#202222] text-white"
        }
      ${active && "text-white"}
  `}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${expanded ? "" : "top-2"}`}
        />
      )}
      {!expanded && (
        <div
          className={`
          absolute left-full rounded-md px-2 py-1 ml-6
          bg-indigo-100 text-indigo-800 text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
          ${active && "text-white"}
        `}
        >
          {text}
        </div>
      )}
    </Link>

  )
}