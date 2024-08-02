const CreateUserForm = () => {
  return (
    <form className="absolute left-1/2 top-4 w-full max-w-md -translate-x-1/2 rounded-lg bg-white p-5 text-lg [&>input]:w-full [&>input]:border [&>input]:p-1.5 [&>input]:outline-none">
      <label className="font-medium">FirstName</label> <br />
      <input type="text" />
      <label className="font-medium">LastName</label> <br />
      <input type="text" />
      <label className="font-medium">Email</label> <br />
      <input type="email" />
      <button className="mx-auto mt-5 w-full bg-primary-default py-2 text-white transition hover:bg-primary-dark">
        Create
      </button>
    </form>
  );
};

export default CreateUserForm;
