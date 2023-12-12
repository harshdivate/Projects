import React from "react";
import config from "../config/config";
import { Client, Account, ID } from "appwrite";

function configureAppWrite() {
  const client = new Client()
    .setEndpoint(config.appWriteURL)
    .setProject(config.appWriteProjectID);
  return new Account(client);
}

const useHandleRegistration = () => {
  const registerUser = async (username, email, password) => {
    const account = configureAppWrite();
    const response = await account.create(
      ID.unique(),
      email,
      password,
      username
    );
    console.log(response);
    return response;
  };
  return registerUser;
};

export default useHandleRegistration;
