import React from "react";
import { useState } from "react";
import "../App.css";
import { RxAvatar } from "react-icons/rx";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";

let NavBar = () => {
  const [hidden, setHidden] = useState(true);
  const btnEl = () => {
    setHidden((prev) => !prev);
  };
  return (
    <nav className="NavBarEl">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <p>WOODI</p>
        <div className="flex md:order-2">
          <div className="flex md:order-2">
            <RxAvatar />
            <MdOutlineFavoriteBorder />
            <AiOutlineShoppingCart />
          </div>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-primary rounded-lg md:hidden hover:bg-secondary focus:outline-none focus:ring-2"
            aria-controls="navbar-sticy"
            aria-expanded="false"
            onClick={btnEl}
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
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between ${
            hidden ? "hidden" : ""
          } w-full md:flex md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col md:p-0 mt-4 font-medium rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
            <li className="hover:bg-secondary py-1 px-4 rounded-md">
              <a href="#" className="text-primary text-lg font-bold">
                Home
              </a>
            </li>
            <li className="hover:bg-secondary py-1 px-4 rounded-md">
              <a href="#" className="text-primary text-lg font-bold">
                About
              </a>
            </li>
            <li className="hover:bg-secondary py-1 px-4 rounded-md">
              <a href="#" className="text-primary text-lg font-bold">
                Collection
              </a>
            </li>
            <li className="hover:bg-secondary py-1 px-4 rounded-md">
              <a href="#" className="text-primary text-lg font-bold">
                FAQ
              </a>
            </li>
            <li className="hover:bg-secondary py-1 px-4 rounded-md">
              <a href="#" className="text-primary text-lg font-bold">
                Contacts
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
