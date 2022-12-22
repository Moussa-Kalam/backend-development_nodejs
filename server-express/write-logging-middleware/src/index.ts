import express from "express";
import logger from "./utilities/logger";

const app = express();
const port = 3000;

// Routes
// app.get("/", (req, res) => {
//   res.send("Welcome!");
// });

app.get("/continents", logger, (req, res) => {
  res.send("Welcome to continents!");
});

app.get("/countries", logger, (req, res) => {
  res.send("Welcome to countries!");
});

app.get("/cities", (req, res) => {
  res.send("Welcome to cities!");
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server started at localhost:${port}`);
});
