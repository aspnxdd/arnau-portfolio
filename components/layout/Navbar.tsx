import type { FC } from "react";

import Link from "next/link";
import { useRouter } from "next/router";

const ROUTES = { Home: "/", Projects: "/projects" };

const Navbar: FC = () => {
  const { asPath } = useRouter();

  return (
    <nav className="flex justify-center items-center h-16 shadow-sm m-20 mt-10">
      <ul className="flex items-center justify-center gap-10 text-xl">
        {Object.entries(ROUTES).map(([route, path]) => (
          <li key={route}>
            <Link href={path}>
              <p
                className={`text-xl font-bold relative w-max link ${
                  asPath === path ? "text-gray-300" : "text-gray-400"
                }`}
              >
                <span>{route}</span>
                <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-1 bg-sky-500"></span>
                <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-1 bg-sky-500"></span>
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
