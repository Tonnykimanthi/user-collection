import { useEffect } from "react";
import useUsersContext from "../hooks/useUsersContext";
import { formatDistanceToNow } from "date-fns";

const Users = () => {
  const { state, dispatch, setActiveUser, setUserModalIsOpen } = useUsersContext();

  useEffect(() => {
    const fetchUsers = async () => {
      const resp = await fetch("http://localhost:4000/");
      const json = await resp.json();
      console.log(state);
      dispatch({ type: "GET_USERS", payload: json });
    };
    fetchUsers();
  }, [dispatch]);

  const handleClickedUser = (index: number) => {
    setActiveUser(index);
    setUserModalIsOpen(true);
  };

  return (
    <main>
      <table className="mt-10 w-full text-center">
        <thead>
          <tr className="bg-slate-700 text-white [&>th]:py-3">
            <th>FirstName</th>
            <th>LastName</th>
            <th>Email address</th>
            <th>Created</th>
          </tr>
        </thead>
        <tbody>
          {state.users?.map((user, index) => (
            <tr
              key={user._id}
              className="cursor-pointer odd:bg-white even:bg-secondary [&>td]:border [&>td]:border-slate-700 [&>td]:py-2"
              onClick={() => {
                handleClickedUser(index);
              }}
            >
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>
                {formatDistanceToNow(new Date(user.createdAt), {
                  addSuffix: true,
                })}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default Users;
