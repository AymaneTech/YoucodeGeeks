import Post from "./Cards/Post"

export const Questions = ({ posts }) => {
  return (
    <section>
      <div className=" flex flex-col gap-12 mx-auto items-center">
        {posts.map((post) => {
          return (
            <Post key={post.id} post={post}/>
          )
        })}
      </div >
    </section>
  )
}

