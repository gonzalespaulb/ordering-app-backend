const express = require("express");
const dotenv = require("dotenv");

dotenv.config({ path: "./.env" });

const app = express();

app.enable("trust proxy");

app.get("/", (req, res) => {
  res.send("<h1>Hello! Welcome!!!!</h1>");
});

// Error checker
process.on("uncaughtException", (err) => {
  console.error("UNCAUGHT EXCEPTION! 🤯 Shutting down...");
  console.error(err.name, err.message);
  process.exit(1);
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`App running on port ${port}!`);
});

process.on("unhandledRejection", (err) => {
  console.error("UNHANDLE REJECTION! 🤯 Shutting down...");
  console.error(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
