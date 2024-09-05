import Image from "next/image";
import Link from "next/link";

const PopularAnime = ({ api }) => {

  return (
    <div className="grid xl:grid-cols-5 md:grid-cols-4 grid-cols-3 sm:gap-4 gap-3">
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
              className="transform  group-hover:scale-105 w-full h-full object-cover "
              priority
            />
            <h4 className="absolute top-0 right-0 text-primary text-center lg:text-xl text-sm bg-accent2 backdrop-blur-xl p-1  rounded-tr-md  rounded-bl-md shadow-lg">
              #{anime.rank}
            </h4>

            <h4 className="absolute bottom-1 left-1 right-1 text-center lg:text-lg text-sm text-white bg-black border-grey  bg-opacity-10 backdrop-blur-md md:p-2 p-1 border truncate  rounded-md ">
              {anime.title}
            </h4>
          </Link>
        );
      })}
    </div>
  );
};

export default PopularAnime;
