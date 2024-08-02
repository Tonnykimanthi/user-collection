import { useEffect } from "react";
import useUsersContext from "../hooks/useUsersContext";

const Users = () => {
  const { state, dispatch } = useUsersContext();

  useEffect(() => {
    const fetchUsers = async () => {
      const resp = await fetch("http://localhost:4000/");
      const json = await resp.json();
      console.log(state);
      dispatch({ type: "GET_USERS", payload: json });
    };
    fetchUsers();
  }, []);

  return (
    <main>
      <table className="mt-10 w-full text-center">
        <thead>
          <tr className="bg-slate-700 text-white [&>th]:py-3">
            <th>FirstName</th>
            <th>LastName</th>
            <th>Email address</th>
            <th>created At</th>
          </tr>
        </thead>
        <tbody>
          {state.users?.map((user) => (
            <tr
              key={user.id}
              className="odd:bg-white even:bg-secondary [&>td]:border [&>td]:border-slate-700 [&>td]:py-2"
            >
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>20 mins ago</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default Users;
