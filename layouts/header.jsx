import { usePathname } from "next/navigation";

export default function Header({ nav, setNav }) {
  const pathname = usePathname();
  const path = pathname.substring(1);

  return (
    <nav
      id="navbar"
      className="stiky top-0 z-40 flex w-full flex-row justify-end bg-gray-700 px-4 sm:justify-between"
    >
      <ul className="breadcrumb hidden flex-row items-center py-4 text-lg text-white sm:flex">
        <li className="inline">
          <a href="#">Main</a>
        </li>
        <li className="inline">
          <span onClick={() => setNav(true)}>
            {path.charAt(0).toUpperCase() + path.slice(1)}
          </span>
        </li>
      </ul>
      <button
        id="btnSidebarToggler"
        type="button"
        className="py-4 text-2xl text-white hover:text-gray-200"
        onClick={() => setNav(!nav)}
      >
        <svg
          id="navClosed"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-8 w-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
        <svg
          id="navOpen"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="hidden h-8 w-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </nav>
  );
}
