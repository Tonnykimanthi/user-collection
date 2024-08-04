import { NavLink } from "react-router-dom";
import useUsersContext from "../hooks/useUsersContext";
import MobileNavbar from "./MobileNavbar";
import { useState } from "react";
import { RiMenu2Fill } from "react-icons/ri";

const Navbar = () => {
  const { setFormIsActive } = useUsersContext();
  const [mobileNavbarIsActive, setMobileNavbarIsActive] = useState(false);
  return (
    <header className="flex items-center bg-primary-default p-2 text-white">
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
      <button
        className="ml-auto w-52 rounded bg-secondary px-4 py-1 text-black transition hover:bg-secondary/90 max-sm:w-40"
        onClick={() => {
          setFormIsActive((isActive) => !isActive);
        }}
      >
        Create new user
      </button>
      <MobileNavbar
        mobileNavbarIsActive={mobileNavbarIsActive}
        setMobileNavbarIsActive={setMobileNavbarIsActive}
      />
    </header>
  );
};

export default Navbar;
