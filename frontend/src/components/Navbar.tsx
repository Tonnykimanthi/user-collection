import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import useUsersContext from "../hooks/useUsersContext";
// Components
import MobileNavbar from "./MobileNavbar";
// Icons
import { RiMenu2Fill } from "react-icons/ri";
import { GoPlus } from "react-icons/go";

const Navbar = () => {
  const { setFormIsActive } = useUsersContext();
  const [mobileNavbarIsActive, setMobileNavbarIsActive] = useState(false);
  const location = useLocation();
  return (
    <header className="flex items-center bg-primary-default/10 p-4 text-white">
      <button
        onClick={() => setMobileNavbarIsActive(true)}
        className="sm:hidden"
      >
        <RiMenu2Fill className="size-6" />
      </button>
      <nav className="flex w-full items-center justify-center max-sm:hidden">
        <ul className="flex gap-x-4 text-lg font-medium text-secondary">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive ? "underline underline-offset-4" : ""
            }
          >
            Home
          </NavLink>
          <NavLink
            to={"about"}
            className={({ isActive }) =>
              isActive ? "underline underline-offset-4" : ""
            }
          >
            About
          </NavLink>
          <NavLink
            to={"contact"}
            className={({ isActive }) =>
              isActive ? "underline underline-offset-4" : ""
            }
          >
            Contact
          </NavLink>
          <NavLink
            to={"https://portfolio-fawn-six-94.vercel.app/"}
            className={({ isActive }) =>
              isActive ? "underline underline-offset-4" : ""
            }
          >
            Portfolio
          </NavLink>
        </ul>
      </nav>
      {location.pathname === "/" && (
        <button
          className="ml-auto flex w-52 items-center justify-center gap-x-2 rounded bg-primary-default px-4 py-1.5 text-white transition hover:bg-primary-dark max-sm:w-fit max-sm:px-2.5 max-sm:py-2.5"
          onClick={() => {
            setFormIsActive((isActive) => !isActive);
          }}
        >
          <GoPlus className="size-6" />
          <span className="max-sm:hidden">Add new user</span>
        </button>
      )}

      <MobileNavbar
        mobileNavbarIsActive={mobileNavbarIsActive}
        setMobileNavbarIsActive={setMobileNavbarIsActive}
      />
    </header>
  );
};

export default Navbar;
