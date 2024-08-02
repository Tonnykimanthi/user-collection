const Navbar = () => {
  return (
    <header className="flex items-center bg-primary-default p-2 text-white">
      <nav className="flex items-center justify-center">
        <ul className="text-lg font-medium">
          <li>Home</li>
        </ul>
      </nav>
      <button className="ml-auto rounded bg-secondary px-4 py-1 text-black transition hover:bg-secondary/90">
        Create new user
      </button>
    </header>
  );
};

export default Navbar;
