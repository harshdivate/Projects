import sdk from "node-appwrite";
import dotenv from "dotenv";

dotenv.config();

async function getUserDetails() {
  const client = new sdk.Client();

  const users = new sdk.Users(client);

  client
    .setEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
    .setProject(process.env.PROJECT_ID) // Your project ID
    .setKey(process.env.SECRET_API_KEY); // Your secret API key
  const data = await users.get(process.env.SAMPLE_USERID);
  console.log(data);
}

getUserDetails();
