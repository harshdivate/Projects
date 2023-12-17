const { default: configureAppwrite } = require("./appwrite/configureAppwrite");

require("dotenv").config();

const account = configureAppwrite;
