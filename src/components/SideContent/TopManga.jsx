import Image from "next/image";
import Link from "next/link";

const TopManga = ({ api }) => {
  return (
    <div className="grid md:grid-cols-2 w-full grid-cols-1 sm:gap-4 gap-2  mt-4">
      {api.data?.map((manga, index) => {
        return (
          <Link
            href={`/manga/${manga.mal_id}`}
            className="group relative cursor-pointer text-dark rounded-md shadow-custom-crisp overflow-hidden"
            key={index}
          >
            <Image
              src={manga.images.webp.image_url}
              alt={manga.images.jpg.image_url}
              width={350}
              height={350}
              className="transform  group-hover:scale-105 w-full h-full object-cover "
              priority
            />

            <h4
              className="absolute bottom-0 left-0 right-0 text-center lg:text-lg text-sm text-white 
  bg-gradient-to-t from-black to-transparent 
  flex items-center justify-center 
  width: fit-content 
  md:p-2 p-1 truncate rounded-md" 
            >
              
              {manga.title}
            </h4>
          </Link>
        );
      })}
    </div>
  );
};

export default TopManga;
