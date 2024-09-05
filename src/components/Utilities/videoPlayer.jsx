"use client";

import { XCircle } from "@phosphor-icons/react";
import { useState } from "react";
import YouTube from "react-youtube";
import Swal from "sweetalert2";

const VideoPlayer = ({ youtubeId }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleVideoPlayer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const option = {
    width: "full",
    height: "auto",
  };

  const seeTrailer = () => {
    return (
      <button
        className="fixed bottom-2 right-2 p-2 text-dark rounded-md border border-accent2 bg-accent1 "
        onClick={handleVideoPlayer}
      >
        Watch Trailer
      </button>
    );
  };

  const Player = () => {
    return (
      <div className="fixed bottom-2 right-2">
        <button
          className="text-accent2 float-right"
          onClick={handleVideoPlayer}
        >
          <XCircle size={32} weight="duotone" />
        </button>
        <YouTube
          videoId={youtubeId}
          onReady={(event) => event.target.pauseVideo()}
          onError={() => {Swal.fire({
            icon: "error",
            title: "error",
            color: "#222831",
            text: "Sorry the Trailer Video URL Error",
            background: "#F9F9F9",
            confirmButtonColor: "#32CD32",
            confirmButtonText: "OK",
            customClass: {
              popup: "swal2-responsive-popup",
            },
          })}}
          opts={option}
        />
      </div>
    );
  };

  return isOpen ? <Player /> : seeTrailer();
};

export default VideoPlayer;
