import { Route, Routes } from "react-router-dom";
import Login from "./pages/Auth/Login/Login";
import HomePage from "./pages/HomePage/Homepage";
import Vehicle from "./pages/Vehicle/Vehicle";
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
        <Route path="/vehicle" element={<Vehicle />} />
      </Routes>
  );
}

export default App;