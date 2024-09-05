"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import TopCharacters from "@/components/SideContent/TopCharacters";
import TopManga from "./TopManga";
import { getAnimeResponse } from "@/libs/api-libs";

const MainContent =  ({ children }) => {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const [topCharacters, setTopCharacters] = useState([])
  const [topManga, setTopManga] = useState([])

  useEffect(() => {
    const fetchTopCharacters = async () => {
      const response = await getAnimeResponse('top/characters', "limit=10");
      setTopCharacters(response)
    }
    fetchTopCharacters()
  }, [])

  useEffect(() => {
    const fetchTopManga = async () => {
      const response = await getAnimeResponse('top/manga', "limit=10");
      setTopManga(response)
    }
    fetchTopManga()
  }, [])

  return (
    <div className={`grid ${isHomePage ? 'grid-cols-4' : 'grid-cols-1'}`}>
      <main className={`${isHomePage ? 'col-span-3' : 'col-span-1'} p-4`}>
        {children}
      </main>
      {isHomePage && (
        <div className="conotainerSide col-span-1 mt-4 mr-4 mt-6 border-dash py-1 px-2">
          <h3 className="lg:text-2xl text-sm text-center font-bold justify-center items-center">Top Manga</h3>
          <TopManga api={topManga}/>

          <h3 className="mt-10 lg:text-2xl text-sm text-center font-bold justify-center items-center">Top Characters</h3>
          <TopCharacters api={topCharacters}/>
        </div>
      )}
    </div>
  );
};

export default MainContent;
