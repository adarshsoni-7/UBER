import React, { createContext, useState } from "react";
export const CaptainDataContext = createContext();

const CaptainContext = ({ children }) => {
  const [captain, setCaptain] = useState({
    email: "",
    fullname: { firstName: "", lastName: "" },
    vehicleColor: "",
    vehicleCapacity: "",
    vehiclePlate: "",
    vehicleType: "",
  });

  return (
    <CaptainDataContext.Provider value={{ captain, setCaptain }}>
      {children}
    </CaptainDataContext.Provider>
  );
};

export default CaptainContext;
