import SearchResult from "@/components/Search";
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse } from "@/libs/api-libs";

const Page = async ({ params }) => {
  const keyword = params.keyword;

  const decodeKeyword = decodeURI(keyword);
  const searchAnime = await getAnimeResponse("anime",`q=${decodeKeyword}`)

  return (
    <>
      <section>
        <Header title={`Search Result For ${decodeKeyword}`} />
        <SearchResult api={searchAnime} />
      </section>
    </>
  );
};

export default Page;
