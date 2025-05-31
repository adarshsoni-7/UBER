import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CaptainLogout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios
      .get(`${import.meta.env.VITE_BASE_URL}/captains/logout`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          localStorage.removeItem("token");
          navigate("/captain-login");
        }
      })
      .catch((error) => {
        console.error("Logout error:", error.response.data);
        localStorage.removeItem("token");
        navigate("/captain-login");
      });
  }, [navigate]);

  return null;
};

export default CaptainLogout;
