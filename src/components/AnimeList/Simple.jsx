import Image from "next/image";
import Link from "next/link";

const Simple = ({ api }) => {

  return (
    <div className="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 sm:gap-4 gap-2 ">
      {api.data?.map((anime, index) => {
        return (
          <Link
            href={`/anime/${anime.mal_id}`}
            className="group relative cursor-pointer text-dark rounded-md shadow-custom-crisp overflow-hidden"
            key={index}
          >
            <Image
              src={anime.images.webp.image_url}
              alt={anime.images.jpg.image_url}
              width={350}
              height={350}
              className="transform group-hover:scale-105 w-full h-full object-cover "
              priority
            />
            <h4 className="absolute bottom-1 left-1 right-1 text-center lg:text-lg text-sm text-white bg-black border-grey  bg-opacity-10 backdrop-blur-md md:p-2 p-1 border truncate  rounded-md ">
              {anime.title}
            </h4>
          </Link>
        );
      })}
    </div>
  );
};

export default Simple;
