import { Splide, SplideSlide } from "@splidejs/react-splide"
import '@splidejs/react-splide/css';
import { SliderItem } from "./Cards/SliderItem";

const Posts = ({ posts }) => {
  return (
    <Splide className="my-16 mx-4 md:mx-20" aria-label="new posts slider" options={{
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
  )
}

export default Posts
