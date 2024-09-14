"use client";

import { PaperPlaneRight } from "@phosphor-icons/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

const CommentInput = ({ anime_mal_id, anime_title, username, user_email }) => {
  const [comment, setComment] = useState();
  const [isCreated, setIsCreated] = useState(false);
  const router =useRouter()

  const handleInput = (event) => {
    setComment(event.target.value);
  };

  const handlePosting = async (event) => {
    event.preventDefault();

    const data = { anime_mal_id, anime_title, username, user_email, comment };

    const response = await fetch("/api/v1/comment", {
      method: "POST",
      body: JSON.stringify(data),
    });

    const postComment = await response.json();
    if (postComment.isCreated) {
      setIsCreated(true);
      setComment("")
      router.refresh()
    }
  };

  return (
    <form className="max-w-full mx-auto ">
        {isCreated && <></>}
      <div className="mb-4 flex justify-between gap-1 ">
        <textarea
          onChange={handleInput}
          value={comment}
          rows="4"
          className="shadow appearance-none border border-grey rounded-lg w-full p-2 text-dark leading-tight md:text-xl text-md"
          placeholder="Write a Comment..."
        />
        <button onClick={handlePosting} className="self-end mb-1">
          <PaperPlaneRight className="text-dark" size={28} />
        </button>
      </div>
    </form>
  );
};

export default CommentInput;
