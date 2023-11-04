import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar({ nav }) {
  const pathname = usePathname();
  // const path = pathname.subString(1);
  const navv = nav;
  return (
    <div id="containerSidebar" className="z-40">
      <div className="navbar-menu relative z-40 ">
        <nav
          id="sidebar"
          className={`sticky left-0 bottom-0 flex w-3/4 -translate-x-full flex-col overflow-y-auto bg-gray-700 pt-6 pb-8 sm:max-w-xs lg:w-80 ${
            nav ? "show" : ""
          }`}
        >
          <div className="px-4 pb-6">
            <h3 className="mb-2 text-xs font-medium uppercase text-gray-500">
              Main
            </h3>
            <ul className="mb-8 text-sm font-medium">
              <li>
                <Link
                  className={`${
                    pathname.substring(1) == "posts" && "active"
                  } flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-gray-600`}
                  href="/posts"
                >
                  <span className="select-none">Posts</span>
                </Link>
              </li>
              <li>
                <Link
                  className={`${
                    pathname.substring(1) == "users" && "active"
                  } flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-gray-600`}
                  href="/users"
                >
                  <span className="select-none">Users</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="px-4 pb-6">
            <h3 className="mb-2 text-xs font-medium uppercase text-gray-500">
              Legal
            </h3>
            <ul className="mb-8 text-sm font-medium">
              <li>
                <a
                  className="flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-gray-600"
                  href="#tc"
                >
                  <span className="select-none">Terms and Condition</span>
                </a>
              </li>
              <li>
                <a
                  className="flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-gray-600"
                  href="#privacy"
                >
                  <span className="select-none">Privacy policy</span>
                </a>
              </li>
              <li>
                <a
                  className="flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-gray-600"
                  href="#imprint"
                >
                  <span className="select-none">Imprint</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="px-4 pb-6">
            <h3 className="mb-2 text-xs font-medium uppercase text-gray-500">
              Others
            </h3>
            <ul className="mb-8 text-sm font-medium">
              <li>
                <a
                  className="flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-gray-600"
                  href="#ex2"
                >
                  <span className="select-none">About</span>
                </a>
              </li>
              <li>
                <a
                  className="flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-gray-600"
                  href="#ex1"
                >
                  <span className="select-none">Contact</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="mx-auto lg:ml-80"></div>
    </div>
  );
}
