import Question from "./Cards/Question"

export const Questions = ({ posts }) => {
  return (
    <section>
      <div className=" flex flex-col gap-12  items-center">
        {posts.map((post) => {
          return (
            <Question key={post.id} post={post}/>
          )
        })}
      </div >
    </section>
  )
}

