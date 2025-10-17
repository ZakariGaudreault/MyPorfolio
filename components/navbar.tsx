"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const pathName = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const secondaryColorHex = "#34D399";

  const links = [
    { href: "/", label: "Home" },
    { href: "/portfolio", label: "Portfolio" },
  ];

  return (
    <nav className="bg-tertiary border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo / Name */}
        <span className="self-center lg:text-3xl font-semibold whitespace-nowrap text-primary font-serif">
          Zakari Gaudreault St-Jean
        </span>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-primary rounded-2xl md:hidden hover:bg-primary hover:text-tertiary focus:outline-none focus:ring-2"
          aria-controls="navbar-menu"
          aria-expanded={menuOpen}
        >
          <span className="sr-only">Toggle menu</span>
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

        {/* Menu Links */}
        <div
          id="navbar-menu"
          className={`${
            menuOpen ? "block" : "hidden"
          } w-full md:flex md:w-auto md:order-1`}
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-2xl md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-tertiary">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setMenuOpen(false)} // Close after clicking
                  className={`block py-2 px-3 rounded ${
                    pathName === href
                      ? "text-primary font-semibold"
                      : "text-white hover:text-primary"
                  }`}
                  style={
                    pathName === href
                      ? { textShadow: `0 0 5px ${secondaryColorHex}` }
                      : {}
                  }
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
