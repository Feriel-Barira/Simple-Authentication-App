import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Register from "./components/Register";
import Login from "./components/Login";
import Footer from "./components/Footer";
import Profile from "./components/Profile";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const location = useLocation();

  return (
    <>
      <Navbar token={token} setToken={setToken} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/auth/register"
          element={<Register token={token} setToken={setToken} />}
        />
        <Route
          path="/auth/login"
          element={<Login token={token} setToken={setToken} />}
        />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
