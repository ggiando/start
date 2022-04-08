import { Route, Routes } from "react-router-dom";
import Login from "./pages/Auth/Login/Login";
import HomePage from "./pages/HomePage/Homepage";
import Product from "./pages/Product/Product";
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/home");
  })
  
  return (
      <Routes>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/product" element={<Product />} />
      </Routes>
  );
}

export default App;