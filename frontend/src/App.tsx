import CreateUserForm from "./components/CreateUserForm";
import Navbar from "./components/Navbar";
import UserModal from "./components/UserModal";
import Users from "./components/Users";

function App() {
  return (
    <>
      <Navbar />
      <Users />
      <CreateUserForm />
      <UserModal />
    </>
  );
}

export default App;
