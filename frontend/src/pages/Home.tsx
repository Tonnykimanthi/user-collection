import { useEffect, useState } from "react";
import useUsersContext from "../hooks/useUsersContext";
import { formatDistanceToNow } from "date-fns";
import MobileUserList from "../components/MobileUserList";

const Users = () => {
  const { state, dispatch, setActiveUser, setUserModalIsOpen } =
    useUsersContext();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    try {
      const fetchUsers = async () => {
        const resp = await fetch("http://localhost:4000/");
        if (!resp.ok) {
          setError(true);
          setIsLoading(false);
        }
        if (resp.ok) {
          const json = await resp.json();
          console.log(state);
          dispatch({ type: "GET_USERS", payload: json });
          setIsLoading(false);
          setError(false);
        }
      };
      fetchUsers();
    } catch (error) {
      console.log(error);
      setError(true);
      setIsLoading(false);
    }
  }, [dispatch]);

  const handleClickedUser = (index: number) => {
    setActiveUser(index);
    setUserModalIsOpen(true);
  };

  return (
    <main className="grid place-items-center">
      {isLoading && <span className="loader mt-10"></span>}
      {error && <div className="text-black">An Error has occured</div>}
      {!error && !isLoading && (
        <>
          <table className="mt-10 w-full text-center max-sm:hidden">
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
          <MobileUserList
            users={state.users}
            handleClickedUser={handleClickedUser}
          />
        </>
      )}
    </main>
  );
};

export default Users;
