import configureAppwrite from "./appwrite/configureAppwrite.js";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import express from "express";
import cors from "cors";

dotenv.config();
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
);
const account = configureAppwrite();

app.post("/getUserDetails", async (req, res) => {
  const data = await account.get(req.body.userId);
  res.json(data);
});

app.listen(process.env.PORT || 4500, () => {
  console.log("Server is running on port 4500");
});
