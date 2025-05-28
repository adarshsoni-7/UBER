import React, { createContext, useState } from "react";
export const UserDataContext = createContext();

 const UserContext = ({ children }) => {
     const [userData, setUserData] = useState({
        fullname: { firstName: "", lastName: "" },
        email: "",
     });

    return (
        <UserDataContext.Provider value={{ userData, setUserData }}>
            {children}
        </UserDataContext.Provider>
    );
}

export default UserContext;