import useUsersContext from "../hooks/useUsersContext";

type User = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  createdAt: string;
};

const DeleteUserModal = ({ id, user }: { id: string; user: User }) => {
  const { dispatch, deleteModalIsOpen, setDeleteModalIsOpen, setUserModalIsOpen } =
    useUsersContext();

  const handleDeleteUser = async () => {
    try {
      const resp = await fetch(`http://localhost:4000/${id}`, {
        method: "DELETE",
      });

      if (!resp.ok) {
        throw new Error("The user not found");
      }
      if (resp.ok) {
        dispatch({ type: "DELETE_USER", payload: user });
        setDeleteModalIsOpen(false);
        setUserModalIsOpen(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className={`absolute left-1/2 top-1/2 w-10/12 origin-bottom-right -translate-x-1/2 -translate-y-1/2 rounded-lg bg-slate-700 p-5 text-center text-white shadow-md transition-all ${deleteModalIsOpen ? "" : "scale-0"}`}
    >
      <h4 className="text-2xl font-medium">Delete User</h4>
      <p className="mb-5 mt-4 leading-tight">
        Confirming will permanently delete the selected user. <br /> This action
        cannot be undone.
      </p>
      <section className="flex items-center justify-evenly font-medium">
        <button
          className="w-32 rounded border bg-slate-100 py-1 text-black"
          onClick={(e) => {
            e.preventDefault();
            setDeleteModalIsOpen(false);
          }}
        >
          Cancel
        </button>
        <button
          className="w-32 rounded bg-red-500 py-1"
          onClick={(e) => {
            e.preventDefault();
            handleDeleteUser();
          }}
        >
          Delete
        </button>
      </section>
    </div>
  );
};

export default DeleteUserModal;
