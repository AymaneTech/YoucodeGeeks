import { FileJson, MessageSquareMore, Newspaper, SlidersHorizontal, Star } from "lucide-react"
import Post from "./Post"

export const Questions = ({ posts }) => {
  return (
    <section className="mx-12">
      <div className="heading my-4">
        <h1 className="text-5xl text-white font-bold">The Questions</h1>
        <div className="mt-2 flex justify-between items-center text-[#7B7F93]">
          <ul className="flex items-center gap-12">
            <li className="p-3 flex gap-1 items-center text-white border-b border-white ">
              <FileJson size={20} />
              <span className="text-sm">New bugs</span>
            </li>
            <li className="p-3 flex gap-1 items-center hover:text-white hover:border-b hover:border-white">
              <MessageSquareMore size={20} />
              <span className="text-sm">Popular</span>
            </li>
            <li className="p-3 flex items-center gap-1 hover:text-white hover:border-b hover:border-white">
              <Star size={20} />
              <span className="text-sm">Saved </span>
            </li>
            <li className="p-3 flex gap-1 items-center hover:text-white hover:border-b hover:border-white">
              <Newspaper size={20} />
              <span className="text-sm">New bugs</span>
            </li>
          </ul>
          <button className="flex items-center gap-4 border border-[#7B7F93] text-[#7B7F93] p-2 rounded-xl hover:border-white hover:text-white">
            <SlidersHorizontal size={20} />
            filters
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-12 items-center">
        {posts.map((post) => {
          return (
            <Post key={post.id} post={post} />
          )
        })}
      </div >
    </section>
  )
}

