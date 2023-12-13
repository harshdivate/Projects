import React, { useState } from "react";
import userContext from "./userContext";

const UserContextProvider = ({ children }) => {
  const [isLoggedIn, setisLoggedIn] = useState(false);

  const addUser = () => {
    localStorage.setItem("isLoggedIn", true);
    setisLoggedIn(true);
    console.log("Added User to Local Storage");
  };

  const removeUser = () => {
    localStorage.removeItem("isLoggedIn");
    setisLoggedIn(false)
    console.log("Removed user from local storage");
  };

  const isUserLoggedIn = () => {
    return isLoggedIn;
  };

  return (
    <userContext.Provider value={{ addUser, removeUser, isUserLoggedIn }}>
      {children}
    </userContext.Provider>
  );
};

export default UserContextProvider;
