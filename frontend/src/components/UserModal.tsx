import { IoCloseOutline } from "react-icons/io5";
import useUsersContext from "../hooks/useUsersContext";

const UserModal = () => {
  const { state, activeUser } = useUsersContext();

  const user = activeUser !== null ? state.users[activeUser] : null;
  if (!user) return null;

  return (
    <form className="absolute left-1/2 top-1/2 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white px-5 pb-5 pt-10 text-lg shadow-lg [&>input]:w-full [&>input]:border [&>input]:p-1.5 [&>input]:outline-none [&>label]:font-medium">
      <button className="absolute right-2 top-2">
        <IoCloseOutline className="size-7" />
      </button>
      <label>First name:</label> <br />
      <input type="text" value={user.firstName} />
      <label className="mt-4 block">Last name:</label>
      <input type="text" value={user.lastName} />
      <label className="mt-4 block">Email:</label>
      <input type="email" value={user.email} />
      <button className="mt-5 w-full py-2 text-primary-default transition">
        Edit User
      </button>
    </form>
  );
};

export default UserModal;
