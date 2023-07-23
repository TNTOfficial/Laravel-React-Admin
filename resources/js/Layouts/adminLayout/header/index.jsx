import React, { useState } from "react";
import india from "../../../../images/india.png";
import us from "../../../../images/united-states-of-america.png";
import Dropdown from "@/Components/Dropdown";
import { usePage } from "@inertiajs/react";

export default function Header({ user }) {
  const { auth } = usePage().props
  const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

  const activesidebar = () => {
    const main = document.getElementById("main");
    main.classList.toggle("activesidebar");
  };

  const showsearch = () => {
    const element = document.getElementById("searchbar");
    element.classList.toggle("showsearch");
  };

  return (
    <header>
      <nav
        id="searchbar"
        className="navbar bg-white border-bottom shadow-sm position-relative d-flex justify-content-between align-items-center py-2 px-4"
      >
        <button onClick={activesidebar} className="togle">
          <i className="bi bi-list fs-2"></i>
        </button>
        <div className="notify d-flex align-content-center justify-content-center">
          <button onClick={showsearch} className="icons">
            <i className="bi bi-search fs-5 me-4"></i>
          </button>
          <div className="btn-group dropstart me-4">
            <button
              className="dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img src={india} alt="flag" height="33" width="33" />
            </button>
            <ul
              className="dropdown-menu top-100 border-0"
              style={{ boxShadow: "0px 0px 20px rgb(159, 158, 158)" }}
            >
              <li>
                <a className="dropdown-item" href="#">
                  <img src={india} alt="flag" height="33" width="33" />
                  <span>Hindi</span>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <img src={us} alt="flag" height="33" width="33" />
                  <span>English</span>
                </a>
              </li>
            </ul>
          </div>
          <Dropdown>
            <Dropdown.Trigger>
              <span className="inline-flex rounded-md">
                <button
                  type="button"
                  className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                >
                  {auth.user.name}

                  <svg
                    className="ml-2 -mr-0.5 h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </span>
            </Dropdown.Trigger>
            <Dropdown.Content>
              <Dropdown.Link
                href={route("logout")}
                method="post"
                as="button"
              >
                Log Out
              </Dropdown.Link>
            </Dropdown.Content>
          </Dropdown>


        </div>

        <div className="searchbar bg-white position-absolute w-100 h-100 start-0 d-flex justify-content-between">
          <button onClick={showsearch} className="icons">
            <i className="bi bi-search fs-5 ms-4"></i>
          </button>
          <input
            className="form-control rounded-0 border-0 h-100 fs-6"
            placeholder="Search...."
            type="search"
            name="search"
            id="search"
          />
          <button onClick={showsearch} className="icons">
            <i className="bi bi-x fs-2 me-4"></i>
          </button>
        </div>

        <div className="-mr-2 flex items-center sm:hidden">
          <button
            onClick={() => setShowingNavigationDropdown((previousState) => !previousState)}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
          >
            <svg
              className="h-6 w-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                className={!showingNavigationDropdown ? "inline-flex" : "hidden"}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path
                className={showingNavigationDropdown ? "inline-flex" : "hidden"}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </nav>
    </header >
  );
}
