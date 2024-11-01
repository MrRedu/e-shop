import Link from "next/link";

export const Pagination = (
  { page, pageSize, pageCount, total }:
    { page: number, pageSize: number, pageCount: number, total: number }
) => {
  const isFirtPage = page === 1;
  const isLastPage = page === pageCount;

  const prevPage = page - 1;
  const nextPage = page + 1;

  const prevPagUrl = isFirtPage ? '#' : `?page=${prevPage}`;
  const nextPagUrl = isLastPage ? '#' : `?page=${nextPage}`;

  return (
    <div className="flex justify-center items-center w-full">
      <Link href={prevPagUrl} className={`${isFirtPage ? 'pointer-events-none opacity-50' : ''} min-w-9 rounded-md border border-gray-300 py-2 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg text-gray-600 hover:text-white hover:bg-gray-800 hover:border-gray-800 focus:text-white focus:bg-gray-800 focus:border-gray-800 active:border-gray-800 active:text-white active:bg-gray-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2`}>
        Prev
      </Link>
      <span className="mx-2 text-sm text-gray-600">{page} of {pageCount}</span>
      <Link href={nextPagUrl} className={`${isLastPage ? 'pointer-events-none opacity-50' : ''} min-w-9 rounded-md border border-gray-300 py-2 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg text-gray-600 hover:text-white hover:bg-gray-800 hover:border-gray-800 focus:text-white focus:bg-gray-800 focus:border-gray-800 active:border-gray-800 active:text-white active:bg-gray-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2`}>
        Next
      </Link>
    </div>

  )
};
