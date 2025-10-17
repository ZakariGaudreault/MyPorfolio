"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const pathName = usePathname();
  const button = {
    active: "text-primary",
    inactive: "text-tertiary hover:text-primary",
  };

  const links = [
    { href: "/", label: "Home" },
    { href: "/portfolio", label: "Portfolio" },
  ];

  return (
    <nav className="bg-secondary border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center lg:text-3xl font-semibold whitespace-nowrap text-primary font-serif">
            Kui Hua Wang
          </span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            onClick={() => {
              alert(
                "Feature to come. On the meantime, my contact information is in the footer."
              );
            }}
            type="button"
            className="text-primary bg-secondary hover:bg-primary border-2 hover:text-secondary border-primary font-medium rounded-2xl text-sm px-4 py-2 text-center"
          >
            Contact me
          </button>
          <button
            onClick={() => {
              alert("Feature to come. Desktop version is working correctly.");
            }}
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-primary rounded-2xl md:hidden hover:bg-primary hover:text-secondary focus:outline-none focus:ring-2"
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-2xl  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-secondary ">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`${
                    pathName === href ? button.active : button.inactive
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
