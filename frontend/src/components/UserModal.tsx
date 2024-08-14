import { IoCloseOutline } from "react-icons/io5";
import useUsersContext from "../hooks/useUsersContext";
import React, { useEffect, useRef, useState } from "react";
import DeleteUserModal from "./DeleteUserModal";

const UserModal = () => {
  const {
    state,
    activeUser,
    setActiveUser,
    userModalIsOpen,
    setUserModalIsOpen,
    setDeleteModalIsOpen,
    dispatch,
  } = useUsersContext();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const formElRef = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    if (activeUser !== null) {
      const user = state.users[activeUser];
      if (user) {
        setFirstName(user.firstName);
        setLastName(user.lastName);
        setEmail(user.email);
      }
      // Close modal by clicking outside it
      const handleCloseModal = (e: Event) => {
        if (!formElRef.current?.contains(e.target as Node)) {
          setUserModalIsOpen(false);
          setActiveUser(null);
        }
      };

      document.body?.addEventListener("mousedown", handleCloseModal);

      return () => {
        document.body?.removeEventListener("mousedown", handleCloseModal);
      };
    }
  }, [activeUser, state.users]);

  if (activeUser === null || !state.users[activeUser]) return null;

  const handleModalIsOpen = () => {
    setUserModalIsOpen(false);
    setActiveUser(null);
  };

  const handleUpdateUser = async () => {
    const updatedUser = {
      ...state.users[activeUser],
      firstName,
      lastName,
      email,
    };
    dispatch({ type: "UPDATE_USER", payload: updatedUser });

    try {
      const resp = await fetch(
        `http://localhost:4000/${state.users[activeUser]._id}`,
        {
          method: "PATCH",
          body: JSON.stringify({
            firstName,
            lastName,
            email,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      if (!resp.ok) {
        throw new Error("Unable to update the user");
      }
    } catch (error) {
      console.log(error);
      dispatch({ type: "UPDATE_USER", payload: state.users[activeUser] });
    }
  };

  return (
    <div
      className={`absolute bottom-0 left-0 right-0 top-0 bg-black/50 transition-all duration-1000 ${userModalIsOpen ? "" : "scale-0"}`}
    >
      <form
        ref={formElRef}
        className={`absolute left-1/2 top-1/2 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white px-5 pb-5 pt-10 text-lg shadow-lg transition [&>input]:w-full [&>input]:border [&>input]:p-1.5 [&>input]:outline-none [&>label]:font-medium`}
      >
        <button
          className="absolute right-2 top-2 hover:scale-110"
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            handleModalIsOpen();
          }}
        >
          <IoCloseOutline className="size-7" />
        </button>
        <label>First name:</label> <br />
        <input
          type="text"
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
        <label className="mt-4 block">Last name:</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
        <label className="mt-4 block">Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <section className="mt-5 flex justify-evenly font-medium">
          <button
            className="rounded bg-primary-light px-8 py-2 text-white transition hover:bg-primary-default"
            onClick={(e) => {
              e.preventDefault();
              handleUpdateUser();
              handleModalIsOpen();
            }}
          >
            Update User
          </button>
          <button
            className="rounded bg-slate-700 px-8 py-2 text-white transition"
            onClick={(e) => {
              e.preventDefault();
              setDeleteModalIsOpen(true);
            }}
          >
            Delete User
          </button>
        </section>
        <DeleteUserModal
          id={state.users[activeUser]._id}
          user={state.users[activeUser]}
        />
      </form>
    </div>
  );
};

export default UserModal;
