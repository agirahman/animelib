import { SmileyXEyes } from "@phosphor-icons/react";
// import Page from "./page";

const Page = () => {
  return (
    <div className="min-h-screen mas-w-xl mx-auto flex justify-center items-center">
       <div className="text-center">
          <p className="text-base font-semibold text-accent2">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1>
          <p className="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t find the page you’re looking for.</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href={`/`}
              className="rounded-md px-3.5 py-2.5 text-dark text-sm font-semibold border-grey shadow-custom-clear hover:bg-accent2 hover:text-primary transition-all"
            >
              Go back home
            </a>
          </div>
        </div>
    </div>
  );
};

export default Page;
