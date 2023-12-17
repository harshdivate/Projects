import React, { useState } from "react";
import userContext from "./userContext";
import getSessionDetails from "../appwrite/getSessionDetails";

const UserContextProvider = ({ children }) => {
  const [isLoggedIn, setisLoggedIn] = useState(false);

  const addUser = () => {
    localStorage.setItem("isLoggedIn", true);
    setisLoggedIn(true);
    // console.log("Added User to Local Storage");
  };

  const removeUser = () => {
    localStorage.removeItem("isLoggedIn");
    setisLoggedIn(false)
    // console.log("Removed user from local storage");
  };

  const isUserLoggedIn = () => {
    return localStorage.getItem('isLoggedIn') || false;
  };

  const addUserLoginDetails=async(id)=>{
      const details = await getSessionDetails(id);
      console.log("Details are")
      console.log(details)
  }

  return (
    <userContext.Provider value={{ addUser, removeUser, isUserLoggedIn ,isLoggedIn,addUserLoginDetails}}>
      {children}
    </userContext.Provider>
  );
};

export default UserContextProvider;
