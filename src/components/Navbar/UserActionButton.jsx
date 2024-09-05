import Link from "next/link";
import { authUserSession } from "@/libs/auth_libs";

const signIn = async () => {
  const user = await authUserSession();
  const actionLabel = user ? "Sign Out" : "Sign In";
  const actionURL = user ? "/api/auth/signout" : "/api/auth/signin";

  return (
    <div className="flex justify-center items-center text-lg gap-4">
      <Link href="/" className="hover:text-accent2 transition-all">Homepage</Link>
      {
      user ? 
        <Link href="/users/dashboard" className="hover:text-accent2 transition-all">Dashboard</Link> : null
      }
      <Link href={actionURL} className="hover:text-accent2 transition-all">
        {actionLabel}
      </Link>
    </div>
  );
};

export default signIn;
