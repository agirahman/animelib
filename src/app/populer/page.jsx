"use client";

import Pagination from "@/components/Utilities/Pagination";
import HeaderMenu from "@/components/Utilities/HeaderMenu";
import React, { useEffect, useState } from "react";
import PopularAnime from "@/components/PopularAnime";
import { getAnimeResponse } from "@/libs/api-libs";

const Page = () => {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState([]);

  const fetchData = async () => {
    const populerAnime = await getAnimeResponse("top/anime", `page=${page}`)
    setTopAnime(populerAnime);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <>
      <HeaderMenu title={`Top Anime #${page}`} />
      <PopularAnime api={topAnime} />
      <Pagination
        page={page}
        lastPage={topAnime.pagination?.last_visible_page}
        setPage={setPage}
      />
    </>
  );
};

export default Page;
