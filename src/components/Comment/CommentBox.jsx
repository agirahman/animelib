import prisma from "@/libs/prisma";
import React from "react";

const CommentBox = async ({ anime_mal_id }) => {
  const comments = await prisma.comment.findMany({ where: { anime_mal_id }, orderBy: {id: "desc"} });

  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
      {comments.map((comment) => {
        return (
            
          <div key={comment.id} className="text-dark md:text-xl text-md shadow-lg border-grey rounded-lg p-2">
            <p className="text-grey">@{comment.username}</p>
            <p>{comment.comment}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CommentBox;
