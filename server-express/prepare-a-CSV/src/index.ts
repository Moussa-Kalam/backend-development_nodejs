import express from "express";
import { promises as fsPromises } from "fs";
import csv from "csvtojson";
import { stringify } from "querystring";

const app = express();
const port = 3000;

const inputFile = "./users.csv";
const outputFile = "./users.json";

// Create the end point /convert
app.get("/convert", (req, res) => {
  res.send("Converting in progress!");
  csv()
    .fromFile(inputFile)
    .then((data) => {
      let newData = data.map(
        (item: { first_name: string; last_name: string; phone: string }) => {
          let first_name = item.first_name;
          let last_name = item.last_name;
          let phone = item.phone;

          if (item.phone === "") {
            phone = "missing data";
          }
          return { first_name, last_name, phone };
        }
      );
      fsPromises.writeFile(outputFile, JSON.stringify(newData));
    });
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
