import { Splide, SplideSlide } from "@splidejs/react-splide"
import '@splidejs/react-splide/css';
import { SliderItem } from "./Cards/SliderItem";
import { Button } from "@chakra-ui/react";

const Posts = ({ posts }) => {
  return (
    <section className="my-12">
      <div className="flex justify-between items-center">
        <h1 className="font-bold font-mono text-3xl">Latest posts</h1>
        <Button colorScheme="blue">view all</Button>
      </div>
      <Splide className="my-12" aria-label="new posts slider" options={{
        type: 'loop',
        perPage: {
          breakpoint: 'max',
          mobile: 1,
          tablet: 2,
        }, arrows: false, pagination: false, drag: "free", gap: "5rem"
      }}>
        {posts.map((post) => {
          return (
            <SliderItem key={post.id} post={post} />
          )
        })}
      </Splide>
    </section>
  )
}

export default Posts
