import configureAppWrite from "./configureAppwrite";

async function getSessionDetails(id) {
  const account = configureAppWrite();
  const details = await account.getSession(id);
  return details;
}

export default getSessionDetails;
