import Link from "next/link";
import InputSearch from "./InputSearch";
import UserActionButton from "./UserActionButton";
import MobileNav from "./MobileNav";

const Navbar = ({ title }) => {
  return (
    <header className="bg-primary shadow-lg">
      <div className="navbar bg-">
        <div className="navbar-start">
         <MobileNav/>
          <a href="/" className="{title} btn btn-ghost md:text-3xl text-2xl text-accent2">animelib.</a>
        </div>
        <div className="navbar-center hidden gap-3 lg:flex">
          <UserActionButton/>
        </div>
        <div className="navbar-end">
          <InputSearch />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
