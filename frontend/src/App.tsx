import CreateUserForm from "./components/CreateUserForm";
import Navbar from "./components/Navbar";
import UserModal from "./components/UserModal";
import About from "./pages/About";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <CreateUserForm />
      <UserModal />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
