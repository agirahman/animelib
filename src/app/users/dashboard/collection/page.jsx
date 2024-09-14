import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Dashboard/Header";
import { authUserSession } from "@/libs/auth_libs";
import prisma from "@/libs/prisma";

const Page = async () => {
    const user = await authUserSession();
    const collection = await prisma.collection.findMany({
        where: {user_email: user.email}
    })

    // console.log(collection)

  return (
    <section className="w-full px-1 ">
      <Header title="My Collection" />
      <div className="grid xl:grid-cols-5 md:grid-cols-4 grid-cols-3 border-dash lg:gap-4 gap-2 p-2">
        {collection.map((collect, index) => {
          return (
            <Link
              href={`/anime/${collect.anime_mal_id}`}
              className="transition-all transform hover:scale-105 relative cursor-pointer text-dark rounded-md shadow-custom-crisp overflow-hidden"
              key={index}
            >
              <Image
                src={collect.anime_image}
                alt={collect.anime_image}
                width={350}
                height={350}
                className="w-full h-full object-cover "
                priority
              />

              <h4 className="absolute bottom-1 left-1 right-1 text-center lg:text-lg text-sm text-white bg-black border-grey  bg-opacity-10 backdrop-blur-md md:p-2 p-1 border truncate  rounded-md ">
                {collect.anime_title}
              </h4>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Page;
