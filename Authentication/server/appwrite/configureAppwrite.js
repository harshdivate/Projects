import sdk from "node-appwrite";

function configureAppwrite() {
  const client = new sdk.Client();

  const users = new sdk.Users(client);

  client
    .setEndpoint(process.env.APPWRITE_URL) // Your API Endpoint
    .setProject(process.env.PROJECT_ID) // Your project ID
    .setKey(process.env.SECRET_API_KEY); // Your secret API key

  return users;
}

export default configureAppwrite;
