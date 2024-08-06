import { useEffect, useRef } from "react";
import useUsersContext from "../hooks/useUsersContext";
import { IoCloseOutline } from "react-icons/io5";

const CreateUserForm = () => {
  const {
    formIsActive,
    setFormIsActive,
    dispatch,
    firstName,
    lastName,
    email,
    setFirstName,
    setLastName,
    setEmail,
  } = useUsersContext();
  const formElRef = useRef<HTMLFormElement | null>(null);

  const handleCreateUser = async () => {
    try {
      const resp = await fetch("http://localhost:4000/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
        }),
      });

      if (resp.ok) {
        const json = await resp.json();
        dispatch({ type: "CREATE_USER", payload: json });
        setFirstName("");
        setLastName("");
        setEmail("");
        setFormIsActive(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const handleCloseForm = (e: Event) => {
      if (!formElRef.current?.contains(e.target as HTMLFormElement)) {
        setFormIsActive(false);
      }
    };

    document.body.addEventListener("mousedown", handleCloseForm);

    return () => {
      document.body.addEventListener("mousedown", handleCloseForm);
    };
  });

  return (
    <div
      className={`absolute bottom-0 left-0 right-0 top-0 bg-black/50 transition ${formIsActive ? "" : "scale-0"}`}
    >
      <form
        ref={formElRef}
        className={`absolute left-1/2 top-1/2 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white px-5 pb-8 pt-10 text-lg duration-500 [&>input]:w-full [&>input]:border [&>input]:p-1.5 [&>input]:outline-none [&>label]:font-medium ${formIsActive ? "-translate-y-1/2" : "-translate-y-[200%]"} transition`}
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          handleCreateUser();
        }}
      >
        <button
          className="absolute right-2 top-2 transition hover:scale-110"
          onClick={(e) => {
            e.preventDefault();
            setFormIsActive(false);
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
        <button className="mt-5 w-full bg-primary-default py-2 text-white transition hover:bg-primary-dark">
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateUserForm;
