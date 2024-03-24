import { Code } from "@chakra-ui/react"
import { Heart, MessageCircle, Star } from "lucide-react"

const Post = ({ post }) => {
  return (
    <div className="flex flex-col lg:flex-row bg-[#1C1E27] rounded-3xl shadow-2xl mx-12 min-w-[400px]">
      <div className="w-full lg:w-1/2 relative">
        <img className="rounded-3xl absolute top-0 left-0 w-full h-full object-cover" src="https://imgs.search.brave.com/LaBzFN2aPMRRBuVgfWQX73ITDSqQkfPyW0ey7XKiXFs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXIuZG9nL2xh/cmdlLzIwNTEzMDQ3/LmpwZw" alt="" />
      </div>
      <div className="px-4 lg:px-8 py-4 w-full lg:w-1/2">
        <div className="header flex flex-col lg:flex-row justify-between items-center">
          <div className="flex items-center gap-2">
            <img src={post.author.image.path} className="w-10 h-10 rounded-full" alt="" />
            <strong>{post.author.name}</strong>
            <span className="text-xs text-gray-300 ml-6">{post.created_at}</span>
          </div>
          <div className="category text-sm font-mono">
            <span className="border border-gray-50 rounded-xl px-4 py-1">{post.category.name}</span>
          </div>
        </div>

        <div className="content my-6">
          <h1 className="font-bold text-4xl my-2">{post.title}</h1>
          <p>{post.description}</p>
        </div>

        <div className="flex flex-wrap items-center gap-2 my-4">
          {post.tags.map(tag => <span className="px-2 bg-[#4771e2] rounded-xl">{tag}</span>)}
        </div>

        <div className="footer flex justify-between items-center mt-4 lg:mt-0">
          <div className="flex gap-4 items-center">
            <Star />
            <div className="flex gap-2 items-center">
              <MessageCircle />
              {post.comments_count} comment
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <Heart />
            {post.likes_count} like
          </div>
        </div>

      </div>

    </div>

  )
}

export default Post
