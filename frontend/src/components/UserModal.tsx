import { IoCloseOutline } from "react-icons/io5";
import useUsersContext from "../hooks/useUsersContext";
import React, { useEffect, useState } from "react";
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

  useEffect(() => {
    if (activeUser !== null) {
      const user = state.users[activeUser];
      if (user) {
        setFirstName(user.firstName);
        setLastName(user.lastName);
        setEmail(user.email);
      }
    }
  }, [activeUser, state.users]);

  if (activeUser === null) return null;

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
    <form
      className={`absolute left-1/2 top-1/2 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white px-5 pb-5 pt-10 text-lg shadow-lg transition [&>input]:w-full [&>input]:border [&>input]:p-1.5 [&>input]:outline-none [&>label]:font-medium ${userModalIsOpen ? "" : "scale-0"}`}
    >
      <button
        className="absolute right-2 top-2"
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
      <section className="flex mt-5 font-medium justify-evenly">
        <button
          className="px-8 bg-primary-light hover:bg-primary-default py-2 transition text-white rounded"
          onClick={(e) => {
            e.preventDefault();
            handleUpdateUser();
            handleModalIsOpen();
          }}
        >
          Update User
        </button>
        <button
          className="px-8 py-2 text-white transition bg-slate-700 rounded"
          onClick={(e) => {
            e.preventDefault();
            setDeleteModalIsOpen(true)
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
  );
};

export default UserModal;
