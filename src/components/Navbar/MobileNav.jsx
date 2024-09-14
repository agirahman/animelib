import { authUserSession } from "@/libs/auth_libs";


const MobileNav = async() => {
    const user = await authUserSession();
  const actionLabel = user ? "Sign Out" : "Sign In";
  const actionURL = user ? "/api/auth/signout" : "/api/auth/signin";

  return (
    <div className="dropdown">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle lg:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h7"
          />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu:md dropdown-content bg-blur rounded-lg z-[1] mt-3 w-52 h-screen p-2  shadow-xl"
      >
        <li>
          <a href="/" className="hover:text-accent2 hover:bg-primary">Homepage</a>
        </li>
        {
            user ? (
<li>
          <a href="/users/dashboard" className="hover:text-accent2 hover:bg-primary">DashBoard</a>
        </li>            
            ) : null
        }
        
        <li>
          <a href={actionURL} className="flex justify-center items-center bg-primary text-accent2 text-center hover:text-primary hover:bg-accent2 mt-10">{actionLabel}</a>
        </li>
      </ul>
    </div>
  );
};

export default MobileNav;
