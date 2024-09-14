import { getAnimeResponse } from "@/libs/api-libs";
import VideoPlayer from "@/components/Utilities/videoPlayer";
import Image from "next/image";
import HeartIcon from "@/components/HeartIcon";
import FillIcon from "@/components/HeartIcon/IconFill";
import { authUserSession } from "@/libs/auth_libs";
import prisma from "@/libs/prisma";
import CommentInput from "@/components/Comment/CommentInput";
import CommentBox from "@/components/Comment/CommentBox";

const Page = async ({ params: { id } }) => {
  const anime = await getAnimeResponse(`anime/${id}`);
  const user = await authUserSession()
  const collection = await prisma.collection.findFirst({
    where: { user_email: user?.email, anime_mal_id: id}
  })

  return (
    <>
      <div className="flex flex-col justify-center pt-4 px-4">
        <h3 className="text-center text-dark md:text-3xl text-2xl">{anime.data.title}</h3>
      </div>

      <div className="py-4 pl-2 flex justify-center items-center flex-col gap-4 text-primary">
        <div className="relative rounded-md overflow-hidden shadow-custom-crisp">
          <Image
            src={anime.data.images.webp.image_url}
            alt={anime.data.images.jpg.image_url}
            width={350}
            height={350}
            className=" object-cover md:max-w-md"
          />
          {
            user && (
              collection ? (<FillIcon/>) : (<HeartIcon anime_mal_id={id} anime_title={anime.data.title} anime_image={anime.data.images.webp.image_url} user_email={user?.email}/>)
            )
          }
            
          
          <div className="absolute bottom-2 left-2 right-2 text-center text-white border border-grey bg-black bg-opacity-10 backdrop-blur-md p-4 rounded-md ">
            {anime.data.genres.map((genre) => genre.name).join(", ")} 
          </div>
        </div>

        <div className="grid md:grid-cols-8 grid-cols-4 gap-2 py-4 text-sm text-dark text-center justify-center overflow-x-auto">
          <div className="w-auto flex flex-row justify-center items-center rounded-md border border-accent2 bg-accent1 p-1">
            <p>Rank #{anime.data.rank}</p>
          </div>
          <div className="w-auto flex flex-row justify-center items-center rounded-md border border-accent2 bg-accent1 p-1">
            <p>Score - {anime.data.score}</p>
          </div>
          <div className="w-auto flex flex-row justify-center items-center rounded-md border border-accent2 bg-accent1 p-1">
            <p>Eps - {anime.data.episodes}</p>
          </div>
          <div className="w-auto flex flex-row justify-center items-center rounded-md border border-accent2 bg-accent1 p-1">
            <p>{anime.data.type}</p>
          </div>
          <div className="w-auto flex flex-row justify-center items-center rounded-md border border-accent2 bg-accent1 p-1">
            <p>Season - {anime.data.season} {anime.data.year}</p>
          </div>
          <div className="w-auto flex flex-row justify-center items-center rounded-md border border-accent2 bg-accent1 p-1">
            <p>Studio - {anime.data.studios.map((studio) => studio.name).join(", ")}</p>
          </div>
          <div className="w-auto flex flex-row justify-center items-center rounded-md border border-accent2 bg-accent1 p-1">
            <p>Themes - 
              {anime.data.themes
                .map((themes) => themes.name)
                .join(", ")}
            </p>
          </div>
          <div className="w-auto flex flex-row justify-center items-center rounded-md border border-accent2 bg-accent1 p-1">
            <p>Status - {anime.data.status}</p>
          </div>
        </div>

        <div className="text-dark ">
          <h4 className="mb-2 md:text-3xl text-2xl ">Synopsis</h4>
          <p className="text-justify md:text-xl text-md">
            {anime.data.synopsis}
          </p>
        </div>
        <div className="w-full">
          <h3 className="text-dark md:text-3xl text-2xl my-4">Comments</h3>
          {user &&
          <CommentInput anime_mal_id={id} anime_title={anime.data.title} username={user?.name} user_email={user?.email}  />
        }
        <CommentBox anime_mal_id={id} />
        </div>
        
        <div>
          <VideoPlayer youtubeId={anime.data.trailer.youtube_id}/>
        </div>
      </div>
    </>
  );
};

export default Page;
