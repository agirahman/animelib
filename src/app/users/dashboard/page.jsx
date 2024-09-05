import { authUserSession } from "@/libs/auth_libs";
import Image from "next/image";
import Link from "next/link";

const Page = async () => {
  const user = await authUserSession();

  return (
    <div className="mt-10 flex flex-col justify-center items-center gap-4">
      <Image
        className="rounded-full "
        src={user?.image}
        alt=".."
        width={150}
        height={150}
      />
      <h3 className="text-xl">Welcome {user?.name}</h3>

      <div className="gap-4 flex-wrap flex items-center justify-center mt-10">
        <Link
          href="/users"
          className="md:text-lg text-sm text-accent2 p-2 rounded-lg border border-accent2 hover:bg-accent2 hover:text-primary transition-all"
        >
          My Collection
        </Link>
        <Link
          href=""
          className="md:text-lg text-sm text-accent2 p-2 rounded-lg border border-accent2 hover:bg-accent2 hover:text-primary transition-all"
        >
          My Comment
        </Link>
      </div>
    </div>
  );
};

export default Page;
