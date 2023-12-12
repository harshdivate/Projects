import { ID } from "appwrite";
import configureAppWrite from "../appwrite/configureAppwrite";

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
