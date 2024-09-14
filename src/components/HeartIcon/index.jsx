"use client";

import { Heart } from "@phosphor-icons/react";
import { useState } from "react";

const HeartIcon = ({ anime_mal_id, anime_title, anime_image,  user_email }) => {
  const [isCreated, setIsCreated] = useState(false);

  const handleCollection = async (event) => {
    event.preventDefault();

    const data = { anime_mal_id, anime_title, anime_image,  user_email };

    const response = await fetch("/api/v1/collection", {
      method: "POST",
      body: JSON.stringify(data),
    });

    const collection = await response.json();
    if (collection.isCreated) {
      setIsCreated(true);
    }
    return
  };

  return (
    <>
      {isCreated ? (
        <button onClick={handleCollection} className="absolute top-1 right-1">
          <Heart size={32} color="#ff0000" weight="fill" />
        </button>
      ) : (
        <button onClick={handleCollection} className="absolute top-1 right-1">
          <Heart size={32} color="#ff0000" weight="duotone" />
        </button>
      )}
    </>
  );
};

export default HeartIcon;
