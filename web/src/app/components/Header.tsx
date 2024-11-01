'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathname = usePathname();
  const pathNames = pathname.split('/').filter((x) => x);

  return (
    <nav aria-label="breadcrumb" className="w-max">
      <ol className="flex w-full flex-wrap items-center rounded-md bg-slate-50 px-4 py-2">
        <li className="flex cursor-pointer items-center text-sm text-slate-500 transition-colors duration-300 hover:text-slate-800">
          <Link href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
            </svg>
          </Link>
        </li>
        {pathNames.map((path, index) => {
          const href = `/${pathNames.slice(0, index + 1).join('/')}`;
          return (
            <li key={index} className="flex cursor-pointer items-center text-sm text-slate-500 transition-colors duration-300 hover:text-slate-800">
              <Link href={href}>
                <span>&nbsp;/&nbsp;{path.charAt(0).toUpperCase() + path.slice(1)}</span>
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  )
};
