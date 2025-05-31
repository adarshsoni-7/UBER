import React, { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import axios from "axios";

const CaptainProtectedWrapper = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const { captain, setCaptain } = useContext(CaptainDataContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCaptainProfile = async () => {
      if (!token) {
        navigate("/captain-login");
        return;
      }

      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/captains/profile`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.status === 200) {
          setCaptain(response.data.captain);
        }
      } catch (error) {
        console.error("Error fetching captain profile:", error);
        localStorage.removeItem("token");
        navigate("/captain-login");
      } finally {
        setIsLoading(false);
      }
    };

    fetchCaptainProfile();
  }, [token, navigate, setCaptain]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-black"></div>
      </div>
    );
  }

  return <>{children}</>;
};

export default CaptainProtectedWrapper;
