"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = dynamic(() => import("react-slick"), {
  ssr: false,
});

const RecomendedAnime = ({ api }) => {
  const [isClient, setIsClient] = useState(false);
  // const [randomizeAnimeList, setrandomizeAnimeList] = useState([])

  useEffect(() => {
    setIsClient(true);

    // const suffledAnime = [...api.data].sort(() => Math.random() - 0.5)
    // setrandomizeAnimeList(suffledAnime)
  }, []); //api.data

  if (!isClient) {
    return null;
  }

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    centerPadding: "20%",
    arrows: true,
    dots: true,
  };

  return (
    <div className="w-full overflow-hidden mt-3">
      <Slider {...settings}>
        {api.data?.map((anime, index) => ( //randomizeAnimeList
          <div
            key={index}
            className="relative slider-item px-1 h-96 rounded-lg flex justify-center items-center"
          >
            <Link href={`/anime/${anime.mal_id}`}>
              <div className="relative w-full h-full flex justify-center items-center">
                <Image
                  src={anime.images.webp.image_url}
                  alt={anime.title}
                  fill
                  style={{objectFit: "cover"}}
                  className="w-full h-full rounded-lg" // Memastikan gambar mengisi kontainer
                  priority
                />
              </div>
              <div className="absolute  p-6 bottom-0 left-0 right-0 h-auto text-center items-center lg:text-xl text-sm text-white rounded-b-lg overflow-hidden">
                {/* Elemen untuk Gradasi */}
                <div className="absolute mx-1 inset-0 bg-gradient-to-t from-black via-black/70 rounded-b-lg to-transparent"></div>
                {/* Judul Anime */}
                <h4 className="relative z-10 lg:text-2xl text-lg ">{anime.title}</h4>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default RecomendedAnime;
