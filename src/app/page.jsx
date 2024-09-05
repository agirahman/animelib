import AnimeList from "@/components/AnimeList";
import RecomendAnime from "@/components/RecomendedAnime";
import Header from "@/components/AnimeList/Header"
import { getAnimeResponse, getRecommendedAnimeResponse, randomAnime } from "@/libs/api-libs"

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=8")
  const SeasonNow = await getAnimeResponse("seasons/now", "limit=8")
  const SeasonUpcoming = await getAnimeResponse("seasons/upcoming", "limit=8")
  // console.log(SeasonNow)
  let recommendedAnime = await getRecommendedAnimeResponse("recommendations/anime", "entry")
  // console.log(recommendedAnime)
  recommendedAnime = randomAnime(recommendedAnime, 10)
  
  return (
    <>
      <section>
      <RecomendAnime api={recommendedAnime}  />
      </section>

      <section>
      <Header title="Top Anime" linkTitle="See More" linkHref="/populer"/>
      <AnimeList api = {topAnime}/>
      </section>

      <section className="mt-4 ">
        <Header title="Anime Season Now" linkTitle="See More" linkHref="/season_now"/>
        <AnimeList api = {SeasonNow}/>
      </section>

      <section className="mt-4">
        <Header title="Anime Next Season" linkTitle="See More" linkHref="/season_upcoming"/>
        <AnimeList api = {SeasonUpcoming}/>
      </section>
    </>
  );
};

export default Page;
