import Post from "./Post"

export const Posts = ({ posts }) => {
  return (
    <section>
      <div className="heading">
        <h1>The Blogs</h1>
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

