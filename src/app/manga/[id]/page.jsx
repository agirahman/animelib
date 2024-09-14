import { getAnimeResponse } from "@/libs/api-libs"
import Image from "next/image"

const Page = async ({params: { id }}) => {
    const manga = await getAnimeResponse(`manga/${id}`)
    // console.log(manga)
    return (
<>
      <div className="flex flex-col justify-center pt-4 px-4">
        <h3 className="text-center text-dark md:text-3xl text-2xl">{manga.data.title}</h3>
        <h3 className="text-center text-dark text-2xl">
          {manga.data.title_japanese}
        </h3>
      </div>

      <div className="py-4 px-2 flex justify-center items-center flex-col gap-4 text-primary">
        <div className="relative rounded-md overflow-hidden shadow-custom-crisp">
          <Image
            src={manga.data.images.webp.image_url}
            alt={manga.data.images.jpg.image_url}
            width={350}
            height={350}
            className="object-cover md:max-w-md"
          />
          <div className="absolute bottom-2 left-2 right-2 text-center text-white border border-grey bg-black bg-opacity-10 backdrop-blur-md p-4 rounded-md ">
            {manga.data.genres.map((genre) => genre.name).join(", ")} 
          </div>
        </div>

        

        <div className="grid md:grid-cols-8 grid-cols-4 gap-2 py-4text-sm text-dark text-center justify-center overflow-x-auto">
          <div className="w-auto flex flex-row justify-center items-center rounded-md border border-accent2 bg-accent1 p-1">
            <p>Rank #{manga.data.rank}</p>
          </div>
          <div className="w-auto flex flex-row justify-center items-center rounded-md border border-accent2 bg-accent1 p-1">
            <p>Score - {manga.data.score}</p>
          </div>
          <div className="w-auto flex flex-row justify-center items-center rounded-md border border-accent2 bg-accent1 p-1">
            <p>Chapters - {manga.data.chapters}</p>
          </div>
          <div className="w-auto flex flex-row justify-center items-center rounded-md border border-accent2 bg-accent1 p-1">
            <p>Vol - {manga.data.volume} {manga.data.year}</p>
          </div>
          <div className="w-auto flex flex-row justify-center items-center rounded-md border border-accent2 bg-accent1 p-1">
            <p>Type - {manga.data.type}</p>
          </div>
          <div className="w-auto flex flex-row justify-center items-center rounded-md border border-accent2 bg-accent1 p-1">
            <p>Authors - {manga.data.authors.map((authors) => authors.name).join(", ")}</p>
          </div>
          <div className="w-auto flex flex-row justify-center items-center rounded-md border border-accent2 bg-accent1 p-1">
            <p>Themes - {manga.data.themes
                .map((themes) => themes.name)
                .join(", ")}
            </p>
          </div>
          <div className="w-auto flex flex-row justify-center items-center rounded-md border border-accent2 bg-accent1 p-1">
            <p>Status - {manga.data.status}</p>
          </div>
        </div>

        <div className="text-dark ">
          <h4 className="mb-2 md:text-3xl text-2xl">Synopsis</h4>
          <p className="text-justify md:text-xl text-md">
            {manga.data.synopsis}
          </p>
        </div>
        <div className="text-dark ">
          <h4 className="mb-2 md:text-3xl text-2xl">Background</h4>
          <p className="text-justify md:text-xl text-md">
            {manga.data.background}
          </p>
        </div>
      </div>
    </>
    )
}

export default Page