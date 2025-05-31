import React from "react";
import { Routes, Route} from "react-router-dom";
import Start from "./pages/Start";
import UserLogin from "./pages/userLogin";
import UserSignup from "./pages/userSignup";
import CaptainSignup from "./pages/captainSignup";
import CaptainLogin from "./pages/captainLogin";
import Home from "./pages/Home";
import UserProtectedWrapper from "./pages/UserProtectedWrapper";
import UserLogout from "./pages/UserLogout";
import CaptainHome from "./pages/CaptainHome";
import CaptainProtectedWrapper from "./pages/CaptainProtectedWrapper";
import CaptainLogout from "./pages/CaptainLogout";
 
const App = () => {
  return (
    
      <div>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/login" element={<UserLogin />} />
          <Route path="/signup" element={<UserSignup />} />
          <Route path="/home" element={<UserProtectedWrapper><Home /></UserProtectedWrapper>} />
          <Route path="/users/logout" element={<UserProtectedWrapper><UserLogout /></UserProtectedWrapper>} />
          <Route path="/captain-login" element={<CaptainLogin />} />
          <Route path="/captain-signup" element={<CaptainSignup />} />           
          <Route path="/captain-home" element={<CaptainProtectedWrapper><CaptainHome /></CaptainProtectedWrapper>}/>
        <Route path="/captain-logout" element={<CaptainProtectedWrapper><CaptainLogout /></CaptainProtectedWrapper>} />
        </Routes>
      </div>
     
  );
};

    export default App;
