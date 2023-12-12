import config from "../config/config";
import { Client, Account } from "appwrite";

function configureAppWrite() {
  const client = new Client()
    .setEndpoint(config.appWriteURL)
    .setProject(config.appWriteProjectID);
  return new Account(client);
}

export default configureAppWrite;
