import configureAppWrite from "../appwrite/configureAppwrite";

const usehandleLogin = () => {
  const account = configureAppWrite();

  const handleLogin = async (email, password) => {
    try {
      const loginObject = await account.createEmailSession(email, password);
      await console.log(account.listIdentities());
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
