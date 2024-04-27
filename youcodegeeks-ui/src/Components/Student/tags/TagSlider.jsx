import {Link} from "react-router-dom";
import {Splide, SplideSlide} from "@splidejs/react-splide";

export const TagSlider = ({tags}) => {
    return (
        <>
                <Splide className="my-6" aria-label="new posts slider" options={{
                    type: 'loop',
                    perPage: {
                        breakpoint: 'max',
                        mobile: 1,
                        tablet: 2,
                    }, arrows: true, pagination: false, drag: "free", gap: "10px", rewind: true,
                }}>
                    {tags.map((tag) => (
                        <SplideSlide key={tag.id}>
                            <Link to={`/blogs?filter=${tag.slug}`}
                                  key={tag.id}
                                  className="m-0.5 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-blue-800 dark:hover:bg-blue-700 dark:text-neutral-200">{tag.name}</Link>
                        </SplideSlide>
                    ))}
                </Splide>
        </>
    )
}