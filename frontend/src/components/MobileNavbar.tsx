import { NavLink } from "react-router-dom";
import { IoCloseOutline } from "react-icons/io5";
import { useRef } from "react";

type MobileNavbarProps = {
  mobileNavbarIsActive: boolean;
  setMobileNavbarIsActive: React.Dispatch<React.SetStateAction<boolean>>;
};

const MobileNavbar = ({
  mobileNavbarIsActive,
  setMobileNavbarIsActive,
}: MobileNavbarProps) => {
  const handleClickNavLinks = () => {
    setMobileNavbarIsActive(false);
  };

  return (
    <nav
      className={`absolute bottom-0 left-0 top-0 flex w-0 items-center justify-center bg-primary-dark transition-all ${mobileNavbarIsActive ? "w-full" : "w-0"}`}
    >
      <button
        className="absolute right-5 top-5"
        onClick={() => setMobileNavbarIsActive(false)}
      >
        <IoCloseOutline className="size-7 transition hover:scale-110" />
      </button>
      <ul className="flex flex-col gap-y-4 text-lg font-medium text-white">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive ? "underline underline-offset-4" : ""
          }
          onClick={handleClickNavLinks}
        >
          Home
        </NavLink>
        <NavLink
          to={"about"}
          className={({ isActive }) =>
            isActive ? "underline underline-offset-4" : ""
          }
          onClick={handleClickNavLinks}
        >
          About
        </NavLink>
        <NavLink
          to={"contact"}
          className={({ isActive }) =>
            isActive ? "underline underline-offset-4" : ""
          }
          onClick={handleClickNavLinks}
        >
          Contact
        </NavLink>
        <NavLink
          to={"https://portfolio-fawn-six-94.vercel.app/"}
          className={({ isActive }) =>
            isActive ? "underline underline-offset-4" : ""
          }
          onClick={handleClickNavLinks}
        >
          Portfolio
        </NavLink>
      </ul>
    </nav>
  );
};

export default MobileNavbar;
