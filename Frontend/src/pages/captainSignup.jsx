import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { CaptainDataContext } from "../context/CaptainContext";
import axios from "axios";


const CaptainSignup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [vehicleColor, setVehicleColor] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehicleType, setVehicleType] = useState("");
   

  const navigate = useNavigate();

  const { captain, setCaptain } = useContext(CaptainDataContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newCaptain = {
      fullname: { firstname: firstName, lastname: lastName },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        capacity: vehicleCapacity,
        plate: vehiclePlate,
        vehicleType: vehicleType,
      },
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/captains/signup`,
        newCaptain
      );

      if (response.status === 201) {
        const data = response.data;
        setCaptain(data.captain);
        localStorage.setItem("token", data.token);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setVehicleColor("");
        setVehicleCapacity("");
        setVehiclePlate("");
        setVehicleType("");
        navigate("/captain-home");
      }
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };

  return (
    <div>
      <div className="p-7 h-screen flex flex-col justify-between">
        <div>
          <img
            src="https://logos-world.net/wp-content/uploads/2020/05/Uber-Emblem.png"
            alt="uber-logo-img"
            className="w-16 mb-7"
          />
          <form onSubmit={handleSubmit}>
            <h3 className="text-[16px] w-1/2 font-medium mb-2">Captain's name?</h3>
            <div className="flex gap-4 mb-5">
              <input
                onChange={(e) => setFirstName(e.target.value)}
                required
                className="bg-[#eeeeee] w-[150px]  rounded px-4   py-[7px] text-lg placeholder::text-base focus:outline-none "
                type="text"
                placeholder="First Name"
                value={firstName}
              />
              <input
                onChange={(e) => setLastName(e.target.value)}
                required
                className="bg-[#eeeeee] w-[150px]   rounded px-4  py-[7px] text-lg placeholder::text-base focus:outline-none "
                type="text"
                placeholder="Last Name"
                value={lastName}
              />
            </div>

            <h3 className="text-[16px] font-medium mb-5">Captain's email?</h3>
            <input
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-[#eeeeee] mb-6 rounded px-4 py-[7px] w-full text-lg placeholder::text-base focus:outline-none  "
              type="email"
              placeholder="example@gmail.com"
              value={email}
            />
            <h3 className="text-[16px] font-medium mb-5">Captain's password?</h3>
            <input
              onChange={(e) => setPassword(e.target.value)}
              required
              className="bg-[#eeeeee] mb-6 rounded px-4 py-[7px] w-full text-lg placeholder::text-base focus:outline-none  "
              type="password"
              placeholder="Password"
              value={password}
            />

            <h3 className="text-[16px] font-medium mb-2">Vehicle Information</h3>
            <div className="flex gap-4 mb-5">
              <input
                onChange={(e) => setVehicleColor(e.target.value)}
                required
                className="bg-[#eeeeee] w-[150px] rounded px-4 py-[7px] text-lg placeholder::text-sm focus:outline-none"
                type="text"
                placeholder="Vehicle Color"
                value={vehicleColor}
              />
              <input
                onChange={(e) => setVehicleCapacity(e.target.value)}
                required
                className="bg-[#eeeeee] w-[150px] rounded px-4 py-[7px] text-lg placeholder::text-sm focus:outline-none"
                type="number"
                placeholder="Capacity"
                value={vehicleCapacity}
              />
            </div>
            <div className="flex gap-4 mb-3">
              <input
                onChange={(e) => setVehiclePlate(e.target.value)}
                required
                className="bg-[#eeeeee] w-[150px] rounded px-4 py-[7px] text-lg placeholder::text-sm focus:outline-none"
                type="text"
                placeholder="Vehicle Plate"
                value={vehiclePlate}
              />
              <select
                onChange={(e) => setVehicleType(e.target.value)}
                required
                className="bg-[#eeeeee] w-[150px] rounded px-4 py-[7px] text-lg focus:outline-none"
                value={vehicleType}
              >
                <option value="">Vehicle Type</option>
                <option value="car">Car</option>
                <option value="auto">Auto</option>
                <option value="bike">Bike</option>
              </select>
            </div>

            <button
              type="submit"
              className="bg-[#111] text-white font-semibold mb-3 mt-5 rounded px-4 py-2 w-full text-xl"
            >
              Create Captain
            </button>
            <p className="text-center mb-3">
              Alredy have an account ?{" "}
              <Link to="/captain-login" className="text-blue-500">
                Sign In
              </Link>
            </p>
          </form>
        </div>
        <p className="text-[11px] leading-tight mb-5">
          This site is protected by reCAPTCHA and the{" "}
          <span className="underline"> Google Privacy Policy</span> and{" "}
          <span className="underline">Terms of Service</span> apply.
        </p>
      </div>
    </div>
  );
};

export default CaptainSignup;
