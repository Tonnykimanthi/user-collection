import { useState } from "react";
import useUsersContext from "../hooks/useUsersContext";

const CreateUserForm = () => {
  const { formIsActive, dispatch } = useUsersContext();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

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
        setFirstName('');
        setLastName('');
        setEmail('');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      className={`absolute left-1/2 top-1/2 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white px-5 py-8 text-lg [&>input]:w-full [&>input]:border [&>input]:p-1.5 [&>input]:outline-none [&>label]:font-medium ${formIsActive ? "-translate-y-1/2" : "-translate-y-[200%]"} transition`}
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleCreateUser();
      }}
    >
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
  );
};

export default CreateUserForm;
