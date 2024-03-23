import Post from "./Post"
import { DefaultButton } from "./partials/Buttons"

export const Posts = ({ posts }) => {
  return (
    <section>
      <div className="heading">
        <h1>The Blogs</h1>
        <DefaultButton/>

      </div>

      <div className="flex flex-col gap-12 mx-auto items-center">
        {posts.map((post) => {
          return (
            <Post key={post.id} post={post}/>
          )
        })}
      </div >
    </section>
  )
}

