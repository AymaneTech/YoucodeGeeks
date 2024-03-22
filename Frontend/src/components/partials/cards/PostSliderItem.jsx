export function Card({
  heading,
  description,
  thumbnailSrc,
  thumbnailAlt = "Thumbnail",
  className,
}) {
  const desc = description.slice(0, 100);
  return (
    <div className={`rounded-xl p-4 shadow-sm min-w-[400px] shadow-xl ${className}`}>
      <div className="overflow-hidden rounded-lg">
        <img
          className="w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto"
          src={thumbnailSrc}
          alt={thumbnailAlt}
        />
      </div>
      <h3 className="pt-5 text-[14px] font-normal text-white font-bold text-2xl block">
        {heading}
      </h3>
      <p className="text-md font-normal text-white cursor-pointer text-lg duration-300 transition  mt-2">
        {desc}
      </p>
      <button>View more</button>
    </div>
  );
}