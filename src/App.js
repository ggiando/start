import './App.css';

import { useState, useEffect } from "react";

import { Route, Routes } from "react-router-dom";

import Login from "./pages/Auth/Login/Login";

function App() {
  const [nclick, setCount] = useState(0);

  useEffect(() => {

  }, [nclick]);

  function handleClick() {
    setCount( nclick + 1);
  }

  return (
    <div>
      <Routes>
        <Route path="/auth/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
