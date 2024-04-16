import Constants from '@/utils/Constants';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="border-gray-200 bg-white">
      <div className="mx-auto flex max-w-xl flex-wrap items-center justify-between p-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center whitespace-nowrap text-2xl font-semibold">
            Job Swipe
          </span>
        </Link>

        <button
          data-collapse-toggle="navbar-default"
          aria-controls="navbar-default"
          aria-expanded="false"
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-5 w-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <div className="hidden w-full md:block md:w-auto">
          <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 rtl:space-x-reverse">
            {Constants.NAVBAR_LINK.map((link) => {
              return (
                <li key={link}>
                  <Link
                    href={link}
                    className="block rounded bg-blue-700 px-3 py-2 text-white md:border-0 md:bg-transparent md:p-0 md:hover:text-blue-700"
                  >
                    {link}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
