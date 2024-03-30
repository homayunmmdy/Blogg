import React from "react";
import Link from "next/link";
import ThemeController from "./ThemeController";
import SiteConfig from "../config/site";

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {SiteConfig.nav.map((nav) => (
                <li key={nav.id}>
                  <Link href={nav.href}>{nav.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <Link href="/" className="btn btn-ghost text-xl">
            {SiteConfig.name}
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {SiteConfig.nav.map((nav) => (
              <li key={nav.id}>
                <Link href={nav.href}>{nav.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end">
          <ThemeController />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
