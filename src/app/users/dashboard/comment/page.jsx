import { authUserSession } from "@/libs/auth_libs";
import prisma from "@/libs/prisma";
import React from "react";
import Link from "next/link";
import Header from "@/components/Dashboard/Header";
import NoComment from "@/components/Comment/NoComment";

const Page = async () => {
    const user = await authUserSession
    const comment = await prisma.comment.findMany({
        where: {usere_email: user.email},
        orderBy: { id: 'desc'}
    })

    if (!comment || comment.length === 0) {
      return (
        <section className="w-full px-1 ">
          <Header title="My Comment" />
            <NoComment />
          
        </section>
      );
    }

    return (
        <section className="w-full px-1 ">
      <Header title="My Comment" />
      <div className="grid md:grid-cols-2 grid-cols-1 border-dash p-2 gap-2">
        {comment.map((comment => {
          return (
            <Link
              href={`/anime/${comment.anime_mal_id}`}
              className="group hover:scale-105 hover:bg-accent2 transition-all text-dark shadow-lg border-grey rounded-lg p-2"
              key={comment.id}
            >

              <h4 className="group-hover:text-primary  md:text-xl  text-md">
                {comment.anime_title}
              </h4>
              <h4 className="group-hover:text-primary transition-all text-grey  md:text-lg  text-sm">
                {comment.comment}
              </h4>
            </Link>
          );
        }))}
      </div>
    </section>
    )
}

export default Page