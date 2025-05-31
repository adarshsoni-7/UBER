import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { UserDataContext } from "../context/UserContext";
import axios from "axios";

const UserSignup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const { user, setUser } = useContext(UserDataContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      fullname: { firstname: firstName, lastname: lastName },
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/users/signup`,
        newUser
      );

      if (response.status === 201) {
        const data = response.data;
        setUser(data.user);
        localStorage.setItem("token", data.token);
        // Clear form after successful signup
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        navigate("/home");
      }
    } catch (error) {
      console.error("Signup failed:", error.response.data);
      // You might want to show an error message to the user here
    }
  };

  return (
    <div>
      <div className="p-7 h-screen flex flex-col justify-between">
        <div>
          <img
            src="https://logospng.org/download/uber/logo-uber-4096.png"
            alt="uber-logo-img"
            className="w-16 mb-7"
          />
          <form onSubmit={handleSubmit}>
            <h3 className="text-lg w-1/2 font-medium mb-2">
              What's your name?
            </h3>
            <div className="flex gap-4 mb-5">
              <input
                onChange={(e) => setFirstName(e.target.value)}
                required
                className="bg-[#eeeeee] w-[150px]  rounded px-4   py-[9px] text-lg placeholder::text-base focus:outline-none "
                type="text"
                placeholder="First Name"
                value={firstName}
              />
              <input
                onChange={(e) => setLastName(e.target.value)}
                required
                className="bg-[#eeeeee] w-[150px]   rounded px-4  py-[9px] text-lg placeholder::text-base focus:outline-none "
                type="text"
                placeholder="Last Name"
                value={lastName}
              />
            </div>

            <h3 className="text-lg font-medium mb-5">What's your email?</h3>
            <input
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-[#eeeeee] mb-6 rounded px-4 py-2 w-full text-lg placeholder::text-base focus:outline-none  "
              type="email"
              placeholder="example@gmail.com"
              value={email}
            />

            <h3 className="text-lg font-medium mb-2">Enter Password</h3>
            <input
              onChange={(e) => setPassword(e.target.value)}
              required
              className="bg-[#eeeeee] mb-5 rounded px-4 py-2 w-full  text-lg placeholder::text-base focus:outline-none "
              type="password"
              placeholder="Enter your password"
              value={password}
            />
            <button
              type="submit"
              className="bg-[#111] text-white font-semibold mb-3 mt-5 rounded px-4 py-2 w-full text-xl"
            >
              Create Account
            </button>
            <p className="text-center">
              Alredy have an account ?{" "}
              <Link to="/login" className="text-blue-500">
                Sign In
              </Link>
            </p>
          </form>
        </div>
        <p className="text-[13px] leading-tight">
          By proceeding, you consent to get Calls, Whatsapp or SMS messages,
          including by automated means, from Uber and its affiliates to the
          number provided{" "}
        </p>
      </div>
    </div>
  );
};

export default UserSignup;
