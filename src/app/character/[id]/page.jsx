import { getAnimeResponse } from "@/libs/api-libs"
import Image from "next/image"

const Page = async ({params: { id }}) => {
    const char = await getAnimeResponse(`characters/${id}`)
    console.log(char)


    return (
<>
      <div className="flex flex-col justify-center pt-4 px-4">
        <h3 className="text-center text-dark md:text-3xl text-2xl">{char.data.name}</h3>
        <h3 className="text-center text-dark text-2xl">
          {char.data.name_kanji}
        </h3>
      </div>

      <div className="py-4 px-2 flex justify-center items-center flex-col gap-4 text-primary">
        <div className="relative rounded-md overflow-hidden shadow-custom-crisp">
          <Image
            src={char.data.images.webp.image_url}
            alt={char.data.images.jpg.image_url}
            width={350}
            height={350}
            className="object-cover md:max-w-md"
          />
          {/* <div className="absolute bottom-2 left-2 right-2 text-center text-white border border-grey bg-black bg-opacity-10 backdrop-blur-md p-4 rounded-md ">
            {char.data.genres.map((genre) => genre.name).join(", ")} 
          </div> */}
        </div>

        

        <div className="grid w-full  gap-2 py-4 text-sm text-dark text-center justify-center overflow-x-auto">
          <div className="w-auto p-4 flex flex-row justify-center items-center rounded-md border border-accent2 bg-accent1 p-1">
            <p>Favorites - {char.data.favorites}</p>
          </div>
          <div className="w-auto p-4 flex flex-row justify-center items-center rounded-md border border-accent2 bg-accent1 p-1">
            <p>Nicknames - {char.data.nicknames
                // ((nicknames) => nicknames.name)
                .join(", ")}
            </p>
          </div>
        </div>

        <div className="text-dark ">
          <h4 className="mb-2 md:text-3xl text-2xl">About</h4>
          <p className="text-justify md:text-xl text-md">
            {char.data.about}
          </p>
        </div>
      </div>
    </>
    )
}

export default Page