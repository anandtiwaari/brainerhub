import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Products } from "./components/Products";
import "./App.css";
// import { Login } from "@mui/icons-material";
import { Login } from "./components/Login";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Cart } from "./components/Cart";
import { Navbar } from "./components/Navbar";
import { Protected } from "./components/Protected";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const navigate = useNavigate();
  const loc = useLocation();
  console.log(loc, "show");
  const selectorr = useSelector((state) => state.LoginSlice);
  // console.log(selectorr);
  const LoginDetails = [
    { Email: "admin@gmail.com" },
    { password: "Abcd@1234" },
  ];

  return (
    <div className="App">
      {loc.pathname == "/" ? "" : <Navbar />}
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route
          exact
          path="/dashboard"
          element={<Protected Component={Dashboard} />}
        />
        <Route exact path="/cart" element={<Protected Component={Cart} />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
