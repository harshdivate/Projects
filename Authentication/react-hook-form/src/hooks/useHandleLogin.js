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

const usehandleLogin = (email, password) => {
  console.log(`Email ins useHandleLogin is ${email}`);
  const [loginObject, setloginObject] = useState({});
  const account = configureAppWrite();

  const handleLogin = async () => {
    try {
      setloginObject(await account.createEmailSession(email, password));
      if (loginObject) {
        console.log(loginObject);

        console.log("Successfully Loged In");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return { handleLogin, loginObject };
};

export default usehandleLogin;
