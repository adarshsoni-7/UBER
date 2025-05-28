import React from "react";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import UserLogin from "./pages/userLogin";
import UserSignup from "./pages/userSignup";
import CaptainSignup from "./pages/captainSignup";
import CaptainLogin from "./pages/captainLogin";

const App = () => {
  return (
    
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<UserLogin />} />
          <Route path="/signup" element={<UserSignup />} />
          <Route path="/captain-login" element={<CaptainLogin />} />
          <Route path="/captain-signup" element={<CaptainSignup />} />
        </Routes>
      </div>
     
  );
};

export default App;
