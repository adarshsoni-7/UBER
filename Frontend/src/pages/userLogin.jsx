import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { UserDataContext } from "../context/UserContext";
import axios from "axios";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});

  const navigate = useNavigate();

  const { user, setUser } = useContext(UserDataContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      email: email,
      password: password,
    };

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/users/login`,
      userData
    );

    if (response.status === 200) {
      const data = response.data;
      setUser(data.user);
      localStorage.setItem("token", data.token);
      navigate("/home");
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          src="https://logospng.org/download/uber/logo-uber-4096.png"
          alt="uber-logo-img"
          className="w-16 mb-7"
        />
        <form onSubmit={handleSubmit}>
          <h3 className="text-lg font-medium mb-2">What's your email?</h3>

          <input
            required
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 w-full text-lg placeholder::text-base"
            type="email"
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h3 className="text-lg font-medium mb-2">Enter Password</h3>

          <input
            required
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2   w-full text-lg placeholder::text-base"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="bg-[#111] text-white font-semibold mb-3 mt-5 rounded px-4 py-2 w-full text-xl">
            Login
          </button>

          <p className="text-center">
            New here ?{" "}
            <Link to="/signup" className="text-blue-500">
              Create New Account
            </Link>
          </p>
        </form>
      </div>

      <div>
        <Link
          to="/captain-login"
          className="bg-[#10b461] flex items-center justify-center text-white font-semibold mb-7 rounded px-4 py-2 w-full text-xl"
        >
          Sign In as Captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
