import { NavLink } from "react-router-dom";
import useUsersContext from "../hooks/useUsersContext";

const Navbar = () => {
  const { setFormIsActive } = useUsersContext();
  return (
    <header className="flex items-center bg-primary-default p-2 text-white">
      <nav className="flex w-full items-center justify-center">
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
            to={"portfolio"}
            className={({ isActive }) =>
              isActive ? "underline underline-offset-4" : ""
            }
          >
            Portfolio
          </NavLink>
        </ul>
      </nav>
      <button
        className="ml-auto w-52 rounded bg-secondary px-4 py-1 text-black transition hover:bg-secondary/90"
        onClick={() => {
          setFormIsActive((isActive) => !isActive);
        }}
      >
        Create new user
      </button>
    </header>
  );
};

export default Navbar;
