import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

const Pagination = ({ page, lastPage, setPage }) => {
  const scrolTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  const handleNextPage = () => {
    if (page < lastPage) {
      setPage((prevState) => prevState + 1);
      scrolTop();
    }
  };

  const handlePrevPage = () => {
    setPage((prevState) => prevState - 1);
    scrolTop();
  };

  return (
    <div className="flex items-center justify-between bg-white px-4 pb-6 pt-10 sm:px-6">
      <div className="flex flex-1 items-center justify-between sm:hidden">
        {page <= 1 ? null : (
          <button
            onClick={handlePrevPage}
            className="relative inline-flex items-center rounded-md shadow-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Previous
          </button>
        )}

        <p className="text-sm text-gray-700">
          Page <span className="font-medium">{page} </span>
          of
          <span className="font-medium"> {lastPage}</span>
        </p>

        <button
          onClick={handleNextPage}
          className="relative ml-3 inline-flex items-center rounded-md shadow-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Next
        </button>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-lg text-gray-700">
            Page <span className="text-lg">{page} </span>
            of
            <span className="text-lg"> {lastPage}</span>
          </p>
        </div>

        <div>
          <nav
            aria-label="Pagination"
            className="isolate inline-flex -space-x-px rounded-md shadow-lg"
          >
            {page <= 1 ? null : (
              <button
                onClick={handlePrevPage}
                className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                <span className="sr-only">Previous</span>
                <ChevronLeftIcon aria-hidden="true" className="h-5 w-5" />
              </button>
            )}
            <p
              aria-current="page"
              className="relative z-10 inline-flex items-center bg-accent2 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent2"
            >
              {page}
            </p>

            <button
              onClick={handleNextPage}
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon aria-hidden="true" className="h-5 w-5" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
