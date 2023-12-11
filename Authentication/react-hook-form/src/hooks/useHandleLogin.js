import { useNavigate } from "react-router-dom";
import config from "../config/config";
import { Client, Account } from "appwrite";
import { useState } from "react";

function configureAppWrite() {
  const client = new Client()
    .setEndpoint(config.appWriteURL)
    .setProject(config.appWriteProjectID);
  return new Account(client);
}

const usehandleLogin = () => {
  const account = configureAppWrite();

  const handleLogin = async (email, password) => {
    try {
      const loginObject = await account.createEmailSession(email, password);
      if (loginObject) {
        console.log(loginObject);
        return loginObject;
        console.log("Successfully Loged In");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return { handleLogin };
};

export default usehandleLogin;
